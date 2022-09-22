import { Tutorial } from "../../../helpers/apiTypes";
import { Card } from "react-bootstrap";
import CustomCard from "../../fragments/util/Card";
import { Link } from "react-router-dom";
import Rating from "../../fragments/util/Rating";
import { useState } from "react";
import ViewLoader from "../../fragments/util/ViewLoader";
import { getTutorials } from "../../../api/tutorialCalls";

interface TutorialCardParams {
  items: Tutorial[]
}

const TutorialCard = (props: Readonly<TutorialCardParams>) => {
  return (
    <div className="tutorial-grid">
      {props.items.map(item => (
        <Link to={`/tutorial/${item.id}`} className="mt-0 text-decoration-none text-reset" key={item.id}>
          <CustomCard className="col tutorial-card">
            <Card.Img variant="top" src="/img/thumbnail.jpg" className="img" />
            <Card.Body>
              <Card.Title>{item.name} - {item.tutorialKind}</Card.Title>
              <p>Uratował życia milionów w kilka sekund. Dowiedz się jak...</p><br />
              <Rating initialValue={item.average} disabled />
            </Card.Body>
          </CustomCard>
        </Link>
      ))}
    </div>
  );
};

const TutorialView = () => {
  const [items, setItems] = useState([]);

  const onLoad = (loaded: () => void) => {
    getTutorials().then(res => res.json()).then(data => {
      setItems(data);
      loaded();
    }).catch(err => {
      console.log(err);
      loaded();
    });
  };
  
  return (
    <>
      <h1 className="my-3 text-center">Poradniki</h1>
      <ViewLoader onLoad={onLoad} element={<TutorialCard items={items} />} />
    </>
  );
};

export default TutorialView;
