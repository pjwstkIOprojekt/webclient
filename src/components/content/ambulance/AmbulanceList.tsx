import { useState, useEffect } from "react";
import { AmbulanceResponse, getAmbulances, deleteAmbulance } from "../../../api/ambulanceCalls";
import Link from "../../fragments/navigation/Link";
import NavButton from "../../fragments/navigation/NavButton";
import Button from "../../fragments/util/Button";
import { Container, Row, Col } from "react-bootstrap";
import Table from "../../fragments/util/Table";
import { useTranslation } from "react-i18next";


const AmbulanceList = () => {
  const [ambulances, setAmbulances] = useState<AmbulanceResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

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
    if (!window.confirm(t('Ambulance.IsDelete'))) {
      return;
    }

    setAmbulances(ambulances.filter(a => a.licensePlate !== plate));
    deleteAmbulance(plate);
  };

  const cols = [
    { name: t('Ambulance.RegistrationNumber'), property: (x: Readonly<AmbulanceResponse>) => <Link to={`edit/${x.licensePlate}`}>{x.licensePlate}</Link>, sortBy: "licensePlate", filterBy: "licensePlate" },
    { name: t('Ambulance.Kind'), property: "ambulanceClass", sortBy: "ambulanceClass", filterBy: "ambulanceClass" },
    { name: t('Ambulance.Type'), property: "ambulanceType", sortBy: "ambulanceType", filterBy: "ambulanceType" },
    { name: t('Ambulance.State'), property: "peopleCapacity", sortBy: "peopleCapacity", filterBy: "peopleCapacity" },
    { name: t('Ambulance.View'), property: (x: Readonly<AmbulanceResponse>) => <NavButton to={`hist/${x.licensePlate}`}>Historia</NavButton> },
    { name: t('Ambulance.Delete'), property: (x: Readonly<AmbulanceResponse>) => <Button onClick={e => remove(x.licensePlate)}>X</Button> }
  ];

  return (
    <Container className="mt-3 justify-content-center text-center">
      <h3>Karetki</h3>
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
