import { useTranslation } from "react-i18next";
import { useRoles, useAuth } from "../../../hooks/useAuth";
import { useDarkMode, useDarkModeManager } from "../../../hooks/useDarkMode";
import { Nav, NavDropdown, Navbar as Inner, Container } from "react-bootstrap";
import NavLink from "./NavLink";
import { FaHome, FaMedkit, FaBook, FaUserCircle, FaMap, FaNotesMedical, FaToolbox, FaUserSecret } from "react-icons/fa";
import { isDispositor, isDirector, isAuth } from "../../../helpers/authHelper";
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
        <span className="px-1">{t("MainPage.MainPage")}</span>
      </NavLink>
      <NavLink to="/newreport">
        <FaMedkit />
        <span className="px-1">{t("Reports.Report")}</span>
      </NavLink>
      <NavLink to="/tutorial">
        <FaBook />
        <span className="px-1">{t("Tutorials")}</span>
      </NavLink>
      {isDispositor(roles) || isDirector(roles) ? (
        <NavLink to="/map">
          <FaMap />
          <span className="px-1">{t("Map")}</span>
        </NavLink>
      ) : ""}
      {isDispositor(roles) ? (
        <NavLink to="/dispanel/reports">
          <FaNotesMedical />
          <span className="px-1">{t("PanelDispatcher")}</span>
        </NavLink>
      ) : ""}
      {isDirector(roles) ? (
        <NavLink to="/admpanel/ambulances">
          <FaToolbox />
          <span className="px-1">{t("PanelManager")}</span>
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
        <span className="px-1">{t("Theme")}</span>
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
        <span className="px-1"><img src={`/img/flags/${flags[lang]}.png`} className="lang-icon" alt={t("Flag")} /></span>
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
        <span className="px-1">{t("Account")}</span>
      </span>
    } className={`nav-${customLink(darkMode)}`}>
      {isAuth(roles) ? (
        <>
          <NavDrop to="/settings/userdata">
            <IoMdPerson />
            <span className="px-1">{t("userdata")}</span>
          </NavDrop>
          <NavDrop to="/settings/medicaldata">
            <FaNotesMedical />
            <span className="px-1">{t("MedicalData")}</span>
          </NavDrop>
          <NavDrop to="/settings/trustedperson">
            <FaUserSecret />
            <span className="px-1">{t("Trustedperson")}</span>
          </NavDrop>
          <NavDropdown.Divider />
        </>
      ) : ""}
      {isAuth(roles) ? (
        <NavDropdown.Item onClick={auth.logout} className="d-inline-flex align-items-center">
          <BiLogIn />
          <span className="px-1">{t("LogOff")}</span>
        </NavDropdown.Item>
      ) : (
        <NavDrop to="/login">
          <BiLogIn />
          <span className="px-1">{t("Sign in")}</span>
        </NavDrop>
      )}
      {isAuth(roles) ? "" : (
        <NavDrop to="/register">
          <IoIosPaper />
          <span className="px-1">{t("Sign up")}</span>
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
