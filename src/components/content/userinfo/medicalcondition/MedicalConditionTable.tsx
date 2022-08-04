import Table from "../../../fragments/util/Table";
import { useNavigate, Link } from "react-router-dom"
import Button from "../../../fragments/util/Button"

const MedicalConditionTable = () => {
  const navigate = useNavigate();

  const cols = [
    { name: "#", property: (x: any) => <Link to={`disease/details/${x.id}`}>{x.id}</Link> },
    { name: "Nazwa", property: "name" }
  ];

  const diseases = [
    { id: 1, name: "abc", description: "aaaaa" },
    { id: 2, name: "abc", description: "bbbbb" },
    { id: 3, name: "abc", description: "ccccc" },
  ];

  return (
    <div>
      <h3>Choroby</h3>
      <Table columns={cols} data={diseases} />
      <Button onClick={e => navigate("medicalcondition/add")}>Dodaj</Button>
    </div>
  )
}

export default MedicalConditionTable;
