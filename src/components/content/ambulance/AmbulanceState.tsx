import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { licensePlateError, errorHeader } from "../sharedStrings";
import { changeAmbulanceState } from "../../../api/ambulanceCalls";
import { Container, Alert } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import EnumSelect from "../../fragments/forms/api/EnumSelect";
import { AmbulanceState as StateEnum } from "../../../api/enumCalls";
import Button from "../../fragments/util/Button";
import NavButton from "../../fragments/navigation/NavButton";

const AmbulanceState = () => {
  const [ambulanceState, setAmbulanceState] = useState("");
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

    changeAmbulanceState(ambulanceId, ambulanceState).then(res => {
      if (res.status === 200) {
        navigate(`../ambulances/hist/${ambulanceId}`);
      } else if (res.status === 204) {
        console.log(res);
        setError("Ambulance.SameState");
      } else {
        console.log(res);
        setError("Error.UnknownError");
      }
    }).catch(err => {
      console.error(err);
      setError("Error.UnknownError");
    });
  };

  return (
    <Container className="my-3">
      <h1 className="mb-3">{t("Ambulance.ChangingState")} {ambulanceId}</h1>
      <Form onSubmit={onSubmit}>
        <EnumSelect id="ambulanceState" className="mb-3" label={t("Ambulance.Status")} required enum={StateEnum} value={ambulanceState} onLoad={setAmbulanceState} onChange={e => setAmbulanceState(e.target.value)} />
        <Button className="m-2" type="submit">{t("Ambulance.ChangeState")}</Button>
        <NavButton to={`../ambulances/hist/${ambulanceId}`}>{t("Common.Cancel")}</NavButton>
        {error ? (
          <Alert variant="danger" className="mt-3">
            <Alert.Heading>{t(errorHeader)}</Alert.Heading>
            <p>{t(error)}</p>
          </Alert>
        ) : ""}
      </Form>
    </Container>
  );
};

export default AmbulanceState;
