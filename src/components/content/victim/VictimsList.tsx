import Link from "../../fragments/navigation/Link";
import { Container } from "react-bootstrap";
import Table from "../../fragments/util/Table";

const PatientsList = () => {
  const cols = [
    { name: "#", property: (x: Record<string, any>) => <Link to={`edit/${x.id}`}>{x.id}</Link>, sortBy: "id", filterBy: "id" },
    { name: "Imie", property: "name", sortBy: "name", filterBy: "name" },
    { name: "Nazwisko", property: "surname", sortBy: "surname", filterBy: "surname" },
    { name: "Data ostatniego zdarzenia", property: "date", sortBy: "date", filterBy: "date" },
    { name: "Czy jest niebezpieczny?", property: (x: Record<string, any>) => x.dangerous ? "Tak" : "Nie" },
    { name: "Szczegóły/Uwagi", property: "details", sortBy: "details", filterBy: "details" },
  ];

  const patients = [
    { id: 1, name:  "Jan", surname: "Nowak", date:"2022-05-15", dangerous: false },
    { id: 2, name:  "Jan", surname: "Nowak", date:"2022-05-16", dangerous: true, details: "Poszkodowany ma problemy z pohamowaniem agresji. Należy zachować ostrożność i próbować uspokoić" },
  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Poszkodowani</h3>
      <Table columns={cols} data={patients} />
    </Container>
  );
};

export default PatientsList;
