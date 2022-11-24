import { useState, useEffect } from "react";
import { usePopup } from "../../../hooks/usePopup";
import { useTranslation } from "react-i18next";
import { useRoles } from "../../../hooks/useAuth";
import { isDispositor, isDirector } from "../../../helpers/authHelper";
import { FacilityResponse, getFacilities, deleteFacility } from "../../../api/facilityCalls";
import Table, {TableColumnParams} from "../../fragments/util/Table";
import Link from "../../fragments/navigation/Link";
import Enum from "../../fragments/values/Enum";
import { FacilityType } from "../../../api/enumCalls";
import Button from "../../fragments/util/Button";
import ConfirmPopup from "../../fragments/popups/ConfirmPopup";
import { Container, Row, Col } from "react-bootstrap";
import NavButton from "../../fragments/navigation/NavButton";

const FacilitiesList = () => {
  const [facilities, setFacilities] = useState<FacilityResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const popup = usePopup();
  const { t } = useTranslation();
  const roles = useRoles();
  const canRemove = isDispositor(roles) || isDirector(roles);

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
    if (!canRemove) {
      return;
    }
    
    setFacilities(facilities.filter(f => f.facilityId !== id));
    deleteFacility(id);
  };

  const cols: TableColumnParams<FacilityResponse>[] = [
    { name: "#", property: (x: Readonly<FacilityResponse>) => <Link to={x.facilityId.toString()}>{x.facilityId}</Link>, sortBy: "facilityId", filterBy: "facilityId" },
    { name: t("Facility.Type"), property: (x: Readonly<FacilityResponse>) => <Enum enum={FacilityType} value={x.facilityType} />, sortBy: "facilityType", filterBy: "facilityType" },
    { name: t("Facility.Name"), property: "name", sortBy: "name", filterBy: "name" }
  ];

  if (canRemove) {
    cols.push({
      name: t("Common.Remove"),
      property: (x: Readonly<FacilityResponse>) => <Button onClick={e => popup(<ConfirmPopup text={t("Facility.ConfirmRemove")} onConfirm={() => remove(x.facilityId)} />)}>X</Button>
    });
  }

  return (
    <Container className="mt-3 justify-content-center text-center">
      <h3>{t("Facility.Facilities")}</h3>
      <Row className="my-2 justify-content-end">
        <Col />
        <Col md="auto">
          <NavButton to="/newfacility">+</NavButton>
        </Col>
      </Row>
      <Table columns={cols} data={facilities} isLoading={isLoading} />
    </Container>
  );
};

export default FacilitiesList;
