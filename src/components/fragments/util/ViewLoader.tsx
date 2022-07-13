import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Spinner from "./Spinner";

export interface ViewLoaderParams {
  onLoad: (loaded: () => void) => void,
  element: JSX.Element
}

const ViewLoader = (props: Readonly<ViewLoaderParams>) => {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => props.onLoad(() => setLoaded(true)), []);

  if (!isLoaded) {
    return (
      <Container className="text-center mt-5">
        <Spinner />
      </Container>
    );
  }

  return props.element;
};

export default ViewLoader;
