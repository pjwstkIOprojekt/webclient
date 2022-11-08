import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from '../../fragments/util/Button';
import Table from "../../fragments/util/Table";
import { useTranslation } from "react-i18next";

const ListAmbulance = () => {
  const { t } = useTranslation();
  const [ambulances, setAmbulances] = useState<any[]>([
    {
      id: 1, kind: "Covid", paramedics: "Jan Nowak  Adam Kowalski", registrationNumber: "WW 40404", mileage: "1000000", add: <Button onClick={e => navigate("/listAmbulances/addParamedics/1")}>Przypisz</Button>, edit: <Button onClick={e => navigate("/editAmbulance/1")}>Edytuj</Button>,  delete: <Button>Usuń</Button>},
    {
      id: 2, kind: "Transportowa", paramedics: "Szymon Kowal  Adam Kowalski", registrationNumber: "WW 50505", mileage: "500000", add: <Button onClick={e => navigate("/listAmbulances/addParamedics/2")}>Przypisz</Button>, edit: <Button onClick={e => navigate("/editAmbulance/1")}>Edytuj</Button>,  delete: <Button>Usuń</Button>}
  ]);

  
  const navigate = useNavigate();
  const [sort, setSort] = useState("");


  

  const cols = [
    {
      name: "#", property: "id", sortBy: "id", filterBy: "id" },
    { name: t('Ambulance.Kind'), property: "kind", sortBy: "kind", filterBy: "kind" },
    { name: t('Person.ListParamedics'), property: "paramedics", filterBy: "paramedics" },
    { name: t('Ambulance.RegistrationNumber'), property: "registrationNumber", sortBy: "registrationNumber", filterBy: "registrationNumber" },
    { name: t('Ambulance.Mileage'), property: "mileage", sortBy: "mileage", filterBy: "mileage" },
    { name: t('Ambulance.AddParamedics'), property: "add" },
    { name: t('Ambulance.Edit'), property: "edit" },
    { name: t('Ambulance.Delete'), property: "delete" },
  
  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>{t('Ambulance.Ambulances')}</h3>
      <Table columns={cols} data={ambulances} />
      <Button onClick={e => navigate("/createAmbulance/1")}>{t('Add')}</Button>
    </Container>
  )
}

export default ListAmbulance;