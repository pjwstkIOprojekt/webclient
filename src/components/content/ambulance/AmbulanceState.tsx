import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

  const onSubmit = () => {
    if (ambulanceId === undefined) {
      console.error("License plate is undefined! This should never happen.");
      return;
    }

    setError("");

    updateAmbulanceState(ambulanceId, {
      ambulanceState: ambulanceState,
      start: start,
      end: end
    }).then(res => {
      if (res.status === 200) {
        navigate(`../ambulances/hist/${ambulanceId}`);
      } else {
        console.log(res);
        setError("Wystąpił nieznany błąd. Spróbuj ponownie.");
      }
    }).catch(err => {
      console.error(err);
      setError("Wystąpił nieznany błąd. Spróbuj ponownie.");
    });
  };

  return (
    <Container className="my-3">
      <h1 className="mb-3">Zmiana stanu karetki</h1>
      <Form onSubmit={onSubmit}>
        <EnumSelect id="ambulanceState" className="mb-3" label="Stan karetki" required enum={StateEnum} value={ambulanceState} onChange={e => setAmbulanceState(e.target.value)} />
        <Date id="start" className="mb-3" label="Od" required withTime value={start} onChange={e => setStart(e.target.value)} />
        <Date id="end" className="mb-3" label="Do" required withTime value={end} onChange={e => setEnd(e.target.value)} />
        <Button className="m-2" type="submit">Zmień stan karetki</Button>
        <NavButton to={`../ambulances/hist/${ambulanceId}`}>Anuluj</NavButton>
        {error ? (
          <Alert variant="danger" className="mt-3">
            <Alert.Heading>Błąd</Alert.Heading>
            <p>{error}</p>
          </Alert>
        ) : ""}
      </Form>
    </Container>
  );
};

export default AmbulanceState;
