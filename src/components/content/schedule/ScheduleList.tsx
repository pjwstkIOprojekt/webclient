import { useState } from "react";
import Table, { TableColumnParams } from "../../fragments/util/Table";
import FormCheck from "../../fragments/forms/FormCheck";
import { Container } from "react-bootstrap";
import NavButton from "../../fragments/navigation/NavButton";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import plLocale from '@fullcalendar/core/locales/pl';

const ScheduleList = () => {
  const [events,setEvents] = useState([
    {
        id: '0',
        title: 'Paramedic 1',
        start: new Date('2022-11-22T08:00:00.000'),
        end: new Date('2022-11-22T16:00:00.000'),

    },
    {
      id: '1',
      title: 'Paramedic 2',
      start: new Date('2022-11-22T16:00:00.000'),
      end: new Date('2022-11-22T24:00:00.000'),
  },
  {
    id: '2',
    title: 'Paramedic 3',
    start: new Date('2022-11-22T24:00:00.000'),
    end: new Date('2022-11-23T08:00:00.000'),

},
{
  id: '3',
  title: 'Paramedic 4',
  start: new Date('2022-11-23T08:00:00.000'),
  end: new Date('2022-11-23T16:00:00.000'),

},
{
  id: '4',
  title: 'Paramedic 5',
  start: new Date('2022-11-22T24:00:00.000'),
  end: new Date('2022-11-23T08:00:00.000'),

}
  ]);

  return (
    <Container className="mb-2 text-center">
      <FullCalendar
        plugins={[dayGridPlugin,timeGridPlugin, listPlugin]}
        initialView= 'listWeek'
        displayEventTime
        initialEvents={events}
        firstDay={1}
        expandRows={true}
        locale={plLocale}
        headerToolbar={{
          left: "today prev next",
          right: "dayGridMonth dayGridWeek listWeek",
        }}
        selectable={true}
        selectMirror={true}
        
        
      />
      <NavButton className="mb-3 w-25" to="edit">Edytuj</NavButton>
    </Container>
  );
};

export default ScheduleList;
