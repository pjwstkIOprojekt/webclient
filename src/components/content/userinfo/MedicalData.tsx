import { Container } from "react-bootstrap";
import BloodTypeForm from "./bloodtype/BloodTypeForm";
import AllergyTable from "./allergy/AllergyTable";
import MedicalConditionTable from "./medicalcondition/MedicalConditionTable";
import { useState } from "react";
import { getInfo } from "../../../api/medicalInfoCalls";
import ViewLoader from "../../fragments/util/ViewLoader";

interface MedicalFormParams {
  bloodType: Record<string, any>,
  allergies: Record<string, any>[],
  medicalConditions: Record<string, any>[]
}

const MedicalForm = (props: Readonly<MedicalFormParams>) => {
  return (
    <Container className="my-3">
      <h1 className="mb-3">Dane medyczne</h1>
      <BloodTypeForm data={props.bloodType} />
      <AllergyTable data={props.allergies} />
      <MedicalConditionTable data={props.medicalConditions} />
    </Container>
  );
};

const MedicalData = () => {
  const [blood, setBlood] = useState({});
  const [allergies, setAllergies] = useState([]);
  const [conditions, setConditions] = useState([]);

  const onLoad = (loaded: () => void) => {
    getInfo().then(res => res.json()).then(data => {
      console.log(data);
      setBlood(data);
      setAllergies(data);
      setConditions(data);
      loaded();
    }).catch(err => {
      console.log(err);
      loaded();
    });
  };

  return <ViewLoader onLoad={onLoad} element={<MedicalForm bloodType={blood} allergies={allergies} medicalConditions={conditions} />} />;
};

export default MedicalData;
