import FullCalendar, { EventSourceInput } from "@fullcalendar/react";
import { useTranslation } from "react-i18next";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import plLocale from "@fullcalendar/core/locales/pl";
import enLocale from "@fullcalendar/core/locales/en-gb";

export interface CalendarParams {
  editable?: boolean,
  events?: EventSourceInput,
  onClick?: (x: DateClickArg) => void
}

const Calendar = (props: Readonly<CalendarParams>) => {
  const { i18n } = useTranslation();

  return <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]} initialView="dayGridWeek" displayEventTime headerToolbar={{
    left: "today prev next",
    center: "title",
    right: "dayGridMonth dayGridWeek listWeek",
  }} selectable editable={props.editable} displayEventEnd initialEvents={props.events} firstDay={1} expandRows locale={i18n.language === "pl" ? plLocale : enLocale} dateClick={props.onClick} />;
};

export default Calendar;
