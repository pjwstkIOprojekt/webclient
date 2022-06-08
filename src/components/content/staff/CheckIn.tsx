import { useState } from "react";
import { Nav } from "react-bootstrap";
import { CgWorkAlt } from "react-icons/cg";

const CheckIn = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Nav.Link onClick={(e) => setChecked(!checked)} className="d-inline-flex align-items-center">
      <CgWorkAlt />
      <span className="px-1">{checked ? "Skończ dyżur" : "Zacznij dyżur"}</span>
    </Nav.Link>
  );
};

export default CheckIn;
