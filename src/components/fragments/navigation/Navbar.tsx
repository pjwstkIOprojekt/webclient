import { useTranslation } from "react-i18next";
import { useRoles, useAuth } from "../../../hooks/useAuth";
import { useDarkMode, useDarkModeManager } from "../../../hooks/useDarkMode";
import { Nav, NavDropdown, Navbar as Inner, Container } from "react-bootstrap";
import NavLink from "./NavLink";
import { FaHome, FaMedkit, FaBook, FaHospital, FaUserCircle, FaMap, FaNotesMedical, FaAmbulance, FaUserSecret } from "react-icons/fa";
import { isAuth, isDispositor, isDirector } from "../../../helpers/authHelper";
import { customLink } from "./sharedNavigationParams";
import CheckIn from "../../content/staff/CheckIn";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useState } from "react";
import i18n, { langCookie } from "../../../i18n";
import { setCookieValue } from "../../../helpers/cookieHelper";
import NavDrop from "./NavDrop";
import { IoMdPerson, IoIosPaper } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
import { customTheme } from "../sharedParams";

const MenuBar = () => {
  const { t } = useTranslation();
  const roles = useRoles();
  
  return (
    <Nav className="me-auto">
      <NavLink to="/">
        <FaHome />
        <span className="px-1">{t("HomePage.HomePage")}</span>
      </NavLink>
      {isAuth(roles) ? (
        <NavLink to="/newreport">
          <FaMedkit />
          <span className="px-1">{t("Report.Report")}</span>
        </NavLink>
      ) : ""}
      <NavLink to="/tutorial">
        <FaBook />
        <span className="px-1">{t("Tutorial.Tutorials")}</span>
      </NavLink>
      {isAuth(roles) ? (
        <NavLink to="/facilities">
          <FaHospital />
          <span className="px-1">{t("Facility.Facilities")}</span>
        </NavLink>
      ) : ""}
      {isDispositor(roles) || isDirector(roles) ? (
        <NavLink to="/map">
          <FaMap />
          <span className="px-1">{t("Map.Map")}</span>
        </NavLink>
      ) : ""}
      {isDispositor(roles) ? (
        <NavLink to="/reports">
          <FaNotesMedical />
          <span className="px-1">{t("Report.Reports")}</span>
        </NavLink>
      ) : ""}
      {isDirector(roles) ? (
        <NavLink to="/ambulances">
          <FaAmbulance />
          <span className="px-1">{t("Ambulance.Ambulances")}</span>
        </NavLink>
      ) : ""}
    </Nav>
  );
};

const SideMenu = () => {
  const darkMode = useDarkModeManager();
  const roles = useRoles();
  const { t } = useTranslation();

  return (
    <Nav>
      {isDispositor(roles) ? <CheckIn /> : ""}
      <Nav.Link onClick={darkMode.toggle} className={`d-inline-flex align-items-center nav-${customLink(darkMode.isDark)}`}>
        <HiOutlineLightBulb />
        <span className="px-1">{t("HomePage.ChangeTheme")}</span>
      </Nav.Link>
      <UserDropdown />
      <LangDropdown />
    </Nav>
  );
};

const LangDropdown = () => {
  const [lang, setLang] = useState(i18n.language);
  const darkMode = useDarkMode();
  const { t } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang, (err, t) => {
      if (err) {
        console.error(err);
      }

      setLang(i18n.language);
      setCookieValue(langCookie, i18n.language);
    });
  };

  const flags: Record<string, string> = {
    pl: "polish",
    en: "english"
  };

  return (
    <NavDropdown align="end" title={
      <span className="d-inline-flex align-items-center">
        <span className="px-1"><img src={`/img/flags/${flags[lang]}.png`} className="lang-icon" alt={t("Common.Flag")} /></span>
      </span>
    } className={`nav-${customLink(darkMode)}`}>
      <LangDrop display="Polski" lang="pl" current={lang} update={changeLang} />
      <LangDrop display="English" lang="en" current={lang} update={changeLang} />
    </NavDropdown>
  );
};

interface LangParams {
  display: string,
  lang: string,
  current: string,
  update: (lang: string) => void
}

const LangDrop = (props: Readonly<LangParams>) => {
  if (props.current === props.lang) {
    return <></>;
  }

  return (
    <NavDropdown.Item onClick={e => props.update(props.lang)} className="d-inline-flex align-items-center">
      <span className="px-1">{props.display}</span>
    </NavDropdown.Item>
  );
};

const UserDropdown = () => {
  const { t } = useTranslation();
  const darkMode = useDarkMode();
  const auth = useAuth();
  const roles = auth.roles;

  return (
    <NavDropdown align="end" title={
      <span className="d-inline-flex align-items-center">
        <FaUserCircle />
        <span className="px-1">{t("Person.Account")}</span>
      </span>
    } className={`nav-${customLink(darkMode)}`}>
      {isAuth(roles) ? (
        <>
          <NavDrop to="/settings/userdata">
            <IoMdPerson />
            <span className="px-1">{t("Person.UserData")}</span>
          </NavDrop>
          <NavDrop to="/settings/medicaldata">
            <FaNotesMedical />
            <span className="px-1">{t("Person.MedicalData")}</span>
          </NavDrop>
          <NavDrop to="/settings/trustedperson">
            <FaUserSecret />
            <span className="px-1">{t("Person.TrustedPerson")}</span>
          </NavDrop>
          <NavDropdown.Divider />
        </>
      ) : ""}
      {isAuth(roles) ? (
        <NavDropdown.Item onClick={auth.logout} className="d-inline-flex align-items-center">
          <BiLogIn />
          <span className="px-1">{t("Login.LogOff")}</span>
        </NavDropdown.Item>
      ) : (
        <NavDrop to="/login">
          <BiLogIn />
          <span className="px-1">{t("Login.SignIn")}</span>
        </NavDrop>
      )}
      {isAuth(roles) ? "" : (
        <NavDrop to="/register">
          <IoIosPaper />
          <span className="px-1">{t("Login.SignUp")}</span>
        </NavDrop>
      )}
    </NavDropdown>
  );
};

const Navbar = () => {
  const darkMode = useDarkMode();

  return (
    <Inner bg={`navbar-${customTheme(darkMode)}`} variant={customTheme(darkMode)} expand="lg">
      <Container fluid>
        <Inner.Brand className="px-5">GARY</Inner.Brand>
        <Inner.Toggle aria-controls="basic-navbar-nav" />
        <Inner.Collapse id="basic-navbar-nav">
          <MenuBar />
          <SideMenu />
        </Inner.Collapse>
      </Container>
    </Inner>
  );
};

export default Navbar;
