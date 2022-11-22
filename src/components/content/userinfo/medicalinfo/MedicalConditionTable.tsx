import { TableViewParams } from "../../sharedViewsParams";
import { DiseaseResponse } from "../../../../api/diseaseCalls";
import { useTranslation } from "react-i18next";
import { usePopup } from "../../../../hooks/usePopup";
import { deleteDisease } from "../../../../api/diseaseCalls";
import Link from "../../../fragments/navigation/Link";
import Button from "../../../fragments/util/Button";
import ConfirmPopup from "../../../fragments/popups/ConfirmPopup";
import Table from "../../../fragments/util/Table";
import NavButton from "../../../fragments/navigation/NavButton";

const MedicalConditionTable = (props: Readonly<TableViewParams<DiseaseResponse>>) => {
  const { t } = useTranslation();
  const popup = usePopup();

  const remove = (x: Readonly<DiseaseResponse>) => {
    if (props.onRemove) {
      props.onRemove(x);
    }

    deleteDisease(x.diseaseId);
  };

  const cols = [
    { name: "#", property: (x: Readonly<DiseaseResponse>) => <Link to={`disease/${x.diseaseId}`}>{x.diseaseId}</Link>, filterBy: "diseaseId", sortBy: "diseaseId" },
    { name: t("Disease.Name"), property: "diseaseName", filterBy: "diseaseName", sortBy: "diseaseName" },
    { name: t("Disease.Description"), property: "description", filterBy: "description", sortBy: "description" },
    { name: t("Disease.ShareWithBand"), property: (x: Readonly<DiseaseResponse>) => x.shareWithBand ? t("Common.Yes") : t("Common.No") },
    { name: t("Common.Remove"), property: (x: Readonly<DiseaseResponse>) => <Button onClick={e => popup(<ConfirmPopup text="Disease.ConfirmRemove" onConfirm={() => remove(x)} />)}>X</Button> }
  ];

  return (
    <div>
      <h3>{t("Disease.Diseases")}</h3>
      <Table columns={cols} data={props.data} isLoading={props.isLoading} />
      <NavButton to="disease">{t("Common.Add")}</NavButton>
    </div>
  );
};

export default MedicalConditionTable;
