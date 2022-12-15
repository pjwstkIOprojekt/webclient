import { TutorialResponse, getTutorials } from "../../../api/tutorialCalls";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CustomCard from "../../fragments/util/Card";
import { Card } from "react-bootstrap";
import Enum from "../../fragments/values/Enum";
import { TutorialType } from "../../../api/enumCalls";
import Rating from "../../fragments/util/Rating";
import { useState, useEffect } from "react";
import ViewLoader from "../../fragments/util/ViewLoader";

interface TutorialCardParams {
  items: TutorialResponse[]
}

const TutorialCards = (props: Readonly<TutorialCardParams>) => {
  const { t } = useTranslation();
  
  return (
    <div className="tutorial-grid">
      {props.items.map(item => (
        <Link to={`/tutorial/${item.tutorialId}`} className="mt-0 text-decoration-none text-reset" key={item.tutorialId}>
          <CustomCard className="col tutorial-card">
            <Card.Img variant="top" src={item.thumbnail} alt={t("Common.Thumbnail")} className="img" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <p><Enum enum={TutorialType} value={item.tutorialType} /></p>
              <Rating initialValue={item.avarageRating} disabled />
            </Card.Body>
          </CustomCard>
        </Link>
      ))}
    </div>
  );
};

const TutorialView = () => {
  const [items, setItems] = useState<TutorialResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const abort = new AbortController();

    getTutorials(abort).then(res => res.json()).then((data: TutorialResponse[]) => {
      if (data) {
        setItems(data);
      }

      setIsLoading(false);
    }).catch(err => {
      if (abort.signal.aborted) {
        return;
      }
      
      console.error(err);
      setIsLoading(false);
    });

    return () => abort.abort();
  }, []);
  
  return (
    <>
      <h1 className="my-3 text-center">{t("Tutorial.Tutorials")}</h1>
      <ViewLoader isLoaded={!isLoading} element={<TutorialCards items={items} />} />
    </>
  );
};

export default TutorialView;
