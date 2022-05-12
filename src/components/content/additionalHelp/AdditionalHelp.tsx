import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import FormSelect from "../../fragments/FormSelect";
import FormControl from "../../fragments/FormControl";
import Button from "../../fragments/Button";
import Table from "../../fragments/Table";

const serviceTypes = ["Policja", "Straż pożarna"];

const AdditionalHelp = () => {
  const [data, setData] = useState<any[]>([]);
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  const updateRow = (x: any) => {
    const index = data.findIndex(e => e.id === x.id);

    if (index < 0) {
      return;
    }

    const copy = [...data];
    copy[index] = x;
    setData(copy);
  };

  const cols = [
    { name: "Rodzaj pomocy", property: (x: any) => <FormSelect options={serviceTypes} value={x.service} onChange={e => updateRow({...x, service: parseInt(e.target.value)})} /> },
    { name: "Uzasadnienie", property: (x: any) => <FormControl type="text" value={x.reason} onChange={e => updateRow({...x, reason: e.target.value})} /> },
    { name: "Skala zagrożenia", property: (x: any) => <FormControl type="number" value={x.rating} onChange={e => updateRow({...x, rating: e.target.value})} /> },
    { name: "", property: (x: any) => <Button className="w-50" text="X" onClick={e => setData(data.filter(i => i.id !== x.id))} /> }
  ];

  const addNew = () => {
    setData([...data, {
      id: id,
      service: 0,
      reason: "",
      rating: ""
    }]);

    setId(id + 1);
  };

  return (
    <Container className="mt-5">
      <Row className="text-center">
        <h1>Wezwanie dodatkowych służb</h1>
      </Row>
      <Row className="justify-content-end mb-3">
        <Button className="w-25" text="Nowe wezwanie" onClick={addNew} />
      </Row>
      <Row>
        <Table columns={cols} data={data} />
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-end">
          <Button className="w-50" text="Poproś o pomoc" onClick={() => navigate("/")} />
        </Col>
        <Col>
          <Button className="w-50" text="Anuluj" onClick={() => navigate("/")} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdditionalHelp;
