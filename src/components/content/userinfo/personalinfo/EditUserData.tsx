import { Container } from "react-bootstrap";
import UserDataForm from "./UserDataForm";

const EditUserData = () => {
  return (
    <Container className="my-3">
      <h1 className="mb-3">Ustawienia</h1>
      <UserDataForm />
    </Container>
  );
};

export default EditUserData;
