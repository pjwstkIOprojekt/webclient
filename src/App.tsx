import { ReactKeycloakProvider } from "@react-keycloak/web";
import { keycloakClient } from "./helpers/authHelper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/fragments/navigation/Navbar"
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Register from "./components/content/auth/Register";
import Settings from "./components/content/userinfo/Settings";
import Panel from "./components/content/dispatchpanel/Panel";
import TutorialView from "./components/content/tutorial/TutorialView";
import Tutorial from "./components/content/tutorial/Tutorial";
import MainMap from "./components/content/map/MainMap";
import CreateReport from "./components/content/report/CreateReport";
import NotificationArea from "./components/fragments/notifications/NotificationArea";
import ListAmbulance from "./components/content/manager/ListAmbulance";
import AddParamedics from "./components/content/manager/AddParamedic";
import { CookieConsent } from "./components/fragments/cookies/CookieConsent";

const App = () => {
  return (
    <ReactKeycloakProvider authClient={keycloakClient}>
      <BrowserRouter>
        <Navbar />
        <Container fluid className="page-content">
          <Routes>
            <Route path="/" element={<Navigate replace to="/panel/main" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/panel/*" element={<Panel />} />
            <Route path="/tutorial" element={<TutorialView />} />
            <Route path="/tutorial/:tutorialId" element={<Tutorial />} />
            <Route path="/map" element={<MainMap />} />
            <Route path="/newreport" element={<CreateReport />} />
            <Route path="/listAmbulances" element={<ListAmbulance />} />
            <Route path="/listAmbulances/addParamedics/:ambulanceId" element={<AddParamedics />} />
          </Routes>
        <NotificationArea />
        </Container>
        <CookieConsent debug />
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
};

export default App;
