import { useState, useEffect } from "react";
import { getTutorials } from "../../../apiCalls/tutorialCalls";
import { Card } from "react-bootstrap";
import CustomCard from "../../fragments/Card";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const TutorialView = () => {
  const [items, setItems] = useState<any[]>([
    { id: 0, name: "testowy poradnik", average: 3 },
    { id: 1, name: "Wow!, Super poradnik", average: 4.5 }
  ]);

  useEffect(() => {
    getTutorials().then(res => res.json()).then(data => setItems(data)).catch(err => console.log(err));
  }, []);

  return (
    <div className="tutorial-grid">
      {items.map(item => (
        <Link to={`/tutorial/${item.id}`} className="mt-0 text-decoration-none text-reset" key={item.id}>
          <CustomCard className="col">
            <Card.Img variant="top" src="/img/thumbnail.jpg" className="img" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <p>Uratował życia milionów w kilka sekund. Dowiedz się jak...</p><br />
              <Rating emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" initialRating={item.average} readonly />
            </Card.Body>
          </CustomCard>
        </Link>
      ))}
    </div>
  );
};

export default TutorialView;
