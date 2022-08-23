import { Col, Container } from "react-bootstrap";
import Button from '../../fragments/util/Button';
import { useNavigate } from "react-router-dom";
import Table from "../../fragments/util/Table";
import FormSelect from "../../fragments/forms/FormSelect";
import { useState } from "react";
import { getAmbulances } from "../../../api/ambulanceCalls";
import ViewLoader from "../../fragments/util/ViewLoader";
import FormCheck from "../../fragments/forms/FormCheck";

interface UsersListProps {
  data: Record<string, any>[]
}

const UsersDisplay = (props: Readonly<UsersListProps>) => {
  const cols = [
    { name: "#", property: "id", sortBy: "id", filterBy: "id" },
    { name: "Imię", property: "firstName", sortBy: "firstName", filterBy: "firstName" },
    { name: "Nazwisko", property: "lastName", sortBy: "lastName", filterBy: "lastName" },
    { name: "Rola", property: "role"},
    { name: "Zablokować?", property:"block" }
  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Użytkownicy</h3>
      <Table columns={cols} data={props.data} />
    </Container>
  );
};

const UserList = () => {
    const navigate = useNavigate();
    const [users] = useState<any[]>([
    { id: 1, firstName: "Jan", lastName: "Nowak", role: <FormSelect id="type"  options={["Uzytkownik","Dyspozytor", "Menadżer", "Ratownik"]} />, block: <FormCheck  value={false}  /> },
    { id: 2, firstName: "Adam", lastName:"Kowalski", role: <FormSelect id="type"  options={["Uzytkownik","Dyspozytor", "Menadżer", "Ratownik"]} /> , block: <FormCheck value={false}  />}
    
  ]);

  const onLoad = (loaded: () => void) => {
    loaded();
  };

  return (
    <Container>
  <ViewLoader onLoad={onLoad} element={<UsersDisplay data={users} />} />
  <Button className=" mt-3 w-25" onClick={e => navigate("./add")}>Stwórz użytkownika</Button>
  </Container>
  );
};

export default UserList;