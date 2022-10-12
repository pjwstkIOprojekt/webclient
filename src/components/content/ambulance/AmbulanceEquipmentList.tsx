import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "../../fragments/util/Table";
import Link from "../../fragments/navigation/Link";
import { Container } from "react-bootstrap";

const AmbulanceEquipmentList = () => {
  const [equipments] = useState([]);
  const [isLoading] = useState(true);
  const { ambulanceId } = useParams();

  useEffect(() => {
    // TODO: Implement
  }, [ambulanceId]);

  const cols = [
    { name: "#", property: (x: Record<string, any>) => <Link to={`../equipment/${x.id}`}>{x.id}</Link>, sortBy: "equipmentId", filterBy: "equipmentId" },
    { name: "Wyposażenie", property: "name", sortBy: "name", filterBy: "name" },
    { name: "Minimalna zalecana ilość", property: "minAmount", sortBy: "minAmount", filterBy: "minAmount" },
    { name: "Ilość", property: "amount", sortBy: "amount", filterBy: "amount" },
    { name: "Zużycie", property: "plates", sortBy: "plates", filterBy: "plates" },
    { name: "Jednostka miary", property: "plates", sortBy: "plates", filterBy: "plates" }
  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Wyposażenie karetki</h3>
      <Table columns={cols} data={equipments} isLoading={isLoading} />
    </Container>
  );
};

export default AmbulanceEquipmentList;
