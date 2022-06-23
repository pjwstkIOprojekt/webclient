import { Container } from "react-bootstrap";
import BloodTypeForm from "./bloodtype/BloodTypeForm";
import AllergyTable from "./allergy/AllergyTable";
import MedicalConditionTable from "./medicalCondition/MedicalConditionTable";

const MedicalData = () => {
  return (
    <Container className="my-3">
      <h1 className="mb-3">Dane medyczne</h1>
      <BloodTypeForm buttonLabel="Edytuj" link="editbloodtype" disabled={true} />
      <AllergyTable />
      <MedicalConditionTable />
    </Container>
  );
};

export default MedicalData;
