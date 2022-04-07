import { useParams } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import { Container, Row, Card, Modal, Alert, Badge, Button, Dropdown, ProgressBar, Spinner } from "react-bootstrap";

export default function Hello(props: { variant: boolean }) {
  const { style, style2, style3 } = useParams();
  const theme = useDarkMode() ? "dark" : "light";

  if (props.variant) {
    return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://vincentdnl.com/static/d39b503cebf83760d389b29b8c66d03b/6a068/semicolon2.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant={`${theme}-${style}`}>Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://miro.medium.com/max/1400/0*z1mm6izqSeDiKukb" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant={`${theme}-${style2}`}>Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://miro.medium.com/max/1000/0*pN-_lwZ-nOOsrGQk.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant={`${theme}-${style3}`}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
        <Alert variant={`${theme}-${style2}`} className="mt-3">
          <Alert.Heading>Komunikat</Alert.Heading>
          To jest przykładowy komunikat!
          <br />
          <Alert.Link className={`alert-${theme}-${style2}`}>Przykładowy link</Alert.Link>
        </Alert>
        <Row className="justify-content-center">
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Przykładowy tekst bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant={`${theme}-${style}`}>Close</Button>
              <Button variant={`${theme}-${style}`}>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Przykładowy tekst bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant={`${theme}-${style2}`}>Close</Button>
              <Button variant={`${theme}-${style3}`}>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Alert variant={`${theme}-${style}`}>
        <Alert.Heading>Komunikat</Alert.Heading>
        To jest przykładowy komunikat!
        <br />
        <Alert.Link className={`alert-${theme}-${style}`}>Przykładowy link</Alert.Link>
      </Alert>
      <Alert variant={`${theme}-${style2}`}>
        <Alert.Heading>Komunikat</Alert.Heading>
        To jest przykładowy komunikat!
        <br />
        <Alert.Link className={`alert-${theme}-${style2}`}>Przykładowy link</Alert.Link>
      </Alert>
      <Alert variant={`${theme}-${style3}`}>
        <Alert.Heading>Komunikat</Alert.Heading>
        To jest przykładowy komunikat!
        <br />
        <Alert.Link className={`alert-${theme}-${style3}`}>Przykładowy link</Alert.Link>
      </Alert>
      <Badge bg={`${theme}-${style}`}>BRUH</Badge>
      <Badge pill bg={`${theme}-${style}`}>MOMENT</Badge>
      <Badge bg={`${theme}-${style2}`}>BRUH</Badge>
      <Badge pill bg={`${theme}-${style2}`}>MOMENT</Badge>
      <Badge bg={`${theme}-${style3}`}>BRUH</Badge>
      <Badge pill bg={`${theme}-${style3}`}>MOMENT</Badge>
      <br />
      <Button variant={`${theme}-${style}`}>Kliknij mnie!</Button>
      <Button variant={`${theme}-${style2}`}>Kliknij mnie!</Button>
      <Button variant={`${theme}-${style3}`}>Kliknij mnie!</Button>
      <br />
      <Spinner variant={`${theme}-${style}`} animation="border" />
      <Spinner variant={`${theme}-${style}`} animation="grow" />
      <Spinner variant={`${theme}-${style2}`} animation="border" />
      <Spinner variant={`${theme}-${style2}`} animation="grow" />
      <Spinner variant={`${theme}-${style3}`} animation="border" />
      <Spinner variant={`${theme}-${style3}`} animation="grow" />
      <ProgressBar variant={`${theme}-${style}`} now={60} label="Stan" />
      <ProgressBar striped variant={`${theme}-${style}`} now={20} />
      <ProgressBar animated variant={`${theme}-${style}`} now={45} />
      <ProgressBar variant={`${theme}-${style2}`} now={60} label="Stan" />
      <ProgressBar striped variant={`${theme}-${style2}`} now={20} />
      <ProgressBar animated variant={`${theme}-${style2}`} now={45} />
      <ProgressBar variant={`${theme}-${style3}`} now={60} label="Stan" />
      <ProgressBar striped variant={`${theme}-${style3}`} now={20} />
      <ProgressBar animated variant={`${theme}-${style3}`} now={45} />
      <br />
      <Dropdown>
        <Dropdown.Toggle variant={`${theme}-${style}`}>
          Otwórz listę
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Wybierz mnie!</Dropdown.Item>
          <Dropdown.Item>Mnie mnie!</Dropdown.Item>
          <Dropdown.Item>Nie! Wybierz mnie!</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button variant={`outline-${theme}-${style}`}>Obwódka</Button>
      <Button variant={`outline-${theme}-${style2}`}>Obwódka</Button>
      <Button variant={`outline-${theme}-${style3}`}>Obwódka</Button>
    </Container>
  );
}
