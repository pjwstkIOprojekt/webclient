import { useState } from "react";
import { Container } from "react-bootstrap";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import plLocale from '@fullcalendar/core/locales/pl';
import interactionPlugin from "@fullcalendar/interaction";
import { useNavigate } from "react-router-dom";



const ScheduleList = () => {
  const navigate = useNavigate();
  const [events] = useState([
    {
        id: '0',
        title: 'Jan Nowak',
        start: new Date('2022-12-08T08:00:00.000'),
        end: new Date('2022-12-08T16:00:00.000'),
        url:'/paramedic/1'
    },
    {
      id: '1',
      title: 'Jan Nowak',
      start: new Date('2022-12-09T16:00:00.000'),
      end: new Date('2022-12-09T24:00:00.000'),
      url:'/paramedic/1'
  },
  {
    id: '2',
    title: 'Paramedic 3',
    start: new Date('2022-11-22T24:00:00.000'),
    end: new Date('2022-11-23T08:00:00.000'),
    url:'/paramedic/1'

},
{
  id: '3',
  title: 'Paramedic 4',
  start: new Date('2022-11-23T08:00:00.000'),
  end: new Date('2022-11-23T16:00:00.000'),
  url:'/paramedic/1'

},
{
  id: '4',
  title: 'Paramedic 5',
  start: new Date('2022-11-22T24:00:00.000'),
  end: new Date('2022-11-23T08:00:00.000'),
  url:'/paramedic/1'

}

  ]);
const handleDateSelect=()=>{
  navigate( "./add")
}
  return (
    <Container className="mb-2 text-center">
      <h1>Grafik</h1>
      <FullCalendar
        plugins={[dayGridPlugin,timeGridPlugin, listPlugin, interactionPlugin]}
        initialView= 'dayGridWeek'
        displayEventTime
        dateClick={handleDateSelect }
        selectable={true}
        editable={true}
        displayEventEnd={true}
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
      
    </Container>
  );
};

export default ScheduleList;


