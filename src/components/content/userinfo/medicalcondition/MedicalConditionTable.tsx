import { MedicalInfo } from "../../../../helpers/apiTypes";
import Table from "../../../fragments/util/Table";
import Link from "../../../fragments/navigation/Link";
import NavButton from "../../../fragments/navigation/NavButton";

interface MedicalConditionTableParams {
  data: Record<string, any>[]
}

const MedicalConditionTable = (props: Readonly<MedicalConditionTableParams>) => {
  const cols = [
    { name: "#", property: (x: MedicalInfo) => <Link to={`disease/${x.id}`}>{x.id}</Link>, filterBy: "id", sortBy: "id" },
    { name: "Nazwa", property: "chronicDiseases", filterBy: "chronicDiseases", sortBy: "chronicDiseases" }
  ];

  return (
    <div>
      <h3>Choroby</h3>
      <Table columns={cols} data={props.data} />
      <NavButton to="disease">Dodaj</NavButton>
    </div>
  );
};

export default MedicalConditionTable;
