import { useState, useEffect } from "react";
import { getTutorials } from "../../../apiCalls/tutorialCalls";
import { Card } from "react-bootstrap";
import CustomCard from "../../fragments/Card";
import { Link } from "react-router-dom";

const TutorialView = () => {
  const [items, setItems] = useState<any[]>([]);

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
              <p>{"*****".substring(0, item.average % 5 + 1)}</p>
            </Card.Body>
          </CustomCard>
        </Link>
      ))}
    </div>
  );
};

export default TutorialView;
