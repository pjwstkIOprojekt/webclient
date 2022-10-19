import { Container } from "react-bootstrap";
import AllergyTable from "../allergy/AllergyTable";
import MedicalConditionTable from "../medicalcondition/MedicalConditionTable";

const EditBloodTypeView = () => {
  return (
    <Container className="my-3">
      <h1 className="mb-3">Dane medyczne</h1>
      <AllergyTable data={[]} loading />
      <MedicalConditionTable data={[]} loading />
    </Container>
  );
};

export default EditBloodTypeView;
