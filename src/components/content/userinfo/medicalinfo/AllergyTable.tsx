import { TableViewParams } from "../../sharedViewsParams";
import { AllergyResponse } from "../../../../api/allergyCalls";
import Link from "../../../fragments/navigation/Link";
import Table from "../../../fragments/util/Table";
import NavButton from '../../../fragments/navigation/NavButton';

const AllergyTable = (props: Readonly<TableViewParams<AllergyResponse>>) => {
  const cols = [
    { name: "#", property: (x: Readonly<AllergyResponse>) => <Link to={`allergy/${x.allergyId}`}>{x.allergyId}</Link>, filterBy: "allergyId", sortBy: "allergyId" },
    { name: "Rodzaj alergii", property: "allergyType", filterBy: "allergyType", sortBy: "allergyType" },
    { name: "Nazwa alergii", property: "allergyName", filterBy: "allergyName", sortBy: "allergyName" },
    { name: "Dodatkowe informacje", property: "other", filterBy: "other", sortBy: "other" }
  ];

  return (
    <div className="mb-3">
      <h3>Alergie</h3>
      <Table columns={cols} data={props.data} isLoading={props.isLoading} />
      <NavButton to="allergy">Dodaj</NavButton>
    </div>
  )
}

export default AllergyTable;
