import { updateAllergies } from "../../../../api/medicalInfoCalls";
import { Container } from "react-bootstrap";
import AllergyForm from "./AllergyForm";

const EditAllergy = () => {
  const onSubmit = (all: number, src: string, info: string) => {
    updateAllergies(1, src + " - " + info).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
  };

  return (
    <Container>
      <h1 className="my-4">Edytuj alergię</h1>
      <AllergyForm buttonLabel="Potwierdź" onSubmit={onSubmit} />
    </Container>
  );
};

export default EditAllergy;
