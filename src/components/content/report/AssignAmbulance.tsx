import { AmbulanceResponse } from "../../../api/ambulanceCalls";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getAmbulances } from "../../../api/ambulanceCalls";
import { AmbulanceState, AmbulanceClass, AmbulanceType } from "../../../api/enumCalls";
import { addAmbulances } from "../../../api/incidentCalls";
import FormCheck from "../../fragments/forms/FormCheck";
import Link from "../../fragments/navigation/Link";
import Enum from "../../fragments/values/Enum";
import { Container } from "react-bootstrap";
import Spinner from "../../fragments/util/Spinner";
import Button from "../../fragments/util/Button";
import Table from "../../fragments/util/Table";

interface Ambulance extends AmbulanceResponse {
  assigned: boolean
}

const AssignAmbulance = () => {
  const [ambulances, setAmbulances] = useState<Ambulance[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const { reportId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    getAmbulances().then(res => res.json()).then((data: AmbulanceResponse[]) => {
      if (data) {
        setAmbulances(data.filter(a => a.ambulanceStateType === AmbulanceState.available).map(a => ({
          ...a,
          assigned: false
        })));
      }

      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, []);

  const submit = () => {
    if (reportId === undefined) {
      return;
    }

    setIsProcessing(true);
    const toAdd = ambulances.filter(a => a.assigned).map(a => a.licensePlate);

    if (toAdd.length < 1) {
      setIsProcessing(false);
      return;
    }

    addAmbulances(parseInt(reportId), toAdd).then(res => {
      if (res.ok) {
        setAmbulances(ambulances.filter(a => !a.assigned));
      } else {
        console.log(res);
      }

      setIsProcessing(false);
    }).catch(err => {
      console.error(err);
      setIsProcessing(false);
    });
  };

  const licenseField = "licensePlate";
  const classField = "ambulanceClass";
  const typeField = "ambulanceType";

  const assign = (x: Ambulance) => setAmbulances(ambulances.map(a => a === x ? ({
    ...a,
    assigned: !x.assigned
  }) : a));

  const cols = [
    { name: t("Report.Assigned"), property: (x: Readonly<Ambulance>) => <FormCheck value={x.assigned} onChange={e => assign(x)} disabled={isProcessing} /> },
    { name: t("Ambulance.LicensePlate"), property: (x: Readonly<Ambulance>) => <Link to={`/ambulances/${x.licensePlate}/hist`}>{x.licensePlate}</Link>, filterBy: licenseField, sortBy: licenseField },
    { name: t("Ambulance.Class"), property: (x: Readonly<Ambulance>) => <Enum enum={AmbulanceClass} value={x.ambulanceClass} />, filterBy: classField, sortBy: classField },
    { name: t("Ambulance.Type"), property: (x: Readonly<Ambulance>) => <Enum enum={AmbulanceType} value={x.ambulanceType} />, filterBy: typeField, sortBy: typeField }
  ];

  return (
    <Container className="mt-3 justify-content-center text-center">
      <h1>{t("HomePage.AmbulancesAvailable")}</h1>
      {isLoading || isProcessing ? <Spinner className="my-3" /> : <Button onClick={submit} className="my-3">{t("Report.Assign")}</Button>}
      <Table columns={cols} data={ambulances} isLoading={isLoading} />
    </Container>
  );
};

export default AssignAmbulance;
