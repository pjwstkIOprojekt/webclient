import { useDarkMode } from "../../hooks/useDarkMode";
import { Spinner as Inner } from "react-bootstrap";

export interface SpinnerParams {
  className?: string,
  grow?: boolean
}

const Spinner = (props: Readonly<SpinnerParams>) => {
  const darkMode = useDarkMode();
  return <Inner animation={props.grow ? "grow" : "border"} className={props.className} variant={`custom-${darkMode ? "dark" : "light"}`} />;
};

export default Spinner;
