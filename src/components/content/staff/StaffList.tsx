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
    { name: "#", property: "id", sortBy: "id", filterBy: "id" },
    { name: "Nazwa konta", property: "username", sortBy: "username", filterBy: "username" },
    { name: "Edytuj pracownika", property: (x: any) => <NavButton to={`edit/${x.id}`}>Edytuj</NavButton> }
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
    { id: 1, username: "Janek303" },
    { id: 2, username: "Stefan" }
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
