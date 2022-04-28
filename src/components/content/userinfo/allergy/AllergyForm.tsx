import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../../fragments/Button";

interface formProps {
  buttonLabel: string;
}

const AllergyForm = ({buttonLabel}:formProps) => {

  return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Rodzaj alergii</Form.Label>
          <Form.Select>
            <option>-- Wybierz rodzaj alergii --</option>
            <option value="1">Wziewna</option>
            <option value="2">Kontaktowa</option>
            <option value="3">Pokarmowa</option>
            <option value="4">Na jad</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Na co</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dodatkowe informacje</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Link to="/userinfo">
          <Button className="m-2" type="submit" text={buttonLabel} />
        </Link>
        <Link to="/userinfo">
          <Button text="Wróć" />
        </Link>
      </Form>
  );
};

export default AllergyForm;
