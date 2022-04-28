import React from 'react'
import { Container } from 'react-bootstrap'
import MedicalConditionForm from './MedicalConditionForm'

const AddMedicalCondition = () => {
  return (
    <Container>
      <h1 className="my-4">Dodaj chorobę</h1>
      <MedicalConditionForm buttonLabel="Dodaj"/>
    </Container>
  )
}

export default AddMedicalCondition