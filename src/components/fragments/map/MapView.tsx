import { Container, Row, Col } from "react-bootstrap";
import Map, { MapParams } from "./Map";

export interface MapViewParams extends MapParams {
  element?: JSX.Element
}

const MapView = (props: Readonly<MapViewParams>) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={4}>
          {props.element}
        </Col>
        <Col>
          <Map {...props} />
        </Col>
      </Row>
    </Container>
  );
};

export default MapView;
