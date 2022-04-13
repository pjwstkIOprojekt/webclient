import { GoogleMap } from "@react-google-maps/api";
import React, { useMemo } from "react";
import { Card, Col, Container, Row, Form, FormControl, Button} from "react-bootstrap";
import { useDarkModeManager } from "../../../hooks/useDarkMode";

const Map = () => {
  const center = useMemo(() => ({ lat: 52, lng: 21 }), []);
  const darkMode = useDarkModeManager();

  return (
    <Container fluid className="mt-3">
      <Row>
        <Col xs={3}>
          <h1>Placówki</h1>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Card
            className="mt-3"
            bg={`custom-${darkMode.isDark ? "dark" : "light-text"}`}
          >
            <Card.Img variant="top" src="/images/thumbnail.jpg" height="100" />

            <Card.Body>
              <Card.Title className={darkMode.isDark ? "text-light" : ""}>
                <h4>Szpital</h4>
                <p>ul. ABC</p>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="mt-3"
            bg={`custom-${darkMode.isDark ? "dark" : "light-text"}`}
          >
            <Card.Img variant="top" src="/images/thumbnail.jpg" height="100" />

            <Card.Body>
              <Card.Title className={darkMode.isDark ? "text-light" : ""}>
                <h4>Szpital</h4>
                <p>ul. ABC</p>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="mt-3"
            bg={`custom-${darkMode.isDark ? "dark" : "light-text"}`}
          >
            <Card.Img variant="top" src="/images/thumbnail.jpg" height="100" />

            <Card.Body>
              <Card.Title className={darkMode.isDark ? "text-light" : ""}>
                <h4>Szpital</h4>
                <p>ul. ABC</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <GoogleMap
            zoom={10}
            center={center}
            mapContainerClassName="map-container"
          ></GoogleMap>
        </Col>
      </Row>
    </Container>
  );
};

export default Map;
