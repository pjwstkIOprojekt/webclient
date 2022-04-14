import { useMemo } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import Button from "../../fragments/Button";
import CustomCard from "../../fragments/Card";
import { GoogleMap } from "@react-google-maps/api";

const Map = () => {
  const center = useMemo(() => ({ lat: 52, lng: 21 }), []);

  return (
    <Container fluid className="mt-3">
      <Row>
        <Col xs={3}>
          <h1>Placówki</h1>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" />
            <Button outline text="Search" />
          </Form>
          <CustomCard className="mt-3">
            <Card.Img variant="top" src="/img/thumbnail.jpg" height="100" />
            <Card.Body>
              <Card.Title>
                <h4>Szpital</h4>
                <p>ul. ABC</p>
              </Card.Title>
            </Card.Body>
          </CustomCard>
          <CustomCard className="mt-3">
            <Card.Img variant="top" src="/img/thumbnail.jpg" height="100" />
            <Card.Body>
              <Card.Title>
                <h4>Szpital</h4>
                <p>ul. ABC</p>
              </Card.Title>
            </Card.Body>
          </CustomCard>
          <CustomCard className="mt-3">
            <Card.Img variant="top" src="/img/thumbnail.jpg" height="100" />
            <Card.Body>
              <Card.Title>
                <h4>Szpital</h4>
                <p>ul. ABC</p>
              </Card.Title>
            </Card.Body>
          </CustomCard>
        </Col>
        <Col>
          <GoogleMap zoom={10} center={center} mapContainerClassName="map-container"></GoogleMap>
        </Col>
      </Row>
    </Container>
  );
};

export default Map;
