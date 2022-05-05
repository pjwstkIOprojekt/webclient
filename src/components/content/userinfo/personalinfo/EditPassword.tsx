import { useState } from "react"
import { Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Button from "../../../fragments/Button"
import FormTextArea from "../../../fragments/FormTextArea"

const EditPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  return (
    <Container>
    <h1 className="my-5">Hasło</h1>
    <Form >
      <FormTextArea className="mb-3" label="Hasło" rows={1} value={password} onChange={e => setPassword(e.target.value)} />
      <FormTextArea className="mb-3" label="Powtórz hasło" rows={1} value={password} onChange={e => setPassword(e.target.value)} />
      <Button className="m-2" type="submit" text="Zapisz" />
      <Button text="Wróć" onClick={() => navigate("/userdata")} />
    </Form>
    </Container>
  )
}

export default EditPassword