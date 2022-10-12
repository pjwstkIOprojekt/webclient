import { useState, FormEvent, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEquipmentById, createEquipment, updateEquipment } from "../../../api/equipmentCalls";
import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../fragments/forms/FormControl";
import Button from "../../fragments/util/Button";

const AmbulanceEquipment = () => {
  const [name, setName] = useState("");
  const [minAmount, setMinAmount] = useState(1);
  const [metric, setMetric] = useState("");
  const { equipmentId } = useParams();
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    start: undefined,
    end: undefined,
    amount: undefined
  });

  useEffect(() => {
    if (equipmentId !== undefined) {
      getEquipmentById(parseInt(equipmentId)).then(res => res.json()).then(data => {
        console.log(data);
        setName(data.name);
        setMetric(data.measurement);

        setStats({
          start: data.dateStart,
          end: data.dateEnd,
          amount: data.currentAmount
        });
      }).catch(err => console.log(err));
    }
  }, [equipmentId]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    (equipmentId === undefined ? createEquipment({
      name: name
    }) : updateEquipment(parseInt(equipmentId), {
      name: name
    })).then(res => navigate("../ambulances")).catch(err => console.log(err));

    navigate("../ambulances");
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">{`${equipmentId === undefined ? "Dodawanie" : "Edycja"} wyposażenia`}</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <FormControl id="name" onChange={e => setName(e.target.value)} value={name} className="mb-3 w-50" label="Nazwa" type="text" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="amount" onChange={e => setMinAmount(parseInt(e.target.value))} value={minAmount} className="mb-3 w-50" label="Minimalna ilość" type="number" />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="metric" onChange={e => setMetric(e.target.value)} value={metric} className="mb-3 w-50" label="Jednostak miary" type="text" />
        </Row>
        <Row className="justify-content-center">
          <Button className="my-3 w-25" type="submit">{equipmentId === undefined ? "Dodaj wyposażenie" : "Zapisz zmiany"}</Button>
        </Row>
        {equipmentId === undefined ? "" : (
          <>
            <h2 className="text-center mt-3">Wyposażenie w karetce</h2>
            <Row className="justify-content-center">
              <FormControl value={stats.start} disabled className="mb-3 w-50" label="Data przypisania do karetki" type="date" />
            </Row>
            <Row className="justify-content-center">
              <FormControl value={stats.end} disabled className="mb-3 w-50" label="Data planowanego uzupełnienia" type="date" />
            </Row>
            <Row className="justify-content-center">
              <FormControl value={stats.amount} disabled className="mb-3 w-50" label="Ogólne zużycie" type="text" />
            </Row>
          </>
        )}
      </Form>
    </Container>
  );
}

export default AmbulanceEquipment;
