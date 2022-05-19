import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTutorialById } from "../../../apiCalls/tutorialCalls";
import { Container, Card } from "react-bootstrap";
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
    <Container className="mt-3 mb-5">
      <h1>Tutorial - {data.name} - {data.tutorialKind}</h1>
      <Rating emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" initialRating={calcRating(data.average)} />
      <CustomCard className="mt-3 mx-3">
        <Card.Img variant="top" src="/img/thumbnail.jpg" height="360" />
        <Card.Body>
          <Card.Title>
            <h3>Kieszonkowstwo dla idiotów</h3>
            <ul>
              <li>
                <b>Krok 1</b><br />
                Sprawdź, czy osoba jest nieprzytomna.
              </li>
              <li>
                <b>Krok 2</b><br />
                Zlokalizuj portfel tej osoby.
              </li>
              <li>
                <b>Krok 3</b><br />
                Zabierz portfel i po cichu ulotnij się z miejsca zdarzenia.
              </li>
            </ul>
          </Card.Title>
        </Card.Body>
      </CustomCard>
    </Container>
  );
};

export default Tutorial;
