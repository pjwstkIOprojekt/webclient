import { Container } from "react-bootstrap";
import Navtab from "../../fragments/navigation/Navtab";
import { Routes, Route } from "react-router-dom";
import UserDataForm from "./personalinfo/UserDataForm";
import TrustedPersonForm from "./trustedperson/TrustedPersonForm";
import MedicalData from "./MedicalData";
import EditBloodTypeView from "./bloodtype/EditBloodTypeView";
import AddAllergy from "./allergy/AddAllergy";
import EditAllergy from "./allergy/EditAllergy";
import AddMedicalCondition from "./medicalcondition/AddMedicalCondition";
import EditMedicalCondition from "./medicalcondition/EditMedicalCondition";

const Settings = () => {
  const links = [
    { to: "userdata", text: "Ustawienia" },
    { to: "medicaldata", text: "Dane medyczne" },
    { to: "trustedperson", text: "Osoba zaufana" }
  ];

  return (
    <Container className="my-3">
      <Navtab links={links}/>
      <Routes>
        <Route path="userdata" element={<UserDataForm />} />
        <Route path="medicaldata" element={<MedicalData />} />
        <Route path="medicaldata/editbloodtype" element={<EditBloodTypeView />} />
        <Route path="medicaldata/allergy/add" element={<AddAllergy />} />
        <Route path="medicaldata/allergy/details/:allergyId" element={<EditAllergy />} />
        <Route path="medicaldata/medicalcondition/add" element={<AddMedicalCondition />} />
        <Route path="medicaldata/disease/details/:diseaseId" element={<EditMedicalCondition />} />
        <Route path="trustedperson" element={<TrustedPersonForm />} />
      </Routes>
    </Container>
  );
};

export default Settings;
