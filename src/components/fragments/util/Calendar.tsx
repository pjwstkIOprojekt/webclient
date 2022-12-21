import FullCalendar, { EventSourceInput } from "@fullcalendar/react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { useTranslation } from "react-i18next";
import { customTheme } from "../sharedParams";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import plLocale from "@fullcalendar/core/locales/pl";
import enLocale from "@fullcalendar/core/locales/en-gb";

export interface CalendarParams {
  editable?: boolean,
  events?: EventSourceInput,
  onClick?: (x: DateClickArg) => void
}

const Calendar = (props: Readonly<CalendarParams>) => {
  const darkMode = useDarkMode();
  const { i18n } = useTranslation();

  return (
    <span className={`calendar-${customTheme(darkMode)}`}>
      <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} initialView="dayGridWeek" displayEventTime displayEventEnd headerToolbar={{
        left: "today prev next",
        center: "title",
        right: "dayGridMonth dayGridWeek",
      }} selectable editable={props.editable} initialEvents={props.events} firstDay={1} expandRows locale={i18n.language === "pl" ? plLocale : enLocale} dateClick={props.onClick} />
  </span>
  );
};

export default Calendar;
