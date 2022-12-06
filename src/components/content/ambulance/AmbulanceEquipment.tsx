import { useState, useEffect } from "react";
import { EquipmentResponse, getItems } from "../../../api/itemCalls";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { licensePlateError } from "../sharedStrings";
import { getItems as getAmbulanceItems } from "../../../api/ambulanceCalls";
import { Container, Row, Col } from "react-bootstrap";
import NavButton from "../../fragments/navigation/NavButton";
import Table from "../../fragments/util/Table";

const AmbulanceEquipment = () => {
  const [items] = useState<EquipmentResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { ambulanceId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (ambulanceId === undefined) {
      console.error(licensePlateError);
      return;
    }

    const itemsReq = getItems().then(res => res.json());
    const ambReq = getAmbulanceItems(ambulanceId).then(res => res.json());

    Promise.all([itemsReq, ambReq]).then((data: [any, any]) => {
      if (data) {
        console.log(data[0]);
        console.log(data[1]);
      }

      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, [ambulanceId]);

  const cols = [
    { name: "#", property: "id", filterBy: "id", sortBy: "id" }
  ];

  return (
    <Container className="my-3 justify-content-center">
      <h3 className="text-center">{t("Equipment.Ambulance")}</h3>
      <Row className="my-3 justify-content-end">
        <Col />
        <Col md="auto">
          <NavButton to="new">+</NavButton>
        </Col>
      </Row>
      <Table columns={cols} data={items} isLoading={isLoading} />
    </Container>
  );
};

export default AmbulanceEquipment;
