import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { licensePlateError } from "../sharedStrings";
import { updateAmbulanceState } from "../../../api/ambulanceCalls";
import { Container, Alert } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import EnumSelect from "../../fragments/forms/api/EnumSelect";
import { AmbulanceState as StateEnum } from "../../../api/enumCalls";
import Date from "../../fragments/forms/api/Date";
import Button from "../../fragments/util/Button";
import NavButton from "../../fragments/navigation/NavButton";

const AmbulanceState = () => {
  const [ambulanceState, setAmbulanceState] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [error, setError] = useState("");
  const { ambulanceId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSubmit = () => {
    if (ambulanceId === undefined) {
      console.error(licensePlateError);
      return;
    }

    setError("");

    updateAmbulanceState(ambulanceId, {
      stateType: ambulanceState,
      start: start,
      end: end
    }).then(res => {
      if (res.status === 200) {
        navigate(`../ambulances/hist/${ambulanceId}`);
      } else {
        console.log(res);
        setError(t("Error.UnknownError"));
      }
    }).catch(err => {
      console.error(err);
      setError(t("Error.UnknownError"));
    });
  };

  return (
    <Container className="my-3">
      <h1 className="mb-3">{t("Ambulance.ChangingState")} {ambulanceId}</h1>
      <Form onSubmit={onSubmit}>
        <EnumSelect id="ambulanceState" className="mb-3" label={t("Ambulance.Status")} required enum={StateEnum} value={ambulanceState} onLoad={setAmbulanceState} onChange={e => setAmbulanceState(e.target.value)} />
        <Date id="start" className="mb-3" label={t("Common.Since")} required withTime value={start} onChange={e => setStart(e.target.value)} />
        <Date id="end" className="mb-3" label={t("Common.Until")} required withTime value={end} onChange={e => setEnd(e.target.value)} />
        <Button className="m-2" type="submit">{t("Ambulance.ChangeState")}</Button>
        <NavButton to={`../ambulances/hist/${ambulanceId}`}>{t("Common.Cancel")}</NavButton>
        {error ? (
          <Alert variant="danger" className="mt-3">
            <Alert.Heading>{t("Error.Error")}</Alert.Heading>
            <p>{error}</p>
          </Alert>
        ) : ""}
      </Form>
    </Container>
  );
};

export default AmbulanceState;
