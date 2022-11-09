import { useState, useEffect } from "react";
import NavButton from "../../fragments/navigation/NavButton";
import { Container, Row, Col } from "react-bootstrap";
import Table from "../../fragments/util/Table";
import { useTranslation } from "react-i18next";

const StaffList = () => {
  const [data] = useState([]);
  const [isLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    /*getStaff().then(res => res.json()).then(dat => {
      console.log(dat);
      setData(dat);
      setIsLoading(false);
    }).catch(err => console.log(err));*/
  }, []);

  const cols = [
    { name: t('Person.FirstName'), property: "firstName", sortBy: "firstName", filterBy: "firstName" },
    { name: t('Person.LastName'), property: "lastName", sortBy: "lastName", filterBy: "lastName" },
    { name: t('Role'), property: "role", sortBy: "role", filterBy: "role" },
    { name: t('Action'), property: (x: any) => <NavButton to={`edit/${x.id}`}>{t('Edit')}</NavButton> }
  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>{t('Person.ListStaff')}</h3>
      <Row className="my-2 justify-content-end">
        <Col />
        <Col md="auto">
          <NavButton to="new">+</NavButton>
        </Col>
      </Row>
      <Table columns={cols} data={data} isLoading={isLoading} />
    </Container>
  );
};

export default StaffList;
