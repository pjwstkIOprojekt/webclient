import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAmbulanceByLicensePlate, AmbulanceResponse, createAmbulance, updateAmbulance } from "../../../api/ambulanceCalls";
import { Container, Alert } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import Length from "../../fragments/forms/api/Length";
import EnumSelect from "../../fragments/forms/api/EnumSelect";
import { AmbulanceClass, AmbulanceType } from "../../../api/enumCalls";
import Number from "../../fragments/forms/api/Number";
import Button from "../../fragments/util/Button";
import NavButton from "../../fragments/navigation/NavButton";

const AmbulanceForm = () => {
  const [licensePlate, setLicensePlate] = useState("");
  const [ambulanceClass, setAmbulanceClass] = useState("");
  const [ambulanceType, setAmbulanceType] = useState("");
  const [seats, setSeats] = useState(1)
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [error, setError] = useState("");
  const { ambulanceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (ambulanceId !== undefined) {
      getAmbulanceByLicensePlate(ambulanceId).then(res => res.json()).then((data: AmbulanceResponse) => {
        if (data.ambulanceClass && data.ambulanceType) {
          setLicensePlate(data.licensePlate);
          setAmbulanceClass(data.ambulanceClass);
          setAmbulanceType(data.ambulanceType);
        } else {
          setError("Nastąpił problem z wczytaniem danych. Spróbuj ponownie.");
        }
      }).catch(err => {
        console.error(err);
        setError("Nastąpił problem z wczytaniem danych. Spróbuj ponownie.");
      });
    }
  }, [ambulanceId]);

  const onSubmit = () => {
    setError("");

    const ambulance = {
      licensePlate: licensePlate,
      ambulanceClass: ambulanceClass,
      ambulanceType: ambulanceType,
      seats: seats,
      longitude: long,
      latitude: lat
    };

    (ambulanceId === undefined ? createAmbulance(ambulance) : updateAmbulance(ambulance)).then(res => {
      if (res.status === 200) {
        navigate("../ambulances");
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
      <h1 className="mb-3">{ambulanceId === undefined ? "Dodawanie karetki" : "Edycja karetki"}</h1>
      <Form onSubmit={onSubmit}>
        <Length length={8} id="licensePlate" className="mb-3" label="Numer rejestracyjny" required value={licensePlate} onChange={e => setLicensePlate(e.target.value)} disabled={ambulanceId === undefined} />
        <EnumSelect id="ambulanceClass" className="mb-3" label="Rodzaj karetki" required enum={AmbulanceClass} value={ambulanceClass} onChange={e => setAmbulanceClass(e.target.value)} />
        <EnumSelect id="ambulanceType" className="mb-3" label="Typ karetki" required enum={AmbulanceType} value={ambulanceType} onChange={e => setAmbulanceType(e.target.value)} />
        <Number id="seats" className="mb-3" label="Liczba miejsc" required value={seats} minValue="1" onChange={e => setSeats(parseInt(e.target.value))} />
        <Number id="longitude" className="mb-3" required value={long} onChange={e => setLong(parseFloat(e.target.value))} />
        <Number id="latitude" className="mb-3" required value={lat} onChange={e => setLat(parseFloat(e.target.value))} />
        <Button className="m-2" type="submit">{ambulanceId === undefined ? "Dodaj karetkę" : "Zapisz zmiany"}</Button>
        <NavButton to="../medicaldata">Anuluj</NavButton>
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

export default AmbulanceForm;
