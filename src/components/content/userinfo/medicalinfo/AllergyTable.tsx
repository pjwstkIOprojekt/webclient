import { TableViewParams } from "../../sharedViewsParams";
import { AllergyResponse } from "../../../../api/allergyCalls";
import { useTranslation } from "react-i18next";
import Link from "../../../fragments/navigation/Link";
import { AllergyType } from "../../../../api/enumCalls";
import Table from "../../../fragments/util/Table";
import NavButton from '../../../fragments/navigation/NavButton';

const AllergyTable = (props: Readonly<TableViewParams<AllergyResponse>>) => {
  const { t } = useTranslation();

  const cols = [
    { name: "#", property: (x: Readonly<AllergyResponse>) => <Link to={`allergy/${x.allergyId}`}>{x.allergyId}</Link>, filterBy: "allergyId", sortBy: "allergyId" },
    { name: "Rodzaj alergii", property: (x: Readonly<AllergyResponse>) => t(`${AllergyType.name}.${x.allergyType}`), filterBy: "allergyType", sortBy: "allergyType" },
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
