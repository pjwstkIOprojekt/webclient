import { Container } from 'react-bootstrap'
import MedicalConditionForm from './MedicalConditionForm'

const AddMedicalCondition = () => {
  const onSubmit = (ill: string, inst: string, file: string) => {

  };

  return (
    <Container>
      <h1 className="my-4">Dodaj chorobę</h1>
      <MedicalConditionForm buttonLabel="Dodaj" onSubmit={onSubmit} />
    </Container>
  )
}

export default AddMedicalCondition