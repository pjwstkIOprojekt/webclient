import { Container } from 'react-bootstrap'
import MedicalConditionForm from './MedicalConditionForm'

const EditMedicalCondition = () => {
  return (
    <Container>
      <h1 className="my-4">Edytuj chorobę</h1>
      <MedicalConditionForm buttonLabel="Dodaj"/>
    </Container>
  )
}

export default EditMedicalCondition