import { useState } from "react";
import { loginUser, JwtResponse } from "../../../api/authCalls";
import { useLogin } from "../../../hooks/useAuth";
import { Container, Row, Alert } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import Email from "../../fragments/forms/api/Email";
import Password from "../../fragments/forms/api/Password";
import Button from "../../fragments/util/Button";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useLogin();
  const { t } = useTranslation("jezyk");

  const handleSubmit = () => {
    let status = -1;
    
    loginUser({
      email: email,
      password: password,
    }).then(res => {
      status = res.status;
      return res.json();
    }).then((data: JwtResponse) => {
      if (status === 200) {
        if (data.token && data.roles && data.email) {
          login(data.token, data.roles, data.email);
        } else {
          setError(t('Error.UnknownError'));
        }
      } else {
        setError(t('Error.UnknownError'));
      }
    }
    ).catch(err => {
      console.error(err);
      setError(t('Error.Incorrect'));
    });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">{t('Login.Login')}</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Email id="email" required onChange={e => setEmail(e.target.value)} value={email} className="mb-3 w-50" label="Email" />
        </Row>
        <Row className="justify-content-center">
          <Password id="password" required onChange={e => setPassword(e.target.value)} value={password} className="mb-3 w-50" label={t('Login.Password')} />
        </Row>
        <Row className="justify-content-center">
          <Button className="my-3 w-25" type="submit">{t('Login.Sign in')}</Button>
        </Row>
        {error ? (
          <Row className="justify-content-center mt-5">
            <Alert variant="danger" className="w-50">
              <Alert.Heading>{t('Error.Error')}</Alert.Heading>
              <p>{error}</p>
            </Alert>
          </Row>
        ) : ""}
      </Form>
    </Container>
  );
};

export default Login;
