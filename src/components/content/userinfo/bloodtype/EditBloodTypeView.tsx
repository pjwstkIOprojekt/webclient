import { Container } from "react-bootstrap";
import BloodTypeForm from "./BloodTypeForm";
import AllergyTable from "../allergy/AllergyTable";
import MedicalConditionTable from "../medicalcondition/MedicalConditionTable";
import { useNavigate } from "react-router-dom";

const EditBloodTypeView = () => {

  return (
    <Container className="my-3">
      <h1 className="mb-3">Dane medyczne</h1>
      <BloodTypeForm buttonLabel="Zapisz" link="../medicaldata" disabled={false} />
      <AllergyTable />
      <MedicalConditionTable />
    </Container>
  );
};

export default EditBloodTypeView;
