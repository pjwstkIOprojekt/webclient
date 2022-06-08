import { useState, FormEvent } from "react";
import { createAmbulance } from "../../../apiCalls/ambulanceCalls";
import { Col, Container, Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/FormSelect";
import FormControl from "../../fragments/FormControl";
import Button from "../../fragments/Button";
import FormRadio from "../../fragments/FormRadio";
import Table from "../../fragments/Table";
import FormCheck from "../../fragments/FormCheck"
import { useNavigate } from "react-router-dom";
import React from "react";



const AddParamedics = () => {
  const [checked, setChecked] = useState(false);
  const FirstName = useState("Jan");
  const LastName = useState("Nowak");
  const [added, setAdded] = useState(false);

    const [paramedics, setParamedics] = useState<any[]>([
      { id: 1, firstName: FirstName,  lastName: LastName, add: <input type={"checkbox"} onClick={()=>setAdded(onclick?true:false)} defaultChecked={added}  name="paramedic" /> },
    ]);


    const cols = [
      {
        name: "#", property: "id", sortBy: "id", filterBy: "id" },
      { name: "Imie", property: "firstName", sortBy: "firstName", filterBy: "firstName" },
      { name: "Nazwisko", property: "lastName", sortBy: "lastName", filterBy: "lastName" },
      { name: "Dodaj", property: "add" },
     
    ];
  return (
    <Container className=" w-50 ">
    <h2 className="text-center">Ratownicy</h2>
    <h4 className=" mt-5 text-left">Dodaj ratowników do karetki</h4>
    <Table className="text-center" columns={cols} data={paramedics} />

    <Button className="mt-3 w-100" text="Dodaj"  type="submit"/>
  </Container>
);

}










/*

  <Container className="mb-3 justify-content-center ">
  <h3 className="text-center">Ratownicy</h3>
  <h4 className="text-left">Dodaj ratowników do karetki</h4>
  <Table columns={cols} data={paramedics} />

  <Button  text="Dodaj"  type="submit"/>
</Container>
    
);
};
*/
export default AddParamedics;
