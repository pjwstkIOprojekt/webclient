import { Container } from "react-bootstrap";
import BloodTypeForm from "./bloodtype/BloodTypeForm";
import AllergyTable from "./allergy/AllergyTable";
import MedicalConditionTable from "./medicalcondition/MedicalConditionTable";
import { useState, useEffect } from "react";
import { getInfo } from "../../../api/medicalInfoCalls";

const MedicalData = () => {
  const [blood, setBlood] = useState({});
  const [allergies, setAllergies] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    getInfo().then(res => res.json()).then(data => {
      console.log(data);
      setBlood(data);
      setAllergies(data);
      setConditions(data);
      setIsLoading(false);
    }).catch(err => console.log(err));
  }, []);

  return (
    <Container className="my-3">
      <h1 className="mb-3">Dane medyczne</h1>
      <BloodTypeForm data={blood} />
      <AllergyTable data={allergies} loading={isloading} />
      <MedicalConditionTable data={conditions} loading={isloading} />
    </Container>
  );
};

export default MedicalData;
