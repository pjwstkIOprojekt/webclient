import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../../../fragments/Button";
import FormControl from "../../../fragments/FormControl";

const EditEmail = () => {
  const [birthday, setBirthday] = useState("");
  const navigate = useNavigate();

  return (
    <Container>
      <h1 className="my-5">Data urodzenia</h1>
      <Form>
        <FormControl
          id="birthDate"
          required
          onChange={(e) => setBirthday(e.target.value)}
          value={birthday}
          className="mb-3"
          label="Data urodzenia"
          type="date"
        />
        <Button className="m-2" type="submit" text="Zapisz" />
        <Button text="Wróć" onClick={() => navigate("/userdata")} />
      </Form>
    </Container>
  );
};

export default EditEmail;
