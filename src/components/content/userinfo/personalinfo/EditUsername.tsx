import { useState } from "react"
import { Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Button from "../../../fragments/Button"
import FormTextArea from "../../../fragments/FormTextArea"

const EditUsername = () => {
  const [userName, setUsername] = useState("");
  const navigate = useNavigate();

  
  return (
    <Container>
    <h1 className="my-5">Nazwa użytkownika</h1>
    <Form >
      <FormTextArea className="mb-3" label="Nazwa użytkownika" rows={1} value={userName} onChange={e => setUsername(e.target.value)} />
      <Button className="m-2" type="submit" text="Zapisz" />
      <Button text="Wróć" onClick={() => navigate("/userdata")} />
    </Form>
    </Container>
  )
}

export default EditUsername