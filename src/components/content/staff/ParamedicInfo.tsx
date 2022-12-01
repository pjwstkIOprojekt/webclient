import { useNavigate } from "react-router-dom";
import Button from '../../fragments/util/Button';
import {  Form, Row, Col, Container } from "react-bootstrap";
import FormControl from "../../fragments/forms/FormControl";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import plLocale from '@fullcalendar/core/locales/pl';

const ParamedicInfo = () => {
  const [firstName] = useState("Jan");
  const [lastName] = useState("Nowak");
  const [birthdate] = useState("2000-05-20");
  const [phoneNumber] = useState("111222333");
  const [email] = useState("jan.nowak@test.pl");
  const [ambulance] = useState("karetka 1");
  const navigate = useNavigate();
  const [events] = useState([
    {
        id: '0',
        title: 'Jan Nowak',
        start: new Date('2022-12-01T08:00:00.000'),
        end: new Date('2022-12-01T16:00:00.000'),
        url:'/paramedicInfo'
    },
    {
      id: '1',
      title: 'Jan Nowak',
      start: new Date('2022-12-02T16:00:00.000'),
      end: new Date('2022-12-02T24:00:00.000'),
      url:'/paramedicInfo'
  }
])
  return (
    <Container>
    <h3 className="text-center mt-3">Dane ratownika</h3>
    <Form className="mt-3 w-50 me-1">
      <Row >
        <Col>
          <FormControl
            id="firstName"
            className="mb-3 "
            value={firstName}
            label="Imię"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="lastName"
            className="mb-3 "
            value={lastName}
            label="Nazwisko"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="Date"
            className="mb-3 "
            value={birthdate}
            label="Data urodzenia"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="Date"
            className="mb-3 "
            value={phoneNumber}
            label="Numer telefonu"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="Date"
            className="mb-3 "
            value={email}
            label="Email"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            id="Date"
            className="mb-3 "
            value={ambulance}
            label="Karetka"
            type="text"
            disabled={true}
          />
        </Col>
      </Row>
      
      </Form>
        
        <FullCalendar
        plugins={[dayGridPlugin,timeGridPlugin,listPlugin]}
        initialView= 'listWeek'
        displayEventTime
        initialEvents={events}
        firstDay={1}
        expandRows={true}
        locale={plLocale}
        headerToolbar={{
          left: "today prev next",
          center: "title",
          right: "dayGridWeek listWeek",
        }}

        

        
        
      />
        
        
    
        <Form>
        <Row className="justify-content-center mb-5">
        
        <Button className=" w-50" onClick={e => navigate("/schedule")}>Wróć</Button>
      </Row>
      </Form>
    </Container>
  );
};

export default ParamedicInfo;
