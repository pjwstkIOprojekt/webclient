import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDarkModeManager } from "../../../hooks/useDarkMode";

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
  const darkMode = useDarkModeManager();
  const [items, setItems] = useState<any[]>([]);
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

  return (
    <Container className="d-flex flex-wrap">
      {items.map((item) => (
        <Card
          style={{ width: "18rem" }}
          className="mt-3 mx-3"
          bg={`custom-${darkMode.isDark ? "dark" : "light-text"}`}
          key={item.id} 
        >
          <Link to={`/tutorial/${item.id}`} className="mt-0">
            <Card.Img variant="top" src="images/thumbnail.jpg" width="270" />
          </Link>
          <Card.Body>
            <Card.Title className={darkMode.isDark ? "text-light" : ""}>
              {item.name}
            </Card.Title>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default TutorialView;
