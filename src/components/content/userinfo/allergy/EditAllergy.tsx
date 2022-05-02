import { Container } from "react-bootstrap";
import AllergyForm from "./AllergyForm";

const EditAllergy = () => {
  const onSubmit = (all: number, src: string, info: string) => {

  };

  return (
    <Container>
      <h1 className="my-4">Edytuj alergię</h1>
      <AllergyForm buttonLabel="Potwierdź" onSubmit={onSubmit} />
    </Container>
  );
};

export default EditAllergy;
