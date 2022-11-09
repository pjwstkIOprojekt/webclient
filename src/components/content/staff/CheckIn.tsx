import { useState, useEffect } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Nav } from "react-bootstrap";
import { CgWorkAlt } from "react-icons/cg";
import { useTranslation } from "react-i18next";

const CheckIn = () => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const darkMode = useDarkMode();

  useEffect(() => {
    // No endpoints?
  }, []);

  const onToggle = () => {
    setChecked(!checked);
    // Nie ma końcówek?
  };

  return (
    <Nav.Link onClick={onToggle} className={`d-inline-flex align-items-center nav-link-${darkMode ? "dark" : "light"}`}>
      <CgWorkAlt />
      <span className="px-1">{checked ? t('FinishDuty') : t('StartDuty')}</span>
    </Nav.Link>
  );
};

export default CheckIn;
