import { Container } from "react-bootstrap";
import AllergyForm from "./AllergyForm";

const AddAllergy = () => {
  const onSubmit = (all: number, src: string, info: string) => {
    
  };

  return (
    <Container>
      <h1 className="my-4">Dodaj alergię</h1>
      <AllergyForm buttonLabel="Dodaj" onSubmit={onSubmit} />
    </Container>
  );
};

export default AddAllergy;
