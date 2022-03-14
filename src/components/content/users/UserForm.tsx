import { useState, useEffect } from "react";
import { getUserById, addUser } from "../../../apiCalls/usersCalls";
import { useParams, Navigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";

// Displays user form
export default function UserForm(props: { isNew: boolean }) {
  const [user, setUser] = useState({
    id: undefined,
    name: "",
    password: "",
    salt: "",
    email: "",
    birthDate: null,
    phone: "",
    bandCode: "",
    medicalInfo: null
  });

  const [loaded, setLoaded] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { userId } = useParams();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    const data = { ...user };
    // item[name] = value; TS doesn't like it

    // This solution is dumb but TS wouldn't compile anything else... or I'm too dumb
    if (id == "name") {
      user.name = value;
    } else {
      console.log(event.target);
    }

    setUser(data);
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    addUser(user).then(res => res.json()).then(data => {
      setRedirect(true);
    }, err => console.log(err));
  };

  useEffect(() => {
    if (loaded) {
      return;
    }

    if (!props.isNew) {
      const tmp = typeof userId === "string" ? userId : "-1";

      getUserById(parseInt(tmp)).then(res => res.json()).then(data => {
        setUser(data);
        setLoaded(true);
      }, err => console.log(err));
    }
    else {
      setLoaded(true);
    }
  });

  if (redirect) {
    return <Navigate replace to={{ pathname: "/users" }} />;
  }

  return (
    <Container className="mt-5">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="id">
          <Form.Control type="hidden" value={user.id} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Tytuł</Form.Label>
          <Form.Control
            type="text"
            value={user.name}
            onChange={onChange}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Wyślij
        </Button>
      </Form>
    </Container>
  );
}