import { TableViewParams } from "../../sharedViewsParams";
import { DiseaseResponse } from "../../../../api/diseaseCalls";
import { deleteDisease } from "../../../../api/diseaseCalls";
import Link from "../../../fragments/navigation/Link";
import Button from "../../../fragments/util/Button";
import Table from "../../../fragments/util/Table";
import NavButton from "../../../fragments/navigation/NavButton";

const MedicalConditionTable = (props: Readonly<TableViewParams<DiseaseResponse>>) => {
  const remove = (x: Readonly<DiseaseResponse>) => {
    if (!window.confirm("Czy na pewno chcesz usunąć tą chorobę?")) {
      return;
    }

    if (props.onRemove) {
      props.onRemove(x);
    }

    deleteDisease(x.diseaseId);
  };

  const cols = [
    { name: "#", property: (x: Readonly<DiseaseResponse>) => <Link to={`disease/${x.diseaseId}`}>{x.diseaseId}</Link>, filterBy: "diseaseId", sortBy: "diseaseId" },
    { name: "Nazwa", property: "diseaseName", filterBy: "diseaseName", sortBy: "diseaseName" },
    { name: "Opis", property: "description", filterBy: "description", sortBy: "description" },
    { name: "Dzielone z opaski?", property: (x: Readonly<DiseaseResponse>) => x.shareWithBand ? "Tak" : "Nie" },
    { name: "Usuń", property: (x: Readonly<DiseaseResponse>) => <Button onClick={e => remove(x)}>X</Button> }
  ];

  return (
    <div>
      <h3>Choroby</h3>
      <Table columns={cols} data={props.data} isLoading={props.isLoading} />
      <NavButton to="disease">Dodaj</NavButton>
    </div>
  );
};

export default MedicalConditionTable;
