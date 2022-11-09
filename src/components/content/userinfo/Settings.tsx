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

const Settings = () => {
  const { t } = useTranslation();

  const links = [
    { to: "userdata", text: t("userdata") },
    { to: "medicaldata", text: t("medicaldata") },
    { to: "trustedperson", text: t("Person.Trustedperson") }
  ];

  return (
    <Container className="my-3">
      <h1><b>Moje dane</b></h1>
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
      </Routes>
    </Container>
  );
};

export default Settings;
