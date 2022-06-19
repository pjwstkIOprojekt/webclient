import { Container } from "react-bootstrap";
import Navtab from "../../fragments/navigation/Navtab";
import { Routes, Route } from "react-router-dom";
import UserData from "./personalinfo/UserData";
import TrustedPersonData from "../trustedperson/TrustedPersonData";
import EditTrustedPersonData from "../trustedperson/EditTrustedPersonData";
import EditUserData from "./personalinfo/EditUserData";
import MedicalData from "./MedicalData";
import EditBloodTypeView from "./bloodtype/EditBloodTypeView";
import AddAllergy from "./allergy/AddAllergy";
import EditAllergy from "./allergy/EditAllergy";
import AddMedicalCondition from "../userinfo/medicalCondition/AddMedicalCondition";
import EditMedicalCondition from "../userinfo/medicalCondition/EditMedicalCondition";

const links = [
  { to: "userdata", text: "Ustawienia" },
  { to: "medicaldata", text: "Dane medyczne" },
  { to: "trustedperson", text: "Osoba zaufana" }
];

const Settings = () => {
  return (
    <Container className="my-3">
      <Navtab links={links}/>
      <Routes>
        <Route path="userdata" element={<UserData />} />
        <Route path="userdata/edit" element={<EditUserData />} />
        <Route path="medicaldata" element={<MedicalData />} />
        <Route path="medicaldata/editbloodtype" element={<EditBloodTypeView />} />
        <Route path="medicaldata/allergy/add" element={<AddAllergy />} />
        <Route path="medicaldata/allergy/details/:allergyId" element={<EditAllergy />} />
        <Route path="medicaldata/medicalcondition/add" element={<AddMedicalCondition />} />
        <Route path="medicaldata/disease/details/:diseaseId" element={<EditMedicalCondition />} />
        <Route path="trustedperson" element={<TrustedPersonData />} />
        <Route path="trustedperson/edit" element={<EditTrustedPersonData />} />
      </Routes>
    </Container>
  );
};

export default Settings;
