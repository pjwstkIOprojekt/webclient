import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import Navtab from "../../fragments/navigation/Navtab";
import { Routes, Route } from "react-router-dom";
import UserDataForm from "./personalinfo/UserDataForm";
import ChangePasswordForm from "./personalinfo/ChangePasswordForm";
import TrustedPersonForm from "./trustedperson/TrustedPersonForm";
import MedicalData from "./medicalinfo/MedicalData";
import AllergyForm from "./medicalinfo/AllergyForm";
import MedicalConditionForm from "./medicalinfo/MedicalConditionForm";
import UserSchedule from "../schedule/UserSchedule";

// User settings router
const Settings = () => {
  const { t } = useTranslation();

  const links = [
    { to: "userdata", text: t("Person.UserData") },
    { to: "medicaldata", text: t("Person.MedicalData") },
    { to: "trustedperson", text: t("Person.TrustedPerson") },
    { to: "schedule", text: t("Schedule.Schedule") }
  ];

  return (
    <Container className="my-3">
      <h1><b>{t("Person.MyData")}</b></h1>
      <Navtab links={links}/>
      <Routes>
        <Route path="userdata" element={<UserDataForm />} />
        <Route path="userdata/password" element={<ChangePasswordForm />} />
        <Route path="medicaldata" element={<MedicalData />} />
        <Route path="medicaldata/allergy" element={<AllergyForm />} />
        <Route path="medicaldata/allergy/:allergyId" element={<AllergyForm />} />
        <Route path="medicaldata/disease" element={<MedicalConditionForm />} />
        <Route path="medicaldata/disease/:diseaseId" element={<MedicalConditionForm />} />
        <Route path="trustedperson" element={<TrustedPersonForm />} />
        <Route path="schedule" element={<UserSchedule />} />
      </Routes>
    </Container>
  );
};

export default Settings;
