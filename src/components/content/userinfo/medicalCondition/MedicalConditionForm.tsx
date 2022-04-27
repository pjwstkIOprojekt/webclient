import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../../fragments/Button";
import UploadButton from "../../../fragments/UploadButton";

interface formProps {
  buttonLabel: string;
}

const MedicalConditionForm = ({ buttonLabel }: formProps) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nazwa choroby</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Jak udzielić pierwszej pomocy?</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Skan diagnozy lekarskiej</Form.Label>
        <UploadButton/>
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

export default MedicalConditionForm;
