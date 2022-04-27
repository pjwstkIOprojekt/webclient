import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Report {
  id: number,
  rating: number
}

const reports = [
  { id: 1, rating: 2 },
  { id: 2, rating: 7 },
  { id: 3, rating: 5 },
  { id: 4, rating: 3 },
  { id: 5, rating: 4 },
  { id: 6, rating: 9 },
  { id: 7, rating: 8 },
  { id: 8, rating: 6 }
];

const getColor = (num: number) => {
  switch (num) {
    case 1:
    case 2:
    case 3:
      return "secondary";
    case 4:
    case 5:
    case 6:
      return "primary";
    case 7:
    case 8:
    case 9:
    default:
      return "danger";
  }
};

const ReportsList = () => {
  const [items, setItems] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = reports;

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
      {items.map(item => (
        <Link to={`/report/${item.id}`} className="mt-0 text-decoration-none text-reset" key={item.id}>
          <Card className="col" bg={getColor(item.rating)}>
            <Card.Body>
              <Card.Title>Zgłoszenie</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ReportsList;
