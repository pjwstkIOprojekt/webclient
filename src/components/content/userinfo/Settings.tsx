import { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useParams, NavLink } from "react-router-dom";
import AddAllergy from "./allergy/AddAllergy";
import EditBloodTypeView from "./bloodtype/EditBloodTypeView";
import MedicalData from "./MedicalData";
import EditUserData from "./personalinfo/EditUserData";
import UserData from "./personalinfo/UserData";
import TrustedPersonData from "../trustedPerson/TrustedPersonData";
import EditTrustedPersonData from "../trustedPerson/EditTrustedPersonData";



const Settings = () => {
  return (
    <Container className="my-3">
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link as={NavLink} to="userdata">Ustawienia</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="medicaldata" >Dane medyczne</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="trustedPersonData" >Osoba zaufana</Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="userdata" element={<UserData />} />
        <Route path="userdata/edit" element={<EditUserData />} />
        <Route path="medicaldata" element={<MedicalData />} />
        <Route path="medicaldata/editbloodtype" element={<EditBloodTypeView />} />
        <Route path="medicaldata/allergy/add" element={<AddAllergy />} />
        <Route path="trustedPersonData" element={<TrustedPersonData />} />
        <Route path="trustedPersonData/edit" element={<EditTrustedPersonData />} />
      </Routes>
    </Container>
  );
};

export default Settings;
