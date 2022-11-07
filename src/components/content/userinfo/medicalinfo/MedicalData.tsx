import { useState, useEffect } from "react";
import { AllergyResponse } from "../../../../api/allergyCalls";
import { DiseaseResponse } from "../../../../api/diseaseCalls";
import { getEmail } from "../../../../helpers/authHelper";
import { getMedicalInfoByEmail, MedicalInfoResponse } from "../../../../api/medicalInfoCalls";
import { Container } from "react-bootstrap";
import BloodTypeForm, { Blood } from "./BloodTypeForm";
import AllergyTable from "./AllergyTable";
import MedicalConditionTable from "./MedicalConditionTable";
import { useTranslation } from "react-i18next";

const MedicalData = () => {
  const [blood, setBlood] = useState<Blood>({});
  const [allergies, setAllergies] = useState<AllergyResponse[]>([]);
  const [conditions, setConditions] = useState<DiseaseResponse[]>([]);
  const [isloading, setIsLoading] = useState(true);
  const { t } = useTranslation("jezyk");

  useEffect(() => {
    const email = getEmail();

    if (!email) {
      console.error(t('Error.UndefinedEmail'));
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

  const removeAllergy = (x: Readonly<AllergyResponse>) => setAllergies(allergies.filter(a => a.allergyId !== x.allergyId));
  const removeDisease = (x: Readonly<DiseaseResponse>) => setConditions(conditions.filter(c => c.diseaseId !== x.diseaseId));

  return (
    <Container className="my-3">
      <h1 className="mb-3">{t('MedicalData')}</h1>
      <BloodTypeForm id={blood.id} bloodType={blood.bloodType} rhType={blood.rhType} />
      <AllergyTable data={allergies} isLoading={isloading} onRemove={removeAllergy} />
      <MedicalConditionTable data={conditions} isLoading={isloading} onRemove={removeDisease} />
    </Container>
  );
};

export default MedicalData;
