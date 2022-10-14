import { Container } from 'react-bootstrap'
import MedicalConditionForm from "../medicalcondition/MedicalConditionForm";


const AddMedicalCondition = () => {
  const onSubmit = (ill: string, inst: string, file: string) => {
    //updateChronicDisease(1, ill + " - " + inst).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
  };

  return (
    <Container>
      <h1 className="my-4">Dodaj chorobę</h1>
      <MedicalConditionForm />
    </Container>
  )
}

export default AddMedicalCondition