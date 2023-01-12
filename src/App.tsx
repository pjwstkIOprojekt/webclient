import { useRoles } from "./hooks/useAuth";
import { isAuth, isDispositor, isDirector } from "./helpers/authHelper";
import Navbar from "./components/fragments/navigation/Navbar"
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ConditionalRoute from "./components/fragments/navigation/ConditionalRoute";
import Login from "./components/content/auth/Login";
import Register from "./components/content/auth/Register";
import ForgotPassword from "./components/content/auth/ForgotPassword";
import Settings from "./components/content/userinfo/Settings";
import RegisterWithRole from "./components/content/auth/RegisterWithRole";
import Home from "./components/content/home/Home";
import TutorialView from "./components/content/tutorial/TutorialView";
import Tutorial from "./components/content/tutorial/Tutorial";
import ReportForm from "./components/content/report/ReportForm";
import FacilitiesList from "./components/content/faciliites/FacilitiesList";
import FacilityForm from "./components/content/faciliites/FacilityForm";
import MainMap from "./components/content/map/MainMap";
import ReportsList from "./components/content/report/ReportsList";
import ReportView from "./components/content/report/ReportView";
import AmbulanceList from "./components/content/ambulance/AmbulanceList";
import AmbulanceForm from "./components/content/ambulance/AmbulanceForm";
import AmbulanceView from "./components/content/ambulance/AmbulanceView";
import EquipmentList from "./components/content/equipment/EquipmentList";
import EquipmentForm from "./components/content/equipment/EquipmentForm";
import NotificationArea from "./components/fragments/notifications/NotificationArea";
import CookieConsent from "./components/fragments/cookies/CookieConsent";

import ParamedicView from "./components/content/staff/ParamedicView";
import ParamedicInfo from "./components/content/staff/ParamedicInfo"
import ScheduleList from "./components/content/schedule/ScheduleList";
import ScheduleAdd from "./components/content/schedule/ScheduleAdd";

const App = () => {
  const roles = useRoles();
  const auth = isAuth(roles);
  const dis = isDispositor(roles);
  const admin = isDirector(roles);

  return (
    <>
      <Navbar />
      <Container fluid className="page-content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/login" element={<ConditionalRoute condition={!auth} element={<Login />} />} />
          <Route path="/login/:redirect" element={<ConditionalRoute condition={!auth} element={<Login />} />} />
          <Route path="/register" element={<ConditionalRoute condition={!auth} element={<Register />} />} />
          <Route path="/register/:redirect" element={<ConditionalRoute condition={!auth} element={<Register />} />} />
          <Route path="/settings/*" element={<ConditionalRoute condition={auth} element={<Settings />} />} />
          <Route path="/newuser" element={<ConditionalRoute condition={dis || admin} element={<RegisterWithRole />} />} />
          <Route path="/forgotpassword" element={<ConditionalRoute condition={!auth} element={<ForgotPassword />} />} />

          <Route path="/home" element={<Home />} />
          <Route path="/tutorial" element={<TutorialView />} />
          <Route path="/tutorial/:tutorialId" element={<Tutorial />} />
          <Route path="/newreport" element={<ConditionalRoute condition={auth} element={<ReportForm />} />} />
          <Route path="/newreport/:reportId" element={<ConditionalRoute condition={dis} element={<ReportForm />} />} />
          <Route path="/facilities" element={<ConditionalRoute condition={auth} element={<FacilitiesList />} />} />
          <Route path="/newfacility" element={<ConditionalRoute condition={dis || admin} element={<FacilityForm />} />} />
          <Route path="/facilities/:facilityId" element={<ConditionalRoute condition={auth} element={<FacilityForm />} />} />
          <Route path="/map" element={<ConditionalRoute condition={dis || admin} element={<MainMap />} />} />

          <Route path="/reports" element={<ConditionalRoute condition={dis} element={<ReportsList />} />} />
          <Route path="/reports/:reportId/*" element={<ConditionalRoute condition={dis} element={<ReportView />} />} />
          <Route path="/ambulances" element={<ConditionalRoute condition={admin} element={<AmbulanceList />} />} />
          <Route path="/newambulance" element={<ConditionalRoute condition={admin} element={<AmbulanceForm />} />} />
          <Route path="/ambulances/:ambulanceId/*" element={<ConditionalRoute condition={admin} element={<AmbulanceView />} />} />
          <Route path="/equipments" element={<ConditionalRoute condition={admin} element={<EquipmentList />} />} />
          <Route path="/equipments/:itemId" element={<ConditionalRoute condition={admin} element={<EquipmentForm />} />} />
          <Route path="/newequipment" element={<ConditionalRoute condition={admin} element={<EquipmentForm />} />} />

          <Route path="/paramedic/:paramedicId/*" element={<ParamedicView />} />
          <Route path="/paramedic" element={<ParamedicInfo />} />
          <Route path="/schedule" element={<ScheduleList />} />
          <Route path="/schedule/add" element={<ScheduleAdd />} />
        </Routes>
        <NotificationArea />
      </Container>
      <CookieConsent />
    </>
  );
};

export default App;
