import { useState } from "react";
import { useLogin } from "../../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { loginUser, JwtResponse } from "../../../api/authCalls";
import { unknownError, errorHeader } from "../sharedStrings";
import { Container, Row, Alert } from "react-bootstrap";
import Form from "../../fragments/forms/Form";
import Email from "../../fragments/forms/api/Email";
import Password from "../../fragments/forms/api/Password";
import Button from "../../fragments/util/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useLogin();
  const { t } = useTranslation();

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
          setError(unknownError);
        }
      } else {
        setError(unknownError);
      }
    }
    ).catch(err => {
      console.error(err);
      setError("Error.IncorrectLogin");
    });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">{t("Login.Login")}</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Email id="email" required onChange={e => setEmail(e.target.value)} value={email} className="mb-3 w-50" label={t("Person.Email")}/>
        </Row>
        <Row className="justify-content-center">
          <Password id="password" required onChange={e => setPassword(e.target.value)} value={password} className="mb-3 w-50" label={t("Person.Password")} />
        </Row>
        <Row className="justify-content-center">
          <Button className="my-3 w-25" type="submit">{t("Login.SignIn")}</Button>
        </Row>
        {error ? (
          <Row className="justify-content-center mt-5">
            <Alert variant="danger" className="w-50">
              <Alert.Heading>{t(errorHeader)}</Alert.Heading>
              <p>{t(error)}</p>
            </Alert>
          </Row>
        ) : ""}
      </Form>
    </Container>
  );
};

export default Login;
