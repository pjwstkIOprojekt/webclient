import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePopup } from "../../../hooks/usePopup";
import { getTutorialById } from "../../../api/tutorialCalls";
import { isAuth } from "../../../helpers/authHelper";
import NotLoggedPopup from "../../fragments/popups/NotLoggedPopup";
import { Container, Card, Row, Col, Alert } from "react-bootstrap";
import CustomCard from "../../fragments/util/Card";
import ItemLink from "../../fragments/navigation/ItemLink";
import CAlert from "../../fragments/util/Alert";
import Rating from "../../fragments/util/Rating";

const Tutorial = () => {
  const [data, setData] = useState<any>({});
  const [chapters, setChapters] = useState<HTMLHeadingElement[]>([]);
  const { tutorialId } = useParams();
  const popup = usePopup();

  useEffect(() => {
    if (tutorialId) {
      getTutorialById(parseInt(tutorialId)).then(res => res.json()).then(dat => setData(dat)).catch(err => console.log(err));
    }

    setChapters(Array.from(document.querySelectorAll("h2")));
  }, [tutorialId]);

  const review = () => {
    if (!isAuth()) {
      popup(<NotLoggedPopup />);
    }
  };

  return (
    <Container className="my-5">
      <h1>Poradnik - {data.name} - {data.tutorialKind}</h1>
      <Row className="justify-content-end">
        <Col>
          <img src="/img/thumbnail.jpg" />
        </Col>
        <Col md="auto">
          <CustomCard className="mx-3">
            <Card.Body>
              <Card.Title>
                <h3>Spis treści</h3>
              </Card.Title>
              <ul>
                {chapters.map((ch, index) => (
                  <li key={index}>
                    <ItemLink to={ch.id}>{ch.textContent ? ch.textContent : ""}</ItemLink>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </CustomCard>
        </Col>
      </Row>
      <CustomCard className="mt-3 mx-3">
        <Card.Body>
          <Card.Title>
            <h2 id="dt">Kieszonkowstwo dla opornych</h2>
          </Card.Title>
          <Card.Img variant="top" src="/img/thumbnail.jpg" height="560" />
          <p>Podejdź do leżącej osoby i upewnij się czy jest przytomna...</p>
          <p>Jakieś instrukcje....</p>
          <p>Paawfaniaonwaocjsocjapawoapwawvawfawwafaw</p>
          <Card.Title>
            <h2 id="dp">Rozdział 2</h2>
          </Card.Title>
          <p>Paawfaniaonwaocjsocjapawoapwawvawfawwafaw</p>
          <p>Paawfaniaonwaocjsocjapawoapwawvawfawwafaw</p>
          <Card.Title>
            <h2 id="dz">Słowa kończące</h2>
          </Card.Title>
          <p>Panie! A idź Pan w...</p>
        </Card.Body>
      </CustomCard>
      <CAlert className="my-4 mx-3">
        <Alert.Heading>Dodatkowe wskazówki:</Alert.Heading>
        <ul>
          <li>
            <b>Robienie tego w pobliżu komisariatu policji raczej nie jest dobrym pomysłem</b>
          </li>
          <li>
            <b>Nie rób sobie selfie, żeby pochwalić się nową zdobyczą w internecie</b>
          </li>
        </ul>
      </CAlert>
      <Row className="text-center">
        <p>Jak pomocny okazał się ten poradnik? Podziel się swoją opinią.</p>
        <span onClick={review}>
          <Rating initialValue={data.average} disabled={!isAuth()} />
        </span>
      </Row>
    </Container>
  );
};

export default Tutorial;
