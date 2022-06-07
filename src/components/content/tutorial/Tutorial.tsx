import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTutorialById } from "../../../apiCalls/tutorialCalls";
import { Container, Card, Row, Col, Alert } from "react-bootstrap";
import CAlert from "../../fragments/Alert";
import Rating from "react-rating";
import CustomCard from "../../fragments/Card";

const Tutorial = () => {
  const [data, setData] = useState<any>({});
  const { tutorialId } = useParams();

  useEffect(() => {
    if (tutorialId) {
      getTutorialById(parseInt(tutorialId)).then(res => res.json()).then(dat => setData(dat)).catch(err => console.log(err));
    }
  }, [tutorialId]);

  const calcRating = (x: number) => {
    const normalized = x * 5;
    const floored = Math.floor(normalized);
    return normalized % floored >= 0.5 ? floored + 0.5 : floored;
  };

  return (
    <Container className="my-5">
      <h1>Poradnik - {data.name} - {data.tutorialKind}</h1>
      <Row className="justify-content-end">
        <Col md="auto">
          <CustomCard className="mx-3">
            <Card.Body>
              <Card.Title>
                <h3>Spis treści</h3>
              </Card.Title>
              <ul>
                <li>
                  <b>Krok 1</b><br />
                  Tu będzie automatyczny spis treści
                </li>
                <li>
                  <b>Krok 2</b><br />
                  Tu będzie automatyczny spis treści
                </li>
                <li>
                  <b>Krok 3</b><br />
                  Tu będzie automatyczny spis treści
                </li>
                <li>
                  <b>Krok 4</b><br />
                  Tu będzie automatyczny spis treści
                </li>
                <li>
                  <b>Krok 5</b><br />
                  Tu będzie automatyczny spis treści
                </li>
              </ul>
            </Card.Body>
          </CustomCard>
        </Col>
      </Row>
      <CustomCard className="mt-3 mx-3">
        <Card.Img variant="top" src="/img/thumbnail.jpg" height="560" alt="Główny materiał wideo/obraz" />
        <Card.Body>
          <Card.Title>
            <h3>Kieszonkowstwo dla idiotów</h3>
          </Card.Title>
          <Card.Img variant="top" src="/img/thumbnail.jpg" height="560" />
          <p>Podejdź do leżącej osoby i upewnij się czy jest przytomna...</p>
          <p>Jakieś instrukcje....</p>
          <p>Paawfaniaonwaocjsocjapawoapwawvawfawwafaw</p>
          <p>Paawfaniaonwaocjsocjapawoapwawvawfawwafaw</p>
          <p>Paawfaniaonwaocjsocjapawoapwawvawfawwafaw</p>
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
        <Rating emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" initialRating={calcRating(data.average)} />
      </Row>
    </Container>
  );
};

export default Tutorial;
