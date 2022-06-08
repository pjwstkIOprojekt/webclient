import { useState, useEffect } from "react";
import { getTutorials } from "../../../apiCalls/tutorialCalls";
import { Container, Card } from "react-bootstrap";
import Spinner from "../../fragments/util/Spinner";
import CustomCard from "../../fragments/util/Card";
import { Link } from "react-router-dom";
import Rating from "../../fragments/util/Rating";

const TutorialView = () => {
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTutorials().then(res => res.json()).then(data => {
      setItems(data);
      setIsLoading(false);
    }).catch(err => console.log(err));
  }, []);

  if (isLoading) {
    return (
      <Container className="text-center mt-5">
        <Spinner />
      </Container>
    );
  }

  const calcRating = (x: number) => {
    const normalized = x * 5;
    const floored = Math.floor(normalized);
    return normalized % floored >= 0.5 ? floored + 0.5 : floored;
  };

  return (
    <div className="tutorial-grid">
      {items.map(item => (
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

export default TutorialView;
