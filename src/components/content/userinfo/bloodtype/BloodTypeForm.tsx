import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from '../../../fragments/Button'

interface formProps {
  buttonLabel: string;
  link: string,
  disabled: boolean
}

const BloodTypeForm = ({buttonLabel, link, disabled}:formProps) => {
  return (
    <Form>
        <div className="mb-3">
          <h3>Grupa krwi</h3>
          <div>
            <Form.Label className="p-3">Grupa krwi:</Form.Label>
            {["A", "B", "AB", "O"].map((type) => (
              <Form.Check disabled={disabled} inline type="radio" id={type} label={type} name="bloodType" />
            ))}
          </div>
          <div>
            <Form.Label className="p-3">Grupa Rh:</Form.Label>
            {["Rh+", "Rh-"].map((type) => (
              <Form.Check disabled={disabled} inline type="radio" id={type} label={type} name="rhType" />
            ))}
          </div>
          <Link to={link}>
            <Button text={buttonLabel} />
          </Link>
        </div>
      </Form>
  )
}

export default BloodTypeForm