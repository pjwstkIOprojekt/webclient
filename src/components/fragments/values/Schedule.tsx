import { usePopup } from "../../../hooks/usePopup";
import { useTranslation } from "react-i18next";
import { Schedule as ScheduleData, scheduleKeyFromNum } from "../../../api/adminCalls";
import Button from "../util/Button";
import SchedulePopup from "../popups/SchedulePopup";
import Table from "../util/Table";

export interface ScheduleParams {
  value: ScheduleData,
  onChange: (day: number, start: string, end: string) => void
}

const Schedule = (props: Readonly<ScheduleParams>) => {
  const popup = usePopup();
  const { t } = useTranslation();

  const cols = [1, 2, 3, 4, 5].map(x => ({
    name: t(`Schedule.Day${x}`),
    property: (sch: Readonly<ScheduleData>) => {
      const event = sch[scheduleKeyFromNum[x]];

      if (!event.start || !event.end) {
        return <Button type="button" onClick={e => popup(<SchedulePopup onSave={(st, en) => props.onChange(x, st, en)} />)}>+</Button>;
      }

      return (
        <>
          <div className="my-1">{event.start} - {event.end}</div>
          <Button type="button" onClick={e => popup(<SchedulePopup onSave={(st, en) => props.onChange(x, st, en)} />)}>{t("Common.Edit")}</Button>
          <Button type="button" className="mx-1" onClick={e => props.onChange(x, "", "")}>X</Button>
        </>
      );
    }
  }));

  return <Table columns={cols} data={[props.value]} />;
};

export default Schedule;
