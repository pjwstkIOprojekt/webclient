import { useState } from "react";
import { useTranslation } from "react-i18next";
import { usePopup } from "../../../hooks/usePopup";
import Form from "../forms/Form";
import { Row } from "react-bootstrap";
import Date from "../forms/api/Date";
import Time from "../forms/api/Time";
import Button from "../util/Button";
import { useNavigate } from "react-router-dom";

export interface ScheduleParams {
  onSave: (start: string, end: string) => void,
  date?: string,
  info?: string,
}

const SchedulePopup = (props: Readonly<ScheduleParams>) => {
  const [start, setStart] = useState("08:00");
  const [end, setEnd] = useState("16:00");
  const [error, setError] = useState("");
  const [url, setUrl] = useState(props.info);
  const { t } = useTranslation();
  const popup = usePopup();
  const navigate = useNavigate();
  console.log(start);
  console.log(end);
  console.log(url);
  const onSubmit = () => {
    if (start >= end) {
      setError("Error.ScheduleEnd");
      return;
    }

    setError("");
    props.onSave(start, end);
    popup(null);
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1 className="my-3  text-center">{t("Common.Details")}</h1>
      <h4 className="my-3 text-center">{t("Schedule.SetEvent")}</h4>
      {props.date ? (
        <Row className="mb-3 justify-content-center">
          <Date id="popup-date" className="w-50" label={t("Schedule.Date")} value={props.date} disabled />
        </Row>
      ) : ""}
      <Row className="mb-3 justify-content-center">
        <Time id="popup-start" className="w-50" label={t("Common.Since")} required value={start} onChange={e => setStart(e.target.value)} />
      </Row>
      <Row className="mb-5 justify-content-center">
        <Time id="popup-end" className="w-50" label={t("Common.Until")} required value={end} onChange={e => setEnd(e.target.value)} error={t(error)} />
      </Row>
      <Row className="mb-2  justify-content-center">
      <h4 className="my-3 text-center">{t("Medic.Details")}</h4>
      <Button className=" w-50"  onClick={e => navigate(url ? url : "/home")}>{t("EmployeeType.MEDIC")}</Button>
      </Row>
      <Row className="mb-3 mt-4 justify-content-center">
        <Button className="w-25 mx-1" type="submit">{t("Common.Save")}</Button>
        <Button className=" w-25  "  onClick={e => navigate("/schedule")}>{t("Common.Back")}</Button>
      </Row>
      
    </Form>
  );
};

export default SchedulePopup;
