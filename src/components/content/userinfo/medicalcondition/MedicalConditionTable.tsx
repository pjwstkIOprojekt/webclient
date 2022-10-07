import Table from "../../../fragments/util/Table";
import Link from "../../../fragments/navigation/Link";
import NavButton from "../../../fragments/navigation/NavButton";

interface MedicalConditionTableParams {
  data: Record<string, any>[],
  loading: boolean
}

const MedicalConditionTable = (props: Readonly<MedicalConditionTableParams>) => {
  const cols = [
    { name: "#", property: (x: any) => <Link to={`disease/${x.id}`}>{x.id}</Link>, filterBy: "id", sortBy: "id" },
    { name: "Nazwa", property: "chronicDiseases", filterBy: "chronicDiseases", sortBy: "chronicDiseases" }
  ];

  return (
    <div>
      <h3>Choroby</h3>
      <Table columns={cols} data={props.data} isLoading={props.loading} />
      <NavButton to="disease">Dodaj</NavButton>
    </div>
  );
};

export default MedicalConditionTable;
