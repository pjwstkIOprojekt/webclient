import { updateAllergies } from "../../../../apiCalls/medicalInfoCalls";
import { Container } from "react-bootstrap";
import AllergyForm from "./AllergyForm";

const AddAllergy = () => {
  const onSubmit = (all: number, src: string, info: string) => {
    updateAllergies(1, src + " - " + info).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
  };

  return (
    <Container>
      <h1 className="my-4">Dodaj alergię</h1>
      <AllergyForm buttonLabel="Dodaj" onSubmit={onSubmit} />
    </Container>
  );
};

export default AddAllergy;
