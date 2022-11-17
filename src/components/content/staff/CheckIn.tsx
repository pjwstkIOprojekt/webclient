import { useState } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { useTranslation } from "react-i18next";
import { endShift, startShift } from "../../../api/employeeCalls";
import { Nav } from "react-bootstrap";
import { CgWorkAlt } from "react-icons/cg";

const CheckIn = () => {
  const [checked, setChecked] = useState(false);
  const darkMode = useDarkMode();
  const { t } = useTranslation();

  const onToggle = () => {
    (checked ? endShift() : startShift()).then(res => {
      if (res.status === 200) {
        setChecked(!checked);
      } else {
        console.log(res);
      }
    }).catch(console.error);
  };

  return (
    <Nav.Link onClick={onToggle} className={`d-inline-flex align-items-center nav-link-${darkMode ? "dark" : "light"}`}>
      <CgWorkAlt />
      <span className="px-1">{checked ? t("FinishDuty") : t("StartDuty")}</span>
    </Nav.Link>
  );
};

export default CheckIn;
