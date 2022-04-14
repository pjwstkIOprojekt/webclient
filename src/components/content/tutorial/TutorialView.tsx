import { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
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
    <Container className="d-flex flex-wrap">
      {items.map((item) => (
        <CustomCard style={{ width: "18rem" }} className="mt-3 mx-3" key={item.id}>
          <Link to={`/tutorial/${item.id}`} className="mt-0">
            <Card.Img variant="top" src="img/thumbnail.jpg" width="270" />
          </Link>
          <Card.Body>
            <Card.Title>
              {item.name}
            </Card.Title>
          </Card.Body>
        </CustomCard>
      ))}
    </Container>
  );
};

export default TutorialView;
