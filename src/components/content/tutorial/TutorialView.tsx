import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import CustomCard from "../../fragments/Card";
import { Link } from "react-router-dom";

interface TutorialType {
  id: number,
  name: string
}

const tutorials = [
  { id: 1, name: "Tutorial" },
  { id: 2, name: "Tutorial" },
  { id: 3, name: "Tutorial" },
  { id: 4, name: "Tutorial" },
  { id: 5, name: "Tutorial" },
  { id: 6, name: "Tutorial" },
  { id: 7, name: "Tutorial" },
  { id: 8, name: "Tutorial" },
  { id: 9, name: "Tutorial" },
  { id: 10, name: "Tutorial" },
  { id: 11, name: "Tutorial" },
  { id: 12, name: "Tutorial" },
  { id: 13, name: "Tutorial" },
  { id: 14, name: "Tutorial" },
  { id: 15, name: "Tutorial" },
  { id: 16, name: "Tutorial" },
  { id: 17, name: "Tutorial" },
];

const TutorialView = () => {
  const [items, setItems] = useState<TutorialType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = tutorials;

      setItems(result);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="tutorial-grid">
      {items.map((item) => (
        <Link to={`/tutorial/${item.id}`} className="mt-0 text-decoration-none text-reset" key={item.id}>
          <CustomCard className="col">
            <Card.Img variant="top" src="/img/thumbnail.jpg" className="img" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <p>Uratował życia milionów w kilka sekund. Dowiedz się jak...</p><br />
              <p>{"*****".substring(0, item.id % 5 + 1)}</p>
            </Card.Body>
          </CustomCard>
        </Link>
      ))}
    </div>
  );
};

export default TutorialView;
