import { MapDataHelperParams } from "../sharedViewsParams";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../../../hooks/usePopup";
import { useTranslation } from "react-i18next";
import { createAccident } from "../../../api/accidentReportCalls";
import { getEmail } from "../../../helpers/authHelper";
import { userEmailError } from "../sharedStrings";
import { unknownError, networkError, errorHeader } from "../sharedStrings";
import ConfirmPopup from "../../fragments/popups/ConfirmPopup";
import Form from "../../fragments/forms/Form";
import { Row, Alert } from "react-bootstrap";
import EnumSelect from "../../fragments/forms/api/EnumSelect";
import { EmergencyType } from "../../../api/enumCalls";
import FormCheck from "../../fragments/forms/FormCheck";
import Number from "../../fragments/forms/api/Number";
import NotBlank from "../../fragments/forms/api/NotBlank";
import FormTextArea from "../../fragments/forms/FormTextArea";
import Submit from "../../fragments/forms/Submit";
import { accidentIcon } from "../map/MapIcons";
import MapView from "../../fragments/map/MapView";

const ReportView = (props: Readonly<MapDataHelperParams<string>>) => {
  const [breathing, setBreathing] = useState(true);
  const [conscious, setConscious] = useState(true);
  const [amountVictims, setAmountVictims] = useState(1);
  const [bandCode, setBandCode] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState<string | undefined>("");
  const navigate = useNavigate();
  const popup = usePopup();
  const { t } = useTranslation();

  const handleSubmit = () => {
    setError(undefined);
    const email = getEmail();

    if (!email) {
      console.error(userEmailError);
      setError("");
      return;
    }

    createAccident({
      bandCode: bandCode,
      emergencyType: props.data,
      victimCount: amountVictims,
      breathing: breathing,
      longitude: props.lng,
      latitude: props.lat,
      description: desc,
      email: email,
      concious: conscious
    }).then(res => {
      if (res.ok) {
        navigate("/home");
      } else {
        console.log(res);
        setError(unknownError);
      }
    }).catch(err => {
      console.error(err);
      setError(networkError);
    })
  };

  const onSubmit = () => popup(<ConfirmPopup text="Report.ConfirmCreate" onConfirm={handleSubmit} />);

  return (
    <Form onSubmit={onSubmit} className="w-50">
      <h1 className="text-center mt-3">{t("Report.Report")}</h1>
      <Row className="justify-content-center mb-3">
        <EnumSelect id="emergencyType" enum={EmergencyType} onChange={e => props.setData(e.target.value)} required value={props.data} onLoad={props.setData} label={t("Report.Type")} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormCheck id="breathing" onChange={e => setBreathing(!breathing)} value={breathing} label={t("Report.Breathing")} />
      </Row>
      <Row className="justify-content-center mb-3 ml-2">
        <FormCheck id="conscious" onChange={e => setConscious(!conscious)} value={conscious} label={t("Report.Consious")} />
      </Row>
      <Row className="justify-content-center mb-3">
        <Number id="amountVictims" minValue={1} onChange={e => setAmountVictims(parseInt(e.target.value))} required value={amountVictims} label={t("Report.VictimsCount")} />
      </Row>
      <Row className="justify-content-center mb-3">
        <NotBlank id="bandCode" onChange={e => setBandCode(e.target.value)} value={bandCode} label={t("Report.BandCode")} />
      </Row>
      <Row className="justify-content-center mb-3">
        <FormTextArea id="description" onChange={e => setDesc(e.target.value)} value={desc} label={t("Report.Description")} maxLength={100} />
      </Row>
      <h4 className="text-center mt-3">{t("Map.Location")}</h4>
      <Row className="justify-content-center mb-3">
        <Number id="lat" onChange={e => props.update([parseFloat(e.target.value), props.lng])} required value={props.lat} />
      </Row>
      <Row className="justify-content-center mb-3">
        <Number id="lng" onChange={e => props.update([props.lat, parseFloat(e.target.value)])} required value={props.lng} />
      </Row>
      <Row className="justify-content-center mb-5 mt-3">
        <Submit className="w-50" canSubmit={error !== undefined}>{t("Report.Create")}</Submit>
      </Row>
      {error ? (
        <Alert variant="danger" className="mt-3">
          <Alert.Heading>{t(errorHeader)}</Alert.Heading>
          <p>{t(error)}</p>
        </Alert>
      ) : ""}
    </Form>
  );
};

const ReportForm = () => {
  const [type, setType] = useState("");
  const [coords, setCoords] = useState<[number, number]>([0, 0]);
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => navigator.geolocation.getCurrentPosition(pos => {
    setCoords([pos.coords.latitude, pos.coords.longitude]);
    setLoaded(true);
  }, err => setLoaded(true)), []);

  const update = (x: Readonly<L.LatLng>) => setCoords([x.lat, x.lng]);

  const mark = {
    coords: coords,
    desc: t("Report.Location"),
    icon: EmergencyType.values?.[type]?.icon ?? accidentIcon
  };

  return <MapView isLoaded={loaded} center={coords} initialZoom={12} element={<ReportView update={setCoords} lat={coords[0]} lng={coords[1]} data={type} setData={setType} />} searchable clickable onClick={e => update(e)} onSearch={e => update(e.geocode.center)} marks={[mark]} />;
};

export default ReportForm;
