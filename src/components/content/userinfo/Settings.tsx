import { Container } from "react-bootstrap";
import Navtab from "../../fragments/navigation/Navtab";
import { Routes, Route } from "react-router-dom";
import UserDataForm from "./personalinfo/UserDataForm";
import ChangePasswordForm from "./personalinfo/ChangePasswordForm";
import TrustedPersonForm from "./trustedperson/TrustedPersonForm";
import MedicalData from "./MedicalData";
import AllergyForm from "./allergy/AllergyForm";
import MedicalConditionForm from "./medicalcondition/MedicalConditionForm";

const Settings = () => {
  const links = [
    { to: "userdata", text: "Dane osobowe" },
    { to: "medicaldata", text: "Dane medyczne" },
    { to: "trustedperson", text: "Osoba zaufana" }
  ];

  return (
    <Container className="my-3">
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
