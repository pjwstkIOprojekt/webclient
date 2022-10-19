import { useState, useEffect } from "react";
import { AllergyResponse } from "../../../api/allergyCalls";
import { DiseaseResponse } from "../../../api/diseaseCalls";
import { getEmail } from "../../../helpers/authHelper";
import { getMedicalInfoByEmail, MedicalInfoResponse } from "../../../api/medicalInfoCalls";
import { Container } from "react-bootstrap";
import BloodTypeForm from "./bloodtype/BloodTypeForm";
import AllergyTable from "./allergy/AllergyTable";
import MedicalConditionTable from "./medicalcondition/MedicalConditionTable";

interface BloodData {
  id?: number,
  bloodType?: string,
  rhType?: string
}

const MedicalData = () => {
  const [blood, setBlood] = useState<BloodData>({});
  const [allergies, setAllergies] = useState<AllergyResponse[]>([]);
  const [conditions, setConditions] = useState<DiseaseResponse[]>([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const email = getEmail();

    if (!email) {
      console.error("User email is undefined. Check Session Storage and verify that user is actually logged in.");
      return;
    }

    getMedicalInfoByEmail(email).then(res => res.json()).then((data: MedicalInfoResponse) => {
      if (data.medicalInfoId) {
        setBlood({
          id: data.medicalInfoId,
          bloodType: data.bloodType,
          rhType: data.rhType
        });
      }

      if (data.allergies) {
        setAllergies(data.allergies);
      }

      if (data.diseases) {
        setConditions(data.diseases);
      }

      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, []);

  return (
    <Container className="my-3">
      <h1 className="mb-3">Dane medyczne</h1>
      <BloodTypeForm id={blood.id} bloodType={blood.bloodType} rhType={blood.rhType} />
      <AllergyTable data={allergies} loading={isloading} />
      <MedicalConditionTable data={conditions} loading={isloading} />
    </Container>
  );
};

export default MedicalData;
