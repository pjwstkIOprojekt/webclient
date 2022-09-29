import { useState, FormEvent, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAmbulanceById } from "../../../api/ambulanceCalls";
import { Container, Form, Row } from "react-bootstrap";
import FormControl from "../../fragments/forms/FormControl";
import Button from "../../fragments/util/Button";

const AmbulanceEquipment = () => {
  const [name, setName] = useState("");
  const [minAmount, setMinAmount] = useState(1);
  const [metric, setMetric] = useState("");
  const { ambulanceId } = useParams();
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    start: undefined,
    end: undefined,
    amount: undefined
  });

  useEffect(() => {
    if (ambulanceId !== undefined) {
      getAmbulanceById(parseInt(ambulanceId)).then(res => res.json()).then(data => {
        console.log(data);
        setName(data.equipmentLogs[0].equipment.name);
        setMetric(data.equipmentLogs[0].measurement);

        setStats({
          start: data.equipmentLogs[0].dateStart,
          end: data.equipmentLogs[0].dateEnd,
          amount: data.equipmentLogs[0].currentAmount
        });
      }).catch(err => console.log(err));
    }
  }, [ambulanceId]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /*
    (ambulanceId === undefined ? createEquipment({
      name: name
    }) : updateEquipment(parseInt(ambulanceId), {
      name: name
    })).then(res => navigate("../ambulances")).catch(err => console.log(err));*/
    navigate("../ambulances");
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">{`${ambulanceId === undefined ? "Dodawanie" : "Edycja"} wyposażenia`}</h1>
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
          <Button className="my-3 w-25" type="submit">{ambulanceId === undefined ? "Dodaj wyposażenie" : "Zapisz zmiany"}</Button>
        </Row>
        {ambulanceId === undefined ? "" : (
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
