import { useUser, useDispositor, useDirector } from "./hooks/useAuth";
import Navbar from "./components/fragments/navigation/Navbar"
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ConditionalRoute from "./components/fragments/navigation/ConditionalRoute";
import Login from "./components/content/auth/Login";
import Register from "./components/content/auth/Register";
import Settings from "./components/content/userinfo/Settings";
import Home from "./components/content/home/Home";
import TutorialView from "./components/content/tutorial/TutorialView";
import Tutorial from "./components/content/tutorial/Tutorial";
import CreateReport from "./components/content/report/CreateReport";
import MainMap from "./components/content/map/MainMap";
import DispositorPanel from "./components/content/panel/DispositorPanel";
import AdminPanel from "./components/content/panel/AdminPanel";
import NotificationArea from "./components/fragments/notifications/NotificationArea";
import CookieConsent from "./components/fragments/cookies/CookieConsent";

const App = () => {
  // These hooks should only be used here, inside other components use authHelper functions instead
  const isAuth = useUser();
  const isDispositor = useDispositor();
  const isDirector = useDirector();

  return (
    <>
      <Navbar />
      <Container fluid className="page-content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/login" element={<ConditionalRoute condition={!isAuth} element={<Login />} />} />
          <Route path="/register" element={<ConditionalRoute condition={!isAuth} element={<Register />} />} />
          <Route path="/settings/*" element={<ConditionalRoute condition={isAuth} element={<Settings />} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tutorial" element={<TutorialView />} />
          <Route path="/tutorial/:tutorialId" element={<Tutorial />} />
          <Route path="/newreport" element={<CreateReport />} />
          <Route path="/map" element={<ConditionalRoute condition={isDispositor || isDirector} element={<MainMap />} />} />
          <Route path="/dispanel/*" element={<ConditionalRoute condition={isDispositor} element={<DispositorPanel />} />} />
          <Route path="/admpanel/*" element={<ConditionalRoute condition={isDirector} element={<AdminPanel />} />} />
        </Routes>
        <NotificationArea />
      </Container>
      <CookieConsent />
    </>
  );
};

export default App;
