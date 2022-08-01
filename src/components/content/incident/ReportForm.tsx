import { Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../../fragments/util/Button";
import FormSelect from "../../fragments/forms/FormSelect";

export interface IncidentFormParams {
  disabled?: boolean;
  link: string;
}

const ReportForm = (props: Readonly<IncidentFormParams>) => {
  const navigate = useNavigate();

  return (
    <Form>
      <Row>
        <Col>
          <FormSelect className="mb-3" label="Szpital" options={["wybierz"]}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormSelect className="mb-3" label="Policja" options={["wybierz", "tak", "nie"]} />
        </Col>
        <Col>
          <FormSelect className="mb-3" label="Straż pożarna" options={["wybierz", "tak", "nie"]} />
        </Col>
      </Row>
      <Button
        type={props.disabled ? "button" : "submit"}
        onClick={() => (props.disabled ? null : navigate(props.link))}
      >
        Potwierdź
      </Button>
    </Form>
  );
};

export default ReportForm;
