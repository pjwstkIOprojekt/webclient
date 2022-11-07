import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRoles } from "../../../hooks/useAuth";
import { usePopup } from "../../../hooks/usePopup";
import { isAuth } from "../../../helpers/authHelper";
import NotLoggedPopup from "../../fragments/popups/NotLoggedPopup";
import { Container, Card, Row } from "react-bootstrap";
import CustomCard from "../../fragments/util/Card";
import ContentsGenerator from "../../fragments/util/ContentsGenerator";
import ItemLink from "../../fragments/navigation/ItemLink";
import InnerHtml from "../../fragments/util/InnerHtml";
import Rating from "../../fragments/util/Rating";

const Tutorial = () => {
  const [data, setData] = useState("");
  const { tutorialId } = useParams();
  const roles = useRoles();
  const popup = usePopup();

  useEffect(() => {
    setData("");
    const tutorials = ["AtakEpilepsji", "Omdlenie", "Oparzenia", "PorazeniePradem", "RKO", "Udar1"];
    const id = tutorialId ? parseInt(tutorialId) : 0;
    fetch(`/tmp/${tutorials[id % tutorials.length]}.html`).then(res => res.text()).then(setData).catch(console.error);
  }, [tutorialId]);

  const review = () => {
    if (!isAuth(roles)) {
      popup(<NotLoggedPopup />);
    }
  };

  return (
    <Container className="my-5">
      <CustomCard className="my-3 w-50">
        <Card.Body>
          <Card.Title>
            <h3>Spis treści</h3>
          </Card.Title>
          <ul>
            <ContentsGenerator selector="h1, h3, h4" result={(ch, index) => <li key={index}><ItemLink to={ch.id}>{ch.textContent ?? ""}</ItemLink></li>} update={data === ""} />
          </ul>
        </Card.Body>
      </CustomCard>
      <InnerHtml content={data} containerClass="tutorial-content" />
      <Row className="text-center">
        <p>Jak pomocny okazał się ten poradnik? Podziel się swoją opinią.</p>
        <span onClick={review}>
          <Rating initialValue={0} disabled={!isAuth(roles)} />
        </span>
      </Row>
    </Container>
  );
};

export default Tutorial;
