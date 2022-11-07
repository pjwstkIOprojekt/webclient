import { TableViewParams } from "../../sharedViewsParams";
import { DiseaseResponse } from "../../../../api/diseaseCalls";
import { deleteDisease } from "../../../../api/diseaseCalls";
import Link from "../../../fragments/navigation/Link";
import Button from "../../../fragments/util/Button";
import Table from "../../../fragments/util/Table";
import NavButton from "../../../fragments/navigation/NavButton";
import { useTranslation } from "react-i18next";

const MedicalConditionTable = (props: Readonly<TableViewParams<DiseaseResponse>>) => {
  const { t } = useTranslation("jezyk");
  const remove = (x: Readonly<DiseaseResponse>) => {
    if (!window.confirm(t('RemoveDisease'))) {
      return;
    }

    if (props.onRemove) {
      props.onRemove(x);
    }

    deleteDisease(x.diseaseId);
  };

  const cols = [
    { name: "#", property: (x: Readonly<DiseaseResponse>) => <Link to={`disease/${x.diseaseId}`}>{x.diseaseId}</Link>, filterBy: "diseaseId", sortBy: "diseaseId" },
    { name: t('Name'), property: "diseaseName", filterBy: "diseaseName", sortBy: "diseaseName" },
    { name: t('Reports.Description'), property: "description", filterBy: "description", sortBy: "description" },
    { name: t('Share'), property: (x: Readonly<DiseaseResponse>) => x.shareWithBand ? t('Yes') : t('No') },
    { name: t('Remove'), property: (x: Readonly<DiseaseResponse>) => <Button onClick={e => remove(x)}>X</Button> }
  ];

  return (
    <div>
      <h3>{t('Diseases')}</h3>
      <Table columns={cols} data={props.data} isLoading={props.isLoading} />
      <NavButton to="disease">{t('Add')}</NavButton>
    </div>
  );
};

export default MedicalConditionTable;
