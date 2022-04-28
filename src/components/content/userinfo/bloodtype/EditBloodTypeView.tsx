import { Container } from "react-bootstrap";
import BloodTypeForm from "./BloodTypeForm";
import AllergyTable from "../allergy/AllergyTable";
import MedicalConditionTable from "../medicalCondition/MedicalConditionTable";

const allergies = [
  { id: 1, type: "Wziewna", to: "aaa", extra: "bbb" },
  { id: 2, type: "Kontaktowa", to: "aaa", extra: "bbb" },
  { id: 3, type: "Pokarmowa", to: "aaa", extra: "bbb" },
];

const EditBloodTypeView = () => {
  return (
    <Container className="">
      <h1 className="my-4">Twoje dane</h1>
      <BloodTypeForm buttonLabel="Zapisz" link="/userinfo" disabled={false} />
      <AllergyTable />
      <MedicalConditionTable />
    </Container>
  );
};

export default EditBloodTypeView;
