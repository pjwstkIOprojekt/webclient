import { useState, FormEvent } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/forms/FormSelect";
import FormControl from "../../fragments/forms/FormControl";
import Button from "../../fragments/util/Button";
import FormRadio from "../../fragments/forms/FormRadio";
import Table from "../../fragments/util/Table";
import FormCheck from "../../fragments/forms/FormCheck"
import { useTranslation } from "react-i18next";

const AddParamedics = () => {
  const [checked, setChecked] = useState(false);
  const FirstName = useState("Jan");
  const LastName = useState("Nowak");
  const [added, setAdded] = useState(false);
  const { t } = useTranslation("jezyk");

    const [paramedics] = useState<any[]>([
      { id: 1, firstName: FirstName,  lastName: LastName, add: <input type={"checkbox"} onClick={()=>setAdded(onclick?true:false)} defaultChecked={added}  name="paramedic" /> },
    ]);


    const cols = [
      {
        name: "#", property: "id", sortBy: "id", filterBy: "id" },
      { name: t('Person.FirstName'), property: "firstName", sortBy: "firstName", filterBy: "firstName" },
      { name: t('Person.LastName'), property: "lastName", sortBy: "lastName", filterBy: "lastName" },
      { name: t('Add'), property: "add" },
     
    ];


    const [kind, setKind] = useState("COVID");
    const [listParamedics, setlistParamedics] = useState("Szymon Kowal  Adam Kowalski")
    const [maxAmount, setMaxAmount] = useState(7);
    const [registrationNumber, setRegistrationNumber] = useState("WW 04040"); 
    
  return (
    <Container className=" w-50 ">
    <h2 className="text-center">{t('Person.ListParamedics')}</h2>
    <h4 className=" mt-5 text-left">{t('Ambulance.Ambulance')}</h4>
    <Form className="mt-5 w-50 ">
    <Row>
        <Col>
          <FormControl
            id="RegistrationNumber"
            className="mb-3"
            value={registrationNumber}
            label={t('Ambulance.RegistrationNumber')}
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
            label={t('Ambulance.Kind')}
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
            label={t('Ambulance.MaxAmount')}
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
            label={t('Person.ListParamedics')}
            type="text"
            disabled={true}
          />
        </Col>
      </Row>

    </Form>




    <h4 className=" mt-5 text-left">{t('Ambulance.AddParamedics')}</h4>
    <Table className="text-center" columns={cols} data={paramedics} />

      <Button className="mt-3 w-100" type="submit">{t('Add')}</Button>
  </Container>
);

}

export default AddParamedics;
