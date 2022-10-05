import { Container } from "react-bootstrap";
import Spinner from "./Spinner";

export interface ViewLoaderParams {
  isLoaded: boolean,
  element: JSX.Element
}

const ViewLoader = (props: Readonly<ViewLoaderParams>) => {
  if (!props.isLoaded) {
    return (
      <Container className="text-center mt-5">
        <Spinner />
      </Container>
    );
  }

  return props.element;
};

export default ViewLoader;
