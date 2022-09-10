import { AmbulanceAvailability, AvailabilityType, Ambulance } from "../../../helpers/apiTypes";
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
  const checkAvailability = (x?: AmbulanceAvailability[]) => {
    if (!x) {
      return false;
    }

    const now = new Date(Date.now());
    return x.filter(a => a.dateStart && a.dateEnd ? (a.dateStart <= now && now <= a.dateEnd) : a.dateStart).map(a => a.availabilityType).includes(AvailabilityType.AVAILABLE);
  };

  const cols: TableColumnParams[] = [
    { name: "#", property: "ambulanceId", sortBy: "ambulanceId", filterBy: "ambulanceId" },
    { name: "Rodzaj karetki", property: "ambulanceKind", sortBy: "ambulanceKind", filterBy: "ambulanceKind" },
    { name: "Typ karetki", property: "ambulanceType", sortBy: "ambulanceType", filterBy: "ambulanceType" },
    { name: "Liczba miejsc", property: "peopleCapacity", sortBy: "peopleCapacity", filterBy: "peopleCapacity" },
    { name: "Numer rejestracyjny", property: "plates", sortBy: "plates", filterBy: "plates" },
    { name: () => <Col className="pl-1 pr-1">Czy jest dostępna?</Col>, property: (x: Ambulance) => checkAvailability(x.ambulanceAvailabilities) ? "Tak" : "Nie", sortBy: "available" }
  ];

  if (isDirector()) {
    cols.push({ name: "Edycja", property: (x: Ambulance) => <NavButton to={`equipment/${x.ambulanceId}`}>Sprzęt</NavButton> });
  }

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Karetki</h3>
      <Table columns={cols} data={props.data} />
    </Container>
  );
};

const AmbulanceList = () => {
  const [ambulances, setAmbulances] = useState([]);

  const onLoad = (loaded: () => void) => {
    getAmbulances().then(res => res.json()).then(data => {
      // TODO Remove logging
      console.log(data);
      setAmbulances(data);
      loaded();
    }).catch(err => console.log(err));
  };

  return <ViewLoader onLoad={onLoad} element={<AmbulancesDisplay data={ambulances} />} />;
};

export default AmbulanceList;
