import { useParams } from "react-router-dom";
import { Container, Row, Card, Modal, Alert, Badge, Button, Dropdown, ProgressBar, Spinner } from "react-bootstrap";

export default function Hello(props: { variant: boolean }) {
  const { style, style2, style3, style4, style5, style6 } = useParams();

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
              <Button variant={style}>Go somewhere</Button>
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
              <Button variant={style2}>Go somewhere</Button>
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
              <Button variant={style3}>Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pfaC86DLiWPlJFB8gK_6CwSDZ_tOpj0tgQ&usqp=CAU" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant={style4}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
        <Alert variant={style2} className="mt-3">
          <Alert.Heading>Komunikat</Alert.Heading>
          To jest przykładowy komunikat!
          <br />
          <Alert.Link className={`alert-${style2}`}>Przykładowy link</Alert.Link>
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
              <Button variant={style5}>Close</Button>
              <Button variant={style6}>Save changes</Button>
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
              <Button variant={style3}>Close</Button>
              <Button variant={style4}>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Row>
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
