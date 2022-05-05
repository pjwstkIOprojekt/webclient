import { Container } from "react-bootstrap";
import BloodTypeForm from "./bloodtype/BloodTypeForm";
import AllergyTable from "./allergy/AllergyTable";
import MedicalConditionTable from "./medicalCondition/MedicalConditionTable";

const MedicalData = () => {
  return (
    <Container>
      <h1 className="my-4">Twoje dane</h1>
      <BloodTypeForm buttonLabel="Edytuj" link="editbloodtype" disabled={true} />
      <AllergyTable />
      <MedicalConditionTable />
    </Container>
  );
};

export default MedicalData;
