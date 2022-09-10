import { Container } from "react-bootstrap";
import AllergyForm from "./AllergyForm";

const AddAllergy = () => {
  return (
    <Container>
      <h1 className="my-3">Dodaj alergię</h1>
      <AllergyForm />
    </Container>
  );
};

export default AddAllergy;
