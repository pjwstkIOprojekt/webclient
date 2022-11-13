import { MapViewHelperParams } from "../sharedViewsParams";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRoles } from "../../../hooks/useAuth";
import { getAccidentById, AccidentReportResponse, updateAccident, createAccident } from "../../../api/accidentReportCalls";
import { getEmail } from "../../../helpers/authHelper";
import { isDispositor } from "../../../helpers/authHelper";
import Form from "../../fragments/forms/Form";
import { Row, Alert } from "react-bootstrap";
import EnumSelect from "../../fragments/forms/api/EnumSelect";
import { EmergencyType } from "../../../api/enumCalls";
import FormCheck from "../../fragments/forms/FormCheck";
import Number from "../../fragments/forms/api/Number";
import NotBlank from "../../fragments/forms/api/NotBlank";
import Button from "../../fragments/util/Button";
import { accidentIcon } from "../map/MapIcons";
import MapView from "../../fragments/map/MapView";

const ReportView = (props: Readonly<MapViewHelperParams>) => {
  const [type, setType] = useState("");
  const [breathing, setBreathing] = useState(true);
  const [conscious, setConscious] = useState(true);
  const [amountVictims, setAmountVictims] = useState(1);
  const [bandCode, setBandCode] = useState("");
  const [error, setError] = useState("");
  const { reportId } = useParams();
  const navigate = useNavigate();
  const roles = useRoles();
  const update = props.update;

  useEffect(() => {
    if (reportId !== undefined) {
      getAccidentById(parseInt(reportId)).then(res => res.json()).then((data: AccidentReportResponse) => {
        if (data.emergencyType && data.location && data.victimCount) {
          setType(data.emergencyType);
          setBreathing(data.breathing);
          setConscious(data.consciousness);
          setAmountVictims(data.victimCount);
          update([data.location.latitude, data.location.longitude]);
        } else {
          setError("Nastąpił problem z wczytaniem danych. Spróbuj ponownie.");
        }
      }).catch(err => {
        console.error(err);
        setError("Nastąpił problem z wczytaniem danych. Spróbuj ponownie.");
      });
    }
  }, [reportId, update]);

  const handleSubmit = () => {
    if (reportId === undefined && !window.confirm("Czy na pewno chcesz zgłosić zdarzenie?")) {
      return;
    }

    setError("");

    const report = {
      bandCode: bandCode,
      emergencyType: type,
      victimCount: amountVictims,
      breathing: breathing,
      longitude: props.lng,
      latitude: props.lat,
    };

    (reportId ? updateAccident(parseInt(reportId), {
      ...report,
      consciousness: conscious
    }) : createAccident({
      ...report,
      email: getEmail() ?? "",
      concious: conscious
    })).then(res => {
      if (res.status === 200) {
        navigate(isDispositor(roles) ? "/dispanel/reports" : "/home");
      } else {
        console.log(res);
        setError("Wystąpił nieznany błąd. Spróbuj ponownie.");
      }
    }).catch(err => {
      console.error(err);
      setError("Wystąpił nieznany błąd. Spróbuj ponownie.");
    })
  };

  return (
    <Form onSubmit={handleSubmit} className="w-50">
      <h1 className="text-center mt-3">Zgłoszenie</h1>
      <Row className="justify-content-center mb-3">
        <EnumSelect id="emergencyType" enum={EmergencyType} onChange={e => setType(e.target.value)} required value={type} onLoad={setType} label="Rodzaj zdarzenia:" />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormCheck id="breathing" onChange={e => setBreathing(!breathing)} value={breathing} label="Czy ofiara oddycha?" />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormCheck id="conscious" onChange={e => setConscious(!conscious)} value={conscious} label="Czy ofiara jest przytomna?" />
      </Row>
      <Row className="justify-content-center mb-3">
        <Number id="amountVictims" minValue={1} onChange={e => setAmountVictims(parseInt(e.target.value))} required value={amountVictims} label="Ilość poszkodowanych" />
      </Row>
      <Row className="justify-content-center mb-3">
        <NotBlank id="bandCode" onChange={e => setBandCode(e.target.value)} value={bandCode} label="Kod z opaski" />
      </Row>
      <h4 className="text-center mt-3">Lokalizacja</h4>
      <Row className="justify-content-center mb-3">
        <Number id="lat" onChange={e => props.update([parseFloat(e.target.value), props.lng])} required value={props.lat} />
      </Row>
      <Row className="justify-content-center mb-3">
        <Number id="lng" onChange={e => props.update([props.lat, parseFloat(e.target.value)])} required value={props.lng} />
      </Row>
      <Row className="justify-content-center mb-5">
        <Button className="mt-3 w-50" type="submit">{reportId ? "Zapisz zmiany" : "Zgłoś zdarzenie"}</Button>
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

const ReportForm = () => {
  const [coords, setCoords] = useState<[number, number]>([52.222, 21.015]);
  useEffect(() => navigator.geolocation.getCurrentPosition(pos => setCoords([pos.coords.latitude, pos.coords.longitude])), []);
  const update = (x: Readonly<L.LatLng>) => setCoords([x.lat, x.lng]);

  const mark = {
    coords: coords,
    desc: "Miejsce zdarzenia",
    icon: accidentIcon
  };

  return <MapView center={coords} initialZoom={12} element={<ReportView update={setCoords} lat={coords[0]} lng={coords[1]} />} searchable clickable onClick={e => update(e)} onSearch={e => update(e.geocode.center)} marks={[mark]} />;
};

export default ReportForm;
