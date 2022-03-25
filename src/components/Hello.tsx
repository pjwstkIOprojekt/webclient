import { useParams } from "react-router-dom";
import { Container, Alert, Badge, Button, Dropdown, ProgressBar, Spinner } from "react-bootstrap";

export default function Hello() {
  const { style } = useParams();

  return (
    <Container className="mt-5">
      <Alert variant={style}>
        <Alert.Heading>Komunikat</Alert.Heading>
        To jest przykładowy komunikat!
        <br />
        <Alert.Link>Przykładowy link</Alert.Link>
      </Alert>
      <Badge bg={style}>BRUH</Badge>
      <Badge pill bg={style}>MOMENT</Badge>
      <br />
      <Button variant={style}>
        Kliknij mnie!
      </Button>
      <br />
      <Spinner variant={style} animation="border" />
      <Spinner variant={style} animation="grow" />
      <ProgressBar variant={style} now={60} label="Stan" />
      <ProgressBar striped variant={style} now={20} />
      <ProgressBar animated variant={style} now={45} />
      <br />
      <Dropdown>
        <Dropdown.Toggle variant={style}>
          Otwórz listę
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Wybierz mnie!</Dropdown.Item>
          <Dropdown.Item>Mnie mnie!</Dropdown.Item>
          <Dropdown.Item>Nie! Wybierz mnie!</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button variant={`outline-${style}`}>Obwódka</Button>
    </Container>
  );
}
