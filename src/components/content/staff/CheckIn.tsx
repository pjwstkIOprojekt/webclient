import { useState } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Nav } from "react-bootstrap";
import { CgWorkAlt } from "react-icons/cg";

const CheckIn = () => {
  const [checked, setChecked] = useState(false);
  const darkMode = useDarkMode();

  return (
    <Nav.Link onClick={(e) => setChecked(!checked)} className={`d-inline-flex align-items-center nav-link-${darkMode ? "dark" : "light"}`}>
      <CgWorkAlt />
      <span className="px-1">{checked ? "Skończ dyżur" : "Zacznij dyżur"}</span>
    </Nav.Link>
  );
};

export default CheckIn;
