import { MedicResponse, getMedics } from "../../../api/ambulanceCalls";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { licensePlateError } from "../sharedStrings";
import { Container, Row, Col } from "react-bootstrap";
import NavButton from "../../fragments/navigation/NavButton";
import Table from "../../fragments/util/Table";

const AssignedMedics = () => {
  const [medics, setMedics] = useState<MedicResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { ambulanceId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (ambulanceId === undefined) {
      console.error(licensePlateError);
      return;
    }

    const abortUpdate = new AbortController();

    getMedics(ambulanceId, abortUpdate).then(res => res.json()).then((data: MedicResponse[]) => {
      if (data) {
        setMedics(data);
      }

      setIsLoading(false);
    }).catch(err => {
      if (abortUpdate.signal.aborted) {
        return;
      }

      console.error(err);
      setIsLoading(false);
    });

    return () => abortUpdate.abort();
  }, [ambulanceId]);

  const firstField = "firstName";
  const lastField = "lastName";
  const emailField = "email";

  const cols = [
    { name: t("Person.FirstName"), property: firstField, filterBy: firstField, sortBy: firstField },
    { name: t("Person.LastName"), property: lastField, filterBy: lastField, sortBy: lastField },
    { name: t("Person.Email"), property: emailField, filterBy: emailField, sortBy: emailField }
  ];

  return (
    <Container className="my-3 justify-content-center text-center">
      <h1>{t("Medic.Assigned")}</h1>
      <Row className="my-2 justify-content-end">
        <Col />
        <Col md="auto">
          <NavButton to="add">+</NavButton>
        </Col>
      </Row>
      <Table columns={cols} data={medics} isLoading={isLoading} />
    </Container>
  );
};

export default AssignedMedics;
