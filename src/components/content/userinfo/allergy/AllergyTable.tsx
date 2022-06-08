import { useNavigate, Link } from "react-router-dom";
import Table from "../../../fragments/util/Table";
import Button from '../../../fragments/util/Button';

const AllergyTable = () => {
  const navigate = useNavigate();

  const cols = [
    { name: "#", property: (x: any) => <Link to={`allergy/details/${x.id}`}>{x.id}</Link> },
    { name: "Rodzaj alergii", property: "type" },
    { name: "Na co", property: "to" },
    { name: "Dodatkowe informacje", property: "extra" }
  ];

  const allergies = [
    { id: 1, type: "Wziewna", to: "aaa", extra: "bbb" },
    { id: 2, type: "Kontaktowa", to: "aaa", extra: "bbb" },
    { id: 3, type: "Pokarmowa", to: "aaa", extra: "bbb" },
  ];

  return (
    <div className="mb-3">
      <h3>Alergie</h3>
      <Table columns={cols} data={allergies} />
      <Button text="Dodaj" onClick={e => navigate("allergy/add")} />
    </div>
  )
}

export default AllergyTable;
