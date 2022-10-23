import { TableViewParams } from "../../sharedViewsParams";
import { DiseaseResponse } from "../../../../api/diseaseCalls";
import Table from "../../../fragments/util/Table";
import Link from "../../../fragments/navigation/Link";
import NavButton from "../../../fragments/navigation/NavButton";

const MedicalConditionTable = (props: Readonly<TableViewParams<DiseaseResponse>>) => {
  const cols = [
    { name: "#", property: (x: Readonly<DiseaseResponse>) => <Link to={`disease/${x.diseaseId}`}>{x.diseaseId}</Link>, filterBy: "diseaseId", sortBy: "diseaseId" },
    { name: "Nazwa", property: "diseaseName", filterBy: "diseaseName", sortBy: "diseaseName" },
    { name: "Opis", property: "description", filterBy: "description", sortBy: "description" },
    { name: "Dzielone z opaski?", property: (x: Readonly<DiseaseResponse>) => x ? "Tak" : "Nie" }
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
