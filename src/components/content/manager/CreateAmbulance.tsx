import { useState, FormEvent } from "react";
import { Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/forms/FormSelect";
import FormControl from "../../fragments/forms/FormControl";
import Button from "../../fragments/util/Button";
import { useTranslation } from "react-i18next";


const ambulanceTypes = [
  "A",
  "B",
  "C"
];

const ambulanceKinds = [
  "S",
  "P",
  "N",
  "T",
  "COVID"
];

const CreateAmbulance = () => {
  const [type, setType] = useState(0);
  const [kind, setKind] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [maxAmount, setMaxAmount] = useState(1);
  const [registrationNumber, setRegistrationNumber] = useState("");
  const { t } = useTranslation("jezyk");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    /*createAmbulance({
      numberOfSeats: maxAmount,
      fuelTankCapacity: capacity,
      licensePlates: registrationNumber,
      type: type,
      kind: kind
    }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));*/
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1 className="text-center mt-3">{t('Ambulance.New')}</h1>
      <Row className="justify-content-center mb-3">
        <FormSelect id="type" onChange={e => setType(parseInt(e.target.value))} value={type} label={t('Ambulance.Type')} options={ambulanceTypes} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormSelect id="kind" onChange={e => setKind(parseInt(e.target.value))} value={kind} label={t('Ambulance.Kind')} options={ambulanceKinds} />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormControl id="maxAmount" onChange={e => setMaxAmount(parseInt(e.target.value))} value={maxAmount} label={t('Ambulance.MaxAmount')} type="number" />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormControl id="registrationNumber" onChange={e => setRegistrationNumber(e.target.value)} value={registrationNumber} label={t('Ambulance.RegistrationNumber')} />
      </Row>
      <Row className="justify-content-center mb-5">
        <Button className="mt-3 w-50" type="submit">{t('Add')}</Button>
      </Row>
    </Form>
  );
};

export default CreateAmbulance;
