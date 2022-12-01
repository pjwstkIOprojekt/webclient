import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getAmbulanceByLicensePlate, AmbulanceResponse, updateAmbulance } from "../../../api/ambulanceCalls";
import { missingDataError, loadingError, unknownError, networkError, errorHeader } from "../sharedStrings";
import { Container, Row, Alert } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import EnumSelect from "../../fragments/forms/api/EnumSelect";
import { AmbulanceClass, AmbulanceType } from "../../../api/enumCalls";
import Submit from "../../fragments/forms/Submit";
import Button from "../../fragments/util/Button";
import Navtab from "../../fragments/navigation/Navtab";
import { Routes, Route } from "react-router-dom";
import AmbulanceHistory from "./AmbulanceHistory";
import AmbulancePath from "./AmbulancePath";

const AmbulanceView = () => {
  const [ambulanceClass, setAmbulanceClass] = useState("");
  const [ambulanceType, setAmbulanceType] = useState("");
  const [error, setError] = useState<string | undefined>("");
  const { ambulanceId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (ambulanceId !== undefined) {
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
        console.error(error);
        setError(loadingError);
      })
    }
  }, [ambulanceId]);

  const onSubmit = () => {
    if (ambulanceId === undefined) {
      return;
    }

    setError(undefined);

    updateAmbulance({
      licensePlate: ambulanceId,
      ambulanceClass: ambulanceClass,
      ambulanceType: ambulanceType,
      seats: 1,
      longitude: 0,
      latitude: 0
    }).then(res => {
      if (res.ok) {
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
    { to: "path", text: t("Ambulance.Path") }
  ];

  return (
    <Container fluid className="my-3">
      <h1 className="text-center">{t("Ambulance.Ambulance")} {ambulanceId}</h1>
      <Row className="justify-content-center">
        <Form onSubmit={onSubmit} className="w-50">
          <EnumSelect id="ambulanceClass" className="mb-3" label={t("Ambulance.Class")} required enum={AmbulanceClass} value={ambulanceClass} onLoad={setAmbulanceClass} onChange={e => setAmbulanceClass(e.target.value)} />
          <EnumSelect id="ambulanceType" className="mb-3" label={t("Ambulance.Type")} required enum={AmbulanceType} value={ambulanceType} onLoad={setAmbulanceType} onChange={e => setAmbulanceType(e.target.value)} />
          <Row xs="2" className="justify-content-center my-3">
            <Submit className="w-25" canSubmit={error !== undefined}>{t("Common.SaveChanges")}</Submit>
            <Button className="mx-3 w-25">{t("Common.Cancel")}</Button>
          </Row>
          {error ? (
            <Alert variant="danger" className="mb-3">
              <Alert.Heading>{t(errorHeader)}</Alert.Heading>
              <p>{t(error)}</p>
            </Alert>
          ) : ""}
        </Form>
      </Row>
      <Navtab links={links} />
      <Routes>
        <Route path="hist" element={<AmbulanceHistory />} />
        <Route path="path" element={<AmbulancePath />} />
      </Routes>
    </Container>
  );
};

export default AmbulanceView;
