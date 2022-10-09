import { useState, useEffect } from "react";
import { getStaff } from "../../../api/staffCalls";
import NavButton from "../../fragments/navigation/NavButton";
import { Container, Row, Col } from "react-bootstrap";
import Table from "../../fragments/util/Table";

const StaffList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStaff().then(res => res.json()).then(dat => {
      console.log(dat);
      setData(dat);
      setIsLoading(false);
    }).catch(err => console.log(err));
  }, []);

  const cols = [
    { name: "Imię", property: "firstName", sortBy: "firstName", filterBy: "firstName" },
    { name: "Nazwisko", property: "lastName", sortBy: "lastName", filterBy: "lastName" },
    { name: "Rola", property: "role", sortBy: "role", filterBy: "role" },
    { name: "Akcje", property: (x: any) => <NavButton to={`edit/${x.id}`}>Edytuj</NavButton> }
  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Lista pracowników</h3>
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
