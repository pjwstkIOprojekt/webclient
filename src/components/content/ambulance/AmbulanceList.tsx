import { Col, Container } from "react-bootstrap";
import { isDirector } from "../../../helpers/authHelper";
import NavButton from "../../fragments/navigation/NavButton";
import Table, { TableColumnParams } from "../../fragments/util/Table";
import { useState } from "react";
import { getAmbulances } from "../../../api/ambulanceCalls";
import ViewLoader from "../../fragments/util/ViewLoader";

interface AmbulancesListProps {
  data: Record<string, any>[]
}

const AmbulancesDisplay = (props: Readonly<AmbulancesListProps>) => {
  const cols: TableColumnParams[] = [
    { name: "#", property: "id", sortBy: "id", filterBy: "id" },
    { name: "Rodzaj karetki", property: "kind", sortBy: "kind", filterBy: "kind" },
    { name: "Lista ratowników", property: "paramedics", sortBy: "paramedics", filterBy: "paramedics" },
    { name: "Numer rejestracyjny", property: "registrationNumber", sortBy: "registrationNumber", filterBy: "registrationNumber" },
    { name: () => <Col className="pl-1 pr-1">Czy jest dostępna?</Col>, property: (x: any) => x.available ? "Tak" : "Nie", sortBy: "available" }
  ];

  if (isDirector()) {
    cols.push({ name: "Edycja", property: (x: any) => <NavButton to={`equipment/${x.id}`}>Sprzęt</NavButton> });
  }

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Karetki</h3>
      <Table columns={cols} data={props.data} />
    </Container>
  );
};

const AmbulanceList = () => {
  const [ambulances] = useState<any[]>([
    { id: 1, kind: "Covid", registrationNumber: "WW 40404", available: true, paramedics: "Jan Nowak  Adam Kowalski" },
    { id: 2, kind: "Transportowa", registrationNumber: "WW 50505", available: false, paramedics: "Jan Nowak  Adam Kowalski" }
  ]);

  const onLoad = (loaded: () => void) => {
    loaded();
    getAmbulances().then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
  };

  return <ViewLoader onLoad={onLoad} element={<AmbulancesDisplay data={ambulances} />} />;
};

export default AmbulanceList;
