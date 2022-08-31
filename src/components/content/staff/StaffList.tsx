import NavButton from "../../fragments/navigation/NavButton";
import { Container, Row, Col } from "react-bootstrap";
import Table from "../../fragments/util/Table";
import { useState } from "react";
import { getStaff } from "../../../api/staffCalls";
import ViewLoader from "../../fragments/util/ViewLoader";

interface StaffListParams {
  data: Record<string, any>[]
}

const StaffListDisplay = (props: Readonly<StaffListParams>) => {
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
      <Table columns={cols} data={props.data} />
    </Container>
  );
};

const StaffList = () => {
  const [data, setData] = useState<any[]>([
    { id: 1, firstName: "Jan", lastName: "Nowak", role: "Użytkownik" },
    { id: 2, firstName: "Stefan", lastName: "Kowalski", role: "Ratownik" }
  ]);

  const onLoad = (loaded: () => void) => {
    loaded();

    getStaff().then(res => res.json()).then(dat => {
      console.log(dat);
      setData(dat);
    }).catch(err => console.log(err));
  };

  return <ViewLoader onLoad={onLoad} element={<StaffListDisplay data={data} />} />;
};

export default StaffList;
