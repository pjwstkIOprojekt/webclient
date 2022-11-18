import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { usePopup } from "../../../hooks/usePopup";
import { AmbulanceResponse, getAmbulances, deleteAmbulance } from "../../../api/ambulanceCalls";
import Link from "../../fragments/navigation/Link";
import Enum from "../../fragments/values/Enum";
import { AmbulanceClass, AmbulanceType, AmbulanceState } from "../../../api/enumCalls";
import NavButton from "../../fragments/navigation/NavButton";
import Button from "../../fragments/util/Button";
import ConfirmPopup from "../../fragments/popups/ConfirmPopup";
import { Container, Row, Col } from "react-bootstrap";
import Table from "../../fragments/util/Table";

const AmbulanceList = () => {
  const [ambulances, setAmbulances] = useState<AmbulanceResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const popup = usePopup();

  useEffect(() => {
    getAmbulances().then(res => res.json()).then((data: AmbulanceResponse[]) => {
      if (data) {
        setAmbulances(data);
      }

      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, []);

  const remove = (plate: string) => {
    setAmbulances(ambulances.filter(a => a.licensePlate !== plate));
    deleteAmbulance(plate);
  };

  const cols = [
    { name: t("Ambulance.RegistrationNumber"), property: (x: Readonly<AmbulanceResponse>) => <Link to={`edit/${x.licensePlate}`}>{x.licensePlate}</Link>, sortBy: "licensePlate", filterBy: "licensePlate" },
    { name: t("Ambulance.Kind"), property: (x: Readonly<AmbulanceResponse>) => <Enum enum={AmbulanceClass} value={x.ambulanceClass} />, sortBy: "ambulanceClass", filterBy: "ambulanceClass" },
    { name: t("Ambulance.Type"), property: (x: Readonly<AmbulanceResponse>) => <Enum enum={AmbulanceType} value={x.ambulanceType} />, sortBy: "ambulanceType", filterBy: "ambulanceType" },
    { name: t("Ambulance.State"), property: (x: Readonly<AmbulanceResponse>) => <Enum enum={AmbulanceState} value={x.ambulanceStateType} />, sortBy: "ambulanceStateType", filterBy: "ambulanceStateType" },
    { name: t("Ambulance.View"), property: (x: Readonly<AmbulanceResponse>) => <NavButton to={`hist/${x.licensePlate}`}>{t("Ambulance.History")}</NavButton> },
    { name: t("Ambulance.Delete"), property: (x: Readonly<AmbulanceResponse>) => <Button onClick={e => popup(<ConfirmPopup text="Ambulance.IsDelete" onConfirm={() => remove(x.licensePlate)} />)}>X</Button> }
  ];

  return (
    <Container className="mt-3 justify-content-center text-center">
      <h3>{t("Ambulance.Ambulances")}</h3>
      <Row className="my-2 justify-content-end">
        <Col />
        <Col md="auto">
          <NavButton to="new">+</NavButton>
        </Col>
      </Row>
      <Table columns={cols} data={ambulances} isLoading={isLoading} />
    </Container>
  );
};

export default AmbulanceList;
