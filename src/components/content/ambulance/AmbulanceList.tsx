import { useState, useEffect } from "react";
import { AmbulanceResponse, getAmbulances, deleteAmbulance } from "../../../api/ambulanceCalls";
import Link from "../../fragments/navigation/Link";
import NavButton from "../../fragments/navigation/NavButton";
import Button from "../../fragments/util/Button";
import { Container, Row, Col } from "react-bootstrap";
import Table from "../../fragments/util/Table";

const AmbulanceList = () => {
  const [ambulances, setAmbulances] = useState<AmbulanceResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAmbulances().then(res => res.json()).then((data: AmbulanceResponse[]) => {
      if (data) {
        setAmbulances(data);
      }

      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, []);

  const remove = (plate: string) => {
    if (!window.confirm("Czy na pewno chcesz usunąć tą karetkę?")) {
      return;
    }

    setAmbulances(ambulances.filter(a => a.licensePlate !== plate));
    deleteAmbulance(plate);
  };

  const cols = [
    { name: "Numer rejestracyjny", property: (x: Readonly<AmbulanceResponse>) => <Link to={`edit/${x.licensePlate}`}>{x.licensePlate}</Link>, sortBy: "licensePlate", filterBy: "licensePlate" },
    { name: "Rodzaj karetki", property: "ambulanceClass", sortBy: "ambulanceClass", filterBy: "ambulanceClass" },
    { name: "Typ karetki", property: "ambulanceType", sortBy: "ambulanceType", filterBy: "ambulanceType" },
    { name: "Stan karetki", property: "peopleCapacity", sortBy: "peopleCapacity", filterBy: "peopleCapacity" },
    { name: "Zobacz", property: (x: Readonly<AmbulanceResponse>) => <NavButton to={`hist/${x.licensePlate}`}>Historia</NavButton> },
    { name: "Usuń", property: (x: Readonly<AmbulanceResponse>) => <Button onClick={e => remove(x.licensePlate)}>X</Button> }
  ];

  return (
    <Container className="mt-3 justify-content-center text-center">
      <h3>Karetki</h3>
      <Row className="my-2 justify-content-end">
        <Col />
        <Col md="auto">
          <NavButton to="new">+</NavButton>
        </Col>
      </Row>
      <Table columns={cols} data={ambulances} isLoading={isLoading} />
    </Container>
  );
};

export default AmbulanceList;
