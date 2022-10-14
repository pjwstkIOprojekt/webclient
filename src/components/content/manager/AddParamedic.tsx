import { useState, FormEvent } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/forms/FormSelect";
import FormControl from "../../fragments/forms/FormControl";
import Button from "../../fragments/util/Button";
import FormRadio from "../../fragments/forms/FormRadio";
import Table from "../../fragments/util/Table";
import FormCheck from "../../fragments/forms/FormCheck"

const AddParamedics = () => {
  const [checked, setChecked] = useState(false);
  const FirstName = useState("Jan");
  const LastName = useState("Nowak");
  const [added, setAdded] = useState(false);

    const [paramedics] = useState<any[]>([
      { id: 1, firstName: FirstName,  lastName: LastName, add: <input type={"checkbox"} onClick={()=>setAdded(onclick?true:false)} defaultChecked={added}  name="paramedic" /> },
    ]);


    const cols = [
      {
        name: "#", property: "id", sortBy: "id", filterBy: "id" },
      { name: "Imie", property: "firstName", sortBy: "firstName", filterBy: "firstName" },
      { name: "Nazwisko", property: "lastName", sortBy: "lastName", filterBy: "lastName" },
      { name: "Dodaj", property: "add" },
     
    ];


    const [kind, setKind] = useState("COVID");
    const [listParamedics, setlistParamedics] = useState("Szymon Kowal  Adam Kowalski")
    const [maxAmount, setMaxAmount] = useState(7);
    const [registrationNumber, setRegistrationNumber] = useState("WW 04040"); 
    
  return (
    <Container className=" w-50 ">
    <h2 className="text-center">Ratownicy</h2>
    <h4 className=" mt-5 text-left">Karetka</h4>
    <Form className="mt-5 w-50 ">
    <Row>
        <Col>
          <FormControl
            id="RegistrationNumber"
            className="mb-3"
            value={registrationNumber}
            label="Numer rejestracyjny:"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="kind"
            className="mb-3 "
            value={kind}
            label="Rodzaj:"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="maxAmount"
            className="mb-3"
            value={maxAmount}
            label="Maksymalna ilośc ratowników:"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="listParamedics"
            className="mb-3"
            value={listParamedics}
            label="Ratownicy:"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>

    </Form>




    <h4 className=" mt-5 text-left">Dodaj ratowników do karetki</h4>
    <Table className="text-center" columns={cols} data={paramedics} />

      <Button className="mt-3 w-100" type="submit">Dodaj</Button>
  </Container>
);

}

export default AddParamedics;
