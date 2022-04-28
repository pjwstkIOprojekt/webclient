import { Container } from "react-bootstrap";
import AllergyForm from "./AllergyForm";


const AddAllergy = () => {
  return (
    <Container>
      <h1 className="my-4">Dodaj alergię</h1>
      <AllergyForm buttonLabel="Dodaj"/>
    </Container>
  );
};

export default AddAllergy;
