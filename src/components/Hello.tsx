import { useParams } from "react-router-dom";
import { Form, FormGroup, Row, Container, Alert, Badge, Button, Dropdown, ProgressBar, Spinner } from "react-bootstrap";

export default function Hello(props: { variant: boolean }) {
  const { style, style2, style3, style4, style5, style6 } = useParams();

  if (props.variant) {
    return (
      <Container className="mt-5">
        <Form>
          <FormGroup className="mb-3">
            <Form.Label>Imię</Form.Label>
            <Form.Control type="text" />
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Label>Nazwisko</Form.Label>
            <Form.Control type="text" />
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Label>Hasło</Form.Label>
            <Form.Control type="password" />
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Label>Data urodzenia</Form.Label>
            <Form.Control type="date" />
          </FormGroup>
          <Row className="justify-content-center">
            <Button className="mt-3 w-25" type="submit" variant={style2}>Zarejestruj się</Button>
          </Row>
        </Form>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Alert variant={style}>
        <Alert.Heading>Komunikat</Alert.Heading>
        To jest przykładowy komunikat!
        <br />
        <Alert.Link className={`alert-${style}`}>Przykładowy link</Alert.Link>
      </Alert>
      <Alert variant={style2}>
        <Alert.Heading>Komunikat</Alert.Heading>
        To jest przykładowy komunikat!
        <br />
        <Alert.Link className={`alert-${style2}`}>Przykładowy link</Alert.Link>
      </Alert>
      <Alert variant={style3}>
        <Alert.Heading>Komunikat</Alert.Heading>
        To jest przykładowy komunikat!
        <br />
        <Alert.Link className={`alert-${style3}`}>Przykładowy link</Alert.Link>
      </Alert>
      <Badge bg={style}>BRUH</Badge>
      <Badge pill bg={style}>MOMENT</Badge>
      <Badge bg={style2}>BRUH</Badge>
      <Badge pill bg={style2}>MOMENT</Badge>
      <Badge bg={style3}>BRUH</Badge>
      <Badge pill bg={style3}>MOMENT</Badge>
      <br />
      <Button variant={style}>Kliknij mnie!</Button>
      <Button variant={style2}>Kliknij mnie!</Button>
      <Button variant={style3}>Kliknij mnie!</Button>
      <br />
      <Spinner variant={style} animation="border" />
      <Spinner variant={style} animation="grow" />
      <Spinner variant={style2} animation="border" />
      <Spinner variant={style2} animation="grow" />
      <Spinner variant={style3} animation="border" />
      <Spinner variant={style3} animation="grow" />
      <ProgressBar variant={style} now={60} label="Stan" />
      <ProgressBar striped variant={style} now={20} />
      <ProgressBar animated variant={style} now={45} />
      <ProgressBar variant={style2} now={60} label="Stan" />
      <ProgressBar striped variant={style2} now={20} />
      <ProgressBar animated variant={style2} now={45} />
      <ProgressBar variant={style3} now={60} label="Stan" />
      <ProgressBar striped variant={style3} now={20} />
      <ProgressBar animated variant={style3} now={45} />
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
      <Button variant={`outline-${style2}`}>Obwódka</Button>
      <Button variant={`outline-${style3}`}>Obwódka</Button>
      <Alert variant={style4}>
        <Alert.Heading>Komunikat</Alert.Heading>
        To jest przykładowy komunikat!
        <br />
        <Alert.Link className={`alert-${style4}`}>Przykładowy link</Alert.Link>
      </Alert>
      <Alert variant={style5}>
        <Alert.Heading>Komunikat</Alert.Heading>
        To jest przykładowy komunikat!
        <br />
        <Alert.Link className={`alert-${style5}`}>Przykładowy link</Alert.Link>
      </Alert>
      <Alert variant={style6}>
        <Alert.Heading>Komunikat</Alert.Heading>
        To jest przykładowy komunikat!
        <br />
        <Alert.Link className={`alert-${style6}`}>Przykładowy link</Alert.Link>
      </Alert>
      <Badge bg={style4}>BRUH</Badge>
      <Badge pill bg={style4}>MOMENT</Badge>
      <Badge bg={style5}>BRUH</Badge>
      <Badge pill bg={style5}>MOMENT</Badge>
      <Badge bg={style6}>BRUH</Badge>
      <Badge pill bg={style6}>MOMENT</Badge>
      <br />
      <Spinner variant={style4} animation="border" />
      <Spinner variant={style4} animation="grow" />
      <Spinner variant={style5} animation="border" />
      <Spinner variant={style5} animation="grow" />
      <Spinner variant={style6} animation="border" />
      <Spinner variant={style6} animation="grow" />
      <ProgressBar variant={style4} now={60} label="Stan" />
      <ProgressBar striped variant={style4} now={20} />
      <ProgressBar animated variant={style4} now={45} />
      <ProgressBar variant={style5} now={60} label="Stan" />
      <ProgressBar striped variant={style5} now={20} />
      <ProgressBar animated variant={style5} now={45} />
      <ProgressBar variant={style6} now={60} label="Stan" />
      <ProgressBar striped variant={style6} now={20} />
      <ProgressBar animated variant={style6} now={45} />
      <Button variant={`outline-${style4}`}>Obwódka</Button>
      <Button variant={`outline-${style5}`}>Obwódka</Button>
      <Button variant={`outline-${style6}`}>Obwódka</Button>
    </Container>
  );
}
