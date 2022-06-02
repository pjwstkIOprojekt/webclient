import { useState, FormEvent } from "react";
import { createAmbulance } from "../../../apiCalls/ambulanceCalls";
import { Container, Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/FormSelect";
import FormControl from "../../fragments/FormControl";
import Button from "../../fragments/Button";
import FormRadio from "../../fragments/FormRadio";
import Table from "../../fragments/Table";
import FormCheck from "../../fragments/FormCheck"


  const AddParamedics = () => {
    const [paramedics, setParamedics] = useState<any[]>([
      { id: 1, firstName: "Jan",  lastName: "Nowak", add: <input type={"checkbox"}  checked={false} name="paramedic" /> },
      { id: 2, firstName: "Adam",  lastName: "Kowalski", add: <input type={"checkbox"}  checked={false} name="paramedic" /> }
    ]);

    const cols = [
      {
        name: "#", property: "id", sortBy: "id", filterBy: "id" },
      { name: "Imie", property: "firstName", sortBy: "firstName", filterBy: "firstName" },
      { name: "nazwisko", property: "lastName", sortBy: "lastName", filterBy: "lastName" },
      { name: "Dodaj", property: "add" },
     
    ];
  return (
    <Container className="mb-3 justify-content-center text-center">
    <h3>Ratownicy</h3>
    <Table columns={cols} data={paramedics} />

    <Button  text="Dodaj"  type="submit"/>
  </Container>
      
  );
};

export default AddParamedics;
