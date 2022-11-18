import { useState, useEffect } from "react";
import { usePopup } from "../../../hooks/usePopup";
import { FacilityResponse, getFacilities, deleteFacility } from "../../../api/facilityCalls";
import Link from "../../fragments/navigation/Link";
import Enum from "../../fragments/values/Enum";
import { FacilityType } from "../../../api/enumCalls";
import Button from "../../fragments/util/Button";
import ConfirmPopup from "../../fragments/popups/ConfirmPopup";
import NavButton from "../../fragments/navigation/NavButton";
import { Container, Row, Col } from "react-bootstrap";
import Table from "../../fragments/util/Table";

const FacilitiesList = () => {
  const [facilities, setFacilities] = useState<FacilityResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const popup = usePopup();

  useEffect(() => {
    getFacilities().then(res => res.json()).then((data: FacilityResponse[]) => {
      if (data) {
        setFacilities(data);
      }

      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, []);

  const remove = (id: number) => {
    setFacilities(facilities.filter(f => f.facilityId !== id));
    deleteFacility(id);
  };

  const cols = [
    { name: "#", property: (x: Readonly<FacilityResponse>) => <Link to={`edit/${x.facilityId}`}>{x.facilityId}</Link>, sortBy: "facilityId", filterBy: "facilityId" },
    { name: "Rodzaj placówki", property: (x: Readonly<FacilityResponse>) => <Enum enum={FacilityType} value={x.facilityType} />, sortBy: "facilityType", filterBy: "facilityType" },
    { name: "Nazwa", property: "name", sortBy: "name", filterBy: "name" },
    { name: "Usuń", property: (x: Readonly<FacilityResponse>) => <Button onClick={e => popup(<ConfirmPopup text="Czy na pewno chcesz usunąć tą placówkę?" onConfirm={() => remove(x.facilityId)} />)}>X</Button> }
  ];

  return (
    <Container className="mt-3 justify-content-center text-center">
      <h3>Lista placówek</h3>
      <Row className="my-2 justify-content-end">
        <Col />
        <Col md="auto">
          <NavButton to="new">+</NavButton>
        </Col>
      </Row>
      <Table columns={cols} data={facilities} isLoading={isLoading} />
    </Container>
  );
};

export default FacilitiesList;
