import { MedicalInfo } from "../../../../helpers/apiTypes";
import Link from "../../../fragments/navigation/Link";
import Table from "../../../fragments/util/Table";
import NavButton from '../../../fragments/navigation/NavButton';

interface AllergyTableParams {
  data: Record<string, any>[],
  loading: boolean
}

const AllergyTable = (props: Readonly<AllergyTableParams>) => {
  const cols = [
    { name: "#", property: (x: MedicalInfo) => <Link to={`allergy/${x.id}`}>{x.id}</Link>, filterBy: "id", sortBy: "id" },
    { name: "Rodzaj alergii", property: "type", filterBy: "type", sortBy: "type" },
    { name: "Na co", property: "to", filterBy: "to", sortBy: "to" },
    { name: "Dodatkowe informacje", property: "extra", filterBy: "extra", sortBy: "extra" }
  ];

  return (
    <div className="mb-3">
      <h3>Alergie</h3>
      <Table columns={cols} data={props.data} isLoading={props.loading} />
      <NavButton to="allergy">Dodaj</NavButton>
    </div>
  )
}

export default AllergyTable;
