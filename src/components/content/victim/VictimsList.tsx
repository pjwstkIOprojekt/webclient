import Link from "../../fragments/navigation/Link";
import { Container } from "react-bootstrap";
import Table from "../../fragments/util/Table";
import { useTranslation } from "react-i18next";

const PatientsList = () => {
  const { t } = useTranslation();
  const cols = [
    { name: "#", property: (x: Record<string, any>) => <Link to={`edit/${x.id}`}>{x.id}</Link>, sortBy: "id", filterBy: "id" },
    { name: t('Person.FirstName'), property: "name", sortBy: "name", filterBy: "name" },
    { name: t('Person.LastName'), property: "surname", sortBy: "surname", filterBy: "surname" },
    { name: t('Reports.DateLast'), property: "date", sortBy: "date", filterBy: "date" },
    { name: t('Person.Dangerous'), property: (x: Record<string, any>) => x.dangerous ? "Tak" : "Nie" },
    { name: t('Details'), property: "details", sortBy: "details", filterBy: "details" },
  ];

  const patients = [
    { id: 1, name:  "Jan", surname: "Nowak", date:"2022-05-15", dangerous: false },
    { id: 2, name:  "Jan", surname: "Nowak", date:"2022-05-16", dangerous: true, details: "Poszkodowany ma problemy z pohamowaniem agresji. Należy zachować ostrożność i próbować uspokoić" },
  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>{t('Person.Victims')}</h3>
      <Table columns={cols} data={patients} />
    </Container>
  );
};

export default PatientsList;
