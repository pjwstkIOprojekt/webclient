import { useState, FormEvent } from "react";
import { Form, Row, Col} from "react-bootstrap";
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

const EditAmbulance = () => {
  const { t } = useTranslation();
  const [type, setType] = useState(ambulanceTypes[1]);
  const [kind, setKind] = useState(ambulanceKinds[4]);
  const [capacity, setCapacity] = useState(70);
  const [maxAmount, setMaxAmount] = useState(7);
  const [registrationNumber, setRegistrationNumber] = useState("WW 04040");


  return (
    <Form className="mt-5 w-50 ">
      <h3 >{t('Ambulance.Edit')}</h3>
      <Row>
        <Col>
            <FormSelect className="mb-3 " id="type" onChange={e => setType(e.target.value)} value={type} label={t('Ambulance.Type')} options={ambulanceTypes} />
        </Col>
      </Row>
      <Row>
        <Col>
        <FormSelect className="mb-3 " id="kind" onChange={e => setKind(e.target.value)} value={kind} label={t('Ambulance.Kind')} options={ambulanceKinds} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="MaxAmount"
            className="mb-3"
            value={maxAmount}
            label={t('Ambulance.MaxAmount')}
            type="text"
            disabled={false}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="RegistrationNumber"
            className="mb-3"
            value={registrationNumber}
            label={t('Ambulance.RegistrationNumber')}
            type="text"
            disabled={false}
          />
        </Col>
      </Row>
        <Button className="mt-3 w-50" type="submit">{t('Save')}</Button>
    </Form>
  );
};

export default EditAmbulance;
