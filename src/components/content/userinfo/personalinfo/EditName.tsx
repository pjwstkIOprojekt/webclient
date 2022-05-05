import { useState } from "react"
import { Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Button from "../../../fragments/Button"
import FormTextArea from "../../../fragments/FormTextArea"

export const EditName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  
  return (
    <Container>
    <h1 className="my-5">Imię nazwisko</h1>
    <Form >
      <FormTextArea className="mb-3" label="Imię" rows={1} value={firstName} onChange={e => setFirstName(e.target.value)} />
      <FormTextArea className="mb-3" label="Nazwisko" rows={1} value={lastName} onChange={e => setLastName(e.target.value)} />
      <Button className="m-2" type="submit" text="Zapisz" />
      <Button text="Wróć" onClick={() => navigate("/userdata")} />
    </Form>
    </Container>
  )
}
