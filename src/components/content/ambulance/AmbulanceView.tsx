import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getAmbulanceByLicensePlate, AmbulanceResponse, updateAmbulance } from "../../../api/ambulanceCalls";
import { missingDataError, loadingError, unknownError, networkError } from "../sharedStrings";
import { Container, Row } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import EnumSelect from "../../fragments/forms/api/EnumSelect";
import { AmbulanceClass, AmbulanceType } from "../../../api/enumCalls";
import Number from "../../fragments/forms/api/Number";
import Submit from "../../fragments/forms/Submit";
import Button from "../../fragments/util/Button";
import Error from "../../fragments/forms/Error";
import Navtab from "../../fragments/navigation/Navtab";
import { Routes, Route } from "react-router-dom";
import AmbulanceHistory from "./AmbulanceHistory";
import AmbulancePath from "./AmbulancePath";
import AmbulanceEquipment from "./AmbulanceEquipment";
import EquipmentForm from "./EquipmentForm";

const AmbulanceView = () => {
  const [ambulanceClass, setAmbulanceClass] = useState("");
  const [ambulanceType, setAmbulanceType] = useState("");
  const [seats, setSeats] = useState(1);
  const [error, setError] = useState<string | undefined>("");
  const [readOnly, setReadOnly] = useState(true);
  const { ambulanceId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (ambulanceId !== undefined && readOnly) {
      setError(undefined);

      getAmbulanceByLicensePlate(ambulanceId).then(res => res.json()).then((data: AmbulanceResponse) => {
        if (data.ambulanceClass && data.ambulanceType) {
          setAmbulanceClass(data.ambulanceClass);
          setAmbulanceType(data.ambulanceType);
          setError("");
        } else {
          setError(missingDataError);
        }
      }).catch(err => {
        console.error(err);
        setError(loadingError);
      })
    }
  }, [ambulanceId, readOnly]);

  const onSubmit = () => {
    if (ambulanceId === undefined) {
      return;
    }

    if (readOnly) {
      setReadOnly(false);
      setError("");
      return;
    }

    setError(undefined);

    updateAmbulance({
      licensePlate: ambulanceId,
      ambulanceClass: ambulanceClass,
      ambulanceType: ambulanceType,
      seats: seats,
      longitude: 0,
      latitude: 0
    }).then(res => {
      if (res.ok) {
        setReadOnly(true);
        setError("");
      } else {
        console.log(res);
        setError(unknownError);
      }
    }).catch(err => {
      console.error(err);
      setError(networkError);
    });
  };

  const links = [
    { to: "hist", text: t("Ambulance.History") },
    { to: "path", text: t("Ambulance.Path") },
    { to: "equip", text: t("Equipment.Equipment") }
  ];

  return (
    <Container fluid className="my-3">
      <h1 className="text-center">{t("Ambulance.Ambulance")} {ambulanceId}</h1>
      <Row className="justify-content-center">
        <Form onSubmit={onSubmit} className="w-50">
          <EnumSelect id="ambulanceClass" className="mb-3" label={t("Ambulance.Class")} required enum={AmbulanceClass} value={ambulanceClass} onLoad={setAmbulanceClass} onChange={e => setAmbulanceClass(e.target.value)} disabled={readOnly} />
          <EnumSelect id="ambulanceType" className="mb-3" label={t("Ambulance.Type")} required enum={AmbulanceType} value={ambulanceType} onLoad={setAmbulanceType} onChange={e => setAmbulanceType(e.target.value)} disabled={readOnly} />
          <Number id="seats" className="mb-3" label={t("Ambulance.Seats")} required value={seats} minValue="1" onChange={e => setSeats(parseInt(e.target.value))} disabled={readOnly} />
          <Row xs="2" className="justify-content-center my-3">
            <Submit className="w-25" canSubmit={error !== undefined}>{readOnly ? t("Common.Edit") : t("Common.Save")}</Submit>
            {readOnly ? "" : <Button type="button" onClick={e => setReadOnly(true)} className="mx-3 w-25">{t("Common.Cancel")}</Button>}
          </Row>
          <Error className="mb-3" error={error} />
        </Form>
      </Row>
      <Navtab links={links} />
      <Routes>

        <Route path="hist" element={<AmbulanceHistory />} />
        <Route path="path" element={<AmbulancePath />} />
        <Route path="equip" element={<AmbulanceEquipment />} />
        <Route path="equip/new" element={<EquipmentForm />} />
      </Routes>
    </Container>
  );
};

export default AmbulanceView;
