import { useState } from "react";
import Table, { TableColumnParams } from "../../fragments/util/Table";
import FormCheck from "../../fragments/forms/FormCheck";
import { Container, Modal } from "react-bootstrap";
import NavButton from "../../fragments/navigation/NavButton";
import FullCalendar, { DateSelectArg, EventClickArg, EventContentArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import plLocale from '@fullcalendar/core/locales/pl';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import Link from "../../fragments/navigation/Link";
import NavLink from "../../fragments/navigation/NavLink";
import ItemLink from "../../fragments/navigation/ItemLink";
import { useNavigate } from "react-router-dom";



const ScheduleList = () => {
  const navigate = useNavigate();
  const [events,setEvents] = useState([
    {
        id: '0',
        title: 'Paramedic 1',
        start: new Date('2022-11-22T08:00:00.000'),
        end: new Date('2022-11-22T16:00:00.000'),
        url:'/paramedicInfo'
    },
    {
      id: '1',
      title: 'Paramedic 2',
      start: new Date('2022-11-22T16:00:00.000'),
      end: new Date('2022-11-22T24:00:00.000'),
      url:'/paramedicInfo'
  },
  {
    id: '2',
    title: 'Paramedic 3',
    start: new Date('2022-11-22T24:00:00.000'),
    end: new Date('2022-11-23T08:00:00.000'),
    url:'/paramedicInfo'

},
{
  id: '3',
  title: 'Paramedic 4',
  start: new Date('2022-11-23T08:00:00.000'),
  end: new Date('2022-11-23T16:00:00.000'),
  url:'/paramedicInfo'

},
{
  id: '4',
  title: 'Paramedic 5',
  start: new Date('2022-11-22T24:00:00.000'),
  end: new Date('2022-11-23T08:00:00.000'),
  url:'/paramedicInfo'

}

  ]);
const handleDateSelect=()=>{
  navigate( "./add")
}
  return (
    <Container className="mb-2 text-center">
      <h1>Grafik pracowników</h1>
      <FullCalendar
        plugins={[dayGridPlugin,timeGridPlugin, listPlugin, interactionPlugin]}
        initialView= 'dayGridMonth'
        displayEventTime
        dateClick={handleDateSelect }
        selectable={true}
        editable={true}
        initialEvents={events}
        firstDay={1}
        expandRows={true}
        locale={plLocale}
        headerToolbar={{
          left: "today prev next",
          center: "title",
          right: "dayGridMonth dayGridWeek listWeek",
        }}

        

        
        
      />
      <NavButton className="mb-3 w-25" to="./add">Edytuj</NavButton>
    </Container>
  );
};

export default ScheduleList;


