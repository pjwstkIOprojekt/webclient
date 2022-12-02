import { useState } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { useTranslation } from "react-i18next";
import { endShift, startShift } from "../../../api/employeeCalls";
import { Nav, Spinner } from "react-bootstrap";
import { CgWorkAlt } from "react-icons/cg";

const CheckIn = () => {
  const [checked, setChecked] = useState(false);
  const [processing, setProcessing] = useState(false);
  const darkMode = useDarkMode();
  const { t } = useTranslation();

  const onToggle = () => {
    if (processing) {
      return;
    }

    setProcessing(true);

    (checked ? endShift() : startShift()).then(res => {
      if (res.ok) {
        setChecked(!checked);
      } else {
        console.log(res);
      }

      setProcessing(false);
    }).catch(err => {
      console.error(err);
      setProcessing(false);
    });
  };

  return (
    <Nav.Link onClick={onToggle} className={`d-inline-flex align-items-center nav-link-${darkMode ? "dark" : "light"}`}>
      <CgWorkAlt />
      <span className="px-1">{processing ? <Spinner animation="border" /> : (checked ? t("Person.FinishDuty") : t("Person.StartDuty"))}</span>
    </Nav.Link>
  );
};

export default CheckIn;
