import { useState } from "react"
import { Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Button from "../../../fragments/Button"
import FormTextArea from "../../../fragments/FormTextArea"

const EditEmail = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  
  return (
    <Container>
    <h1 className="my-5">Numer telefonu</h1>
    <Form >
      <FormTextArea className="mb-3" label="Numer telefonu" rows={1} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
      <Button className="m-2" type="submit" text="Zapisz" />
      <Button text="Wróć" onClick={() => navigate("/userdata")} />
    </Form>
    </Container>
  )
}

export default EditEmail