import { Container } from "react-bootstrap";
import AllergyForm from "./AllergyForm";

const EditAllergy = () => {
  return (
    <Container>
      <h1 className="my-4">Edytuj alergię</h1>
      <AllergyForm />
    </Container>
  );
};

export default EditAllergy;
