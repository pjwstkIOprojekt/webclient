import { MapViewHelperParams } from "../sharedViewsParams";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAmbulanceByLicensePlate, AmbulanceResponse, createAmbulance, updateAmbulance } from "../../../api/ambulanceCalls";
import { Row, Alert } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import Length from "../../fragments/forms/api/Length";
import EnumSelect from "../../fragments/forms/api/EnumSelect";
import { AmbulanceClass, AmbulanceType } from "../../../api/enumCalls";
import Number from "../../fragments/forms/api/Number";
import Button from "../../fragments/util/Button";
import L from "leaflet";
import { ambulanceIcon } from "../map/MapIcons";
import MapView from "../../fragments/map/MapView";

const AmbulanceFormView = (props: Readonly<MapViewHelperParams>) => {
  const [licensePlate, setLicensePlate] = useState("");
  const [ambulanceClass, setAmbulanceClass] = useState("");
  const [ambulanceType, setAmbulanceType] = useState("");
  const [seats, setSeats] = useState(1)
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
      longitude: props.lng,
      latitude: props.lat
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
    <Form onSubmit={onSubmit} className="w-50">
      <h1 className="my-3 text-center">{ambulanceId === undefined ? "Dodawanie karetki" : "Edycja karetki"}</h1>
      <Length length={8} id="licensePlate" className="mb-3" label="Numer rejestracyjny" required value={licensePlate} onChange={e => setLicensePlate(e.target.value)} disabled={ambulanceId !== undefined} />
      <EnumSelect id="ambulanceClass" className="mb-3" label="Rodzaj karetki" required enum={AmbulanceClass} value={ambulanceClass} onChange={e => setAmbulanceClass(e.target.value)} />
      <EnumSelect id="ambulanceType" className="mb-3" label="Typ karetki" required enum={AmbulanceType} value={ambulanceType} onChange={e => setAmbulanceType(e.target.value)} />
      <Number id="seats" className="mb-3" label="Liczba miejsc" required value={seats} minValue="1" onChange={e => setSeats(parseInt(e.target.value))} />
      <h4 className="text-center mb-3">Lokalizacja</h4>
      <Number id="latitude" className="mb-3" required value={props.lat} onChange={e => props.update(parseFloat(e.target.value), props.lng)} />
      <Number id="longitude" className="mb-3" required value={props.lng} onChange={e => props.update(props.lat, parseFloat(e.target.value))} />
      <Row className="justify-content-center">
        <Button className="mt-3 w-50" type="submit">{ambulanceId === undefined ? "Dodaj karetkę" : "Zapisz zmiany"}</Button>
      </Row>
      {error ? (
        <Alert variant="danger" className="mt-3">
          <Alert.Heading>Błąd</Alert.Heading>
          <p>{error}</p>
        </Alert>
      ) : ""}
    </Form>
  );
};

const AmbulanceForm = () => {
  const [coords, setCoords] = useState<[number, number]>([52.222, 21.015]);
  useEffect(() => navigator.geolocation.getCurrentPosition(pos => setCoords([pos.coords.latitude, pos.coords.longitude])), []);
  const onUpdate = (lat: number, lng: number) => setCoords([lat, lng]);
  const altUpdate = (x: L.LatLng) => onUpdate(x.lat, x.lng);

  const mark = {
    coords: coords,
    desc: "Karetka",
    icon: ambulanceIcon
  };

  return <MapView center={coords} initialZoom={12} element={<AmbulanceFormView update={onUpdate} lat={coords[0]} lng={coords[1]} />} clickable onClick={e => altUpdate(e)} marks={[mark]} />;
};

export default AmbulanceForm;
