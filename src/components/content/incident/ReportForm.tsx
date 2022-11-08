import { useNavigate } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import FormSelect from "../../fragments/forms/FormSelect";
import Button from "../../fragments/util/Button";
import { useTranslation } from "react-i18next";

interface IncidentFormParams {
  disabled?: boolean;
  link: string;
}

const ReportForm = (props: Readonly<IncidentFormParams>) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Form>
      <Row>
        <Col>
          <FormSelect className="mb-3" label={t('Reports.Hospital')} options={["wybierz"]}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormSelect className="mb-3" label={t('Reports.Police')}  options={["wybierz", "tak", "nie"]} />
        </Col>
        <Col>
          <FormSelect className="mb-3" label={t('Reports.FireDepartment')}  options={["wybierz", "tak", "nie"]} />
        </Col>
      </Row>
      <Button type={props.disabled ? "button" : "submit"} onClick={() => (props.disabled ? null : navigate(props.link))}>{t('Reports.Confirm')}</Button>
    </Form>
  );
};

export default ReportForm;
