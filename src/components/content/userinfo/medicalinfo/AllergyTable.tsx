import { TableViewParams } from "../../sharedViewsParams";
import { AllergyResponse } from "../../../../api/allergyCalls";
import { deleteAllergy } from "../../../../api/allergyCalls";
import Link from "../../../fragments/navigation/Link";
import Enum from "../../../fragments/util/Enum";
import { AllergyType } from "../../../../api/enumCalls";
import Button from "../../../fragments/util/Button";
import Table from "../../../fragments/util/Table";
import NavButton from '../../../fragments/navigation/NavButton';
import { useTranslation } from "react-i18next";

const AllergyTable = (props: Readonly<TableViewParams<AllergyResponse>>) => {
  const { t } = useTranslation();
  const remove = (x: Readonly<AllergyResponse>) => {
    if (!window.confirm(t('Allergy.Remove'))) {
      return;
    }

    if (props.onRemove) {
      props.onRemove(x);
    }

    deleteAllergy(x.allergyId);
  };

  const cols = [
    { name: "#", property: (x: Readonly<AllergyResponse>) => <Link to={`allergy/${x.allergyId}`}>{x.allergyId}</Link>, filterBy: "allergyId", sortBy: "allergyId" },
    { name: t('Allergy.Type'), property: (x: Readonly<AllergyResponse>) => <Enum enum={AllergyType} value={x.allergyType} />, filterBy: "allergyType", sortBy: "allergyType" },
    { name: t('Allergy.Name'), property: "allergyName", filterBy: "allergyName", sortBy: "allergyName" },
    { name: t('Allergy.Other'), property: "other", filterBy: "other", sortBy: "other" },
    { name: t('Remove'), property: (x: Readonly<AllergyResponse>) => <Button onClick={e => remove(x)}>X</Button> }
  ];

  return (
    <div className="mb-3">
      <h3>{t('Allergy.Allergies')}</h3>
      <Table columns={cols} data={props.data} isLoading={props.isLoading} />
      <NavButton to="allergy">{t('Add')}</NavButton>
    </div>
  )
}

export default AllergyTable;
