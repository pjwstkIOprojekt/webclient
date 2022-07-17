import { ReactKeycloakProvider } from "@react-keycloak/web";
import { keycloakClient, isAuth } from "./helpers/authHelper";
import Navbar from "./components/fragments/navigation/Navbar"
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ConditionalRoute from "./components/fragments/navigation/ConditionalRoute";
import Register from "./components/content/auth/Register";
import Settings from "./components/content/userinfo/Settings";
import Home from "./components/content/home/Home";
import TutorialView from "./components/content/tutorial/TutorialView";
import Tutorial from "./components/content/tutorial/Tutorial";
import CreateReport from "./components/content/report/CreateReport";
import Panel from "./components/content/dispatchpanel/Panel";
import NotificationArea from "./components/fragments/notifications/NotificationArea";
import { CookieConsent } from "./components/fragments/cookies/CookieConsent";

const App = () => {
  return (
    <ReactKeycloakProvider authClient={keycloakClient}>
      <Navbar />
      <Container fluid className="page-content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/register" element={<ConditionalRoute condition={!isAuth()} element={<Register />} />} />
          <Route path="/settings/*" element={<ConditionalRoute condition={isAuth()} element={<Settings />} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tutorial" element={<TutorialView />} />
          <Route path="/tutorial/:tutorialId" element={<Tutorial />} />
          <Route path="/newreport" element={<CreateReport />} />
          <Route path="/panel/*" element={<Panel />} />
        </Routes>
        <NotificationArea />
      </Container>
      <CookieConsent debug />
    </ReactKeycloakProvider>
  );
};

export default App;
