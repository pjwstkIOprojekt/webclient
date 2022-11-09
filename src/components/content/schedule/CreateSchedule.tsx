import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import FormSelect from "../../fragments/forms/FormSelect";
import FormCheck from "../../fragments/forms/FormCheck";
import FormControl from "../../fragments/forms/FormControl";
import FormTextArea from "../../fragments/forms/FormTextArea";
import Button from "../../fragments/util/Button";
import L from "leaflet";
import MapView from "../../fragments/map/MapView";
import { useTranslation } from "react-i18next";

const CreateSchedule = () => {
const [paramedic, setParamedic] = useState(0);
const [from, setFrom]= useState();
const [to, setTo] = useState();
const [date, setDate] = useState();
const { t } = useTranslation();

const paramedics = [
    "Jan Nowak",
    "Adam Kowalski"
  ];

  return (
    <Form  className="w-50">
      <h1 className="text-center mt-3">Grafik pracy</h1>
      <Row className="justify-content-center mb-3">
        <FormSelect id="paramedic" onChange={e => setParamedic(parseInt(e.target.value))} value={paramedic} label={'Ratownik'} options={paramedics} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormCheck id="from" onChange={e => setFrom(from)} value={from} label={'Od'} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormCheck id="to" onChange={e => setTo(to)} value={to} label={'Do'} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormCheck id="to" onChange={e => setDate(date)} value={date} label={'Data'} />
      </Row>

      <Row className="justify-content-center mb-5">
        <Button className="mt-3 w-50" type="submit">{t('Add')}</Button>
      </Row>
    </Form>
  );
};


export default CreateSchedule;
