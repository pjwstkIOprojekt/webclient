import { useRoles } from "./hooks/useAuth";
import Navbar from "./components/fragments/navigation/Navbar"
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ConditionalRoute from "./components/fragments/navigation/ConditionalRoute";
import { isAuth, isDispositor, isDirector } from "./helpers/authHelper";
import Login from "./components/content/auth/Login";
import Register from "./components/content/auth/Register";
import Settings from "./components/content/userinfo/Settings";
import Home from "./components/content/home/Home";
import TutorialView from "./components/content/tutorial/TutorialView";
import Tutorial from "./components/content/tutorial/Tutorial";
import ReportForm from "./components/content/report/ReportForm";
import FacilitiesList from "./components/content/faciliites/FacilitiesList";
import FacilityForm from "./components/content/faciliites/FacilityForm";
import MainMap from "./components/content/map/MainMap";
import NotificationArea from "./components/fragments/notifications/NotificationArea";
import CookieConsent from "./components/fragments/cookies/CookieConsent";
import ParamedicInfo from "./components/content/staff/ParamedicInfo"
import TestMap from "./components/content/ambulance/TestMap";
import ScheduleList from "./components/content/schedule/ScheduleList";
import ScheduleAdd from "./components/content/schedule/ScheduleAdd";
import RegisterWithRole from "./components/content/auth/RegisterWithRole";
import IncidentsList from "./components/content/incident/IncidentsList";
import DispositorPanel from "./components/content/panel/DispositorPanel";
import AdminPanel from "./components/content/panel/AdminPanel";

const App = () => {
  const roles = useRoles();

  return (
    <>
      <Navbar />
      <Container fluid className="page-content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/login" element={<ConditionalRoute condition={!isAuth(roles)} element={<Login />} />} />
          <Route path="/login/:redirect" element={<ConditionalRoute condition={!isAuth(roles)} element={<Login />} />} />
          <Route path="/register" element={<ConditionalRoute condition={!isAuth(roles)} element={<Register />} />} />
          <Route path="/register/:redirect" element={<ConditionalRoute condition={!isAuth(roles)} element={<Register />} />} />
          <Route path="/settings/*" element={<ConditionalRoute condition={isAuth(roles)} element={<Settings />} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tutorial" element={<TutorialView />} />
          <Route path="/tutorial/:tutorialId" element={<Tutorial />} />
          <Route path="/newreport" element={<ConditionalRoute condition={isAuth(roles)} element={<ReportForm />} />} />
          <Route path="/facilities" element={<ConditionalRoute condition={isAuth(roles)} element={<FacilitiesList />} />} />
          <Route path="/newfacility" element={<ConditionalRoute condition={isDispositor(roles) || isDirector(roles)} element={<FacilityForm />} />} />
          <Route path="/facilities/:facilityId" element={<ConditionalRoute condition={isAuth(roles)} element={<FacilityForm />} />} />
          <Route path="/map" element={<ConditionalRoute condition={isDispositor(roles) || isDirector(roles)} element={<MainMap />} />} />

          <Route path="/test" element={<TestMap />} />
          <Route path="/paramedicInfo" element={<ParamedicInfo />} />
          <Route path="/schedule" element={<ScheduleList />} />
          <Route path="/schedule/add" element={<ScheduleAdd />} />
          <Route path="/role" element={<RegisterWithRole />} />
          <Route path="/inc" element={<IncidentsList />} />
          
          <Route path="/dispanel/*" element={<ConditionalRoute condition={isDispositor(roles)} element={<DispositorPanel />} />} />
          <Route path="/admpanel/*" element={<ConditionalRoute condition={isDirector(roles)} element={<AdminPanel />} />} />
        </Routes>
        <NotificationArea />
      </Container>
      <CookieConsent />
    </>
  );
};

export default App;
