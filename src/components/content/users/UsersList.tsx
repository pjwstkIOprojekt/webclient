import { useState, useEffect } from "react";
import { getUsers, User } from "../../../apiCalls/usersCalls";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

// Displays users list
export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      return;
    }

    getUsers().then(res => res.json()).then(res => {
      setLoaded(true);
      setUsers(res);
    }, err => console.log(err));
  });

  const content = users.map((user: Readonly<User>) => (
    <ListGroup.Item key={user.id}>
      <b>{user.name}</b>
      <Link className="float-end" to={`/editUser/${user.id}`}><Button variant="secondary">Edytuj</Button></Link>
      <Link className="float-end" to={`/deleteUser/${user.id}`}><Button variant="danger">Usuń</Button></Link>
    </ListGroup.Item>
  ));

  return (
    <>
      <ListGroup>
        {content}
      </ListGroup>
    </>
  );
}