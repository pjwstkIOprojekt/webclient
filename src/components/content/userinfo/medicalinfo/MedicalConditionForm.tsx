import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDiseaseById, DiseaseResponse, createDisease, updateDisease } from "../../../../api/diseaseCalls";
import { getEmail } from "../../../../helpers/authHelper";
import { Container, Alert } from "react-bootstrap";
import Form from "../../../fragments/forms/Form";
import NotBlank from "../../../fragments/forms/api/NotBlank";
import FormCheck from "../../../fragments/forms/FormCheck";
import Button from "../../../fragments/util/Button";
import NavButton from "../../../fragments/navigation/NavButton";
import { useTranslation } from "react-i18next";

const MedicalConditionForm = () => {
  const [diseaseName, setDiseaseName] = useState("");
  const [description, setDescription] = useState("");
  const [share, setShare] = useState(false);
  const [error, setError] = useState("");
  const { diseaseId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation("jezyk");

  useEffect(() => {
    if (diseaseId !== undefined) {
      getDiseaseById(parseInt(diseaseId)).then(res => res.json()).then((data: DiseaseResponse) => {
        if (data.description && data.diseaseName) {
          setDiseaseName(data.diseaseName);
          setDescription(data.description);
          setShare(data.shareWithBand === true);
        } else {
          setError("Nastąpił problem z wczytaniem danych. Spróbuj ponownie.");
        }
      }).catch(err => {
        console.error(err);
        setError("Nastąpił problem z wczytaniem danych. Spróbuj ponownie.");
      });
    }
  }, [diseaseId]);

  const onSubmit = () => {
    setError("");
    const email = getEmail();

    if (!email) {
      console.error("User email is undefined. Check Session Storage and verify that user is actually logged in.");
      return;
    }

    const disease = {
      userEmail: email,
      diseaseName: diseaseName,
      description: description,
      shareWithBand: share
    };

    (diseaseId === undefined ? createDisease(disease) : updateDisease(parseInt(diseaseId), disease)).then(res => {
      if (res.status === 200) {
        navigate("../medicaldata");
      } else {
        console.log(res);
        setError("Wystąpił nieznany błąd. Spróbuj ponownie.");
      }
    }).catch(err => {
      console.error(err);
      setError("Wystąpił nieznany błąd. Spróbuj ponownie.");
    });
  };

  return (
    <Container className="my-3">
      <h1 className="mb-3">{diseaseId === undefined ? "Dodawanie choroby" : "Edycja choroby"}</h1>
      <Form onSubmit={onSubmit}>
        <NotBlank id="diseaseName" className="mb-3" label={t('Name')} required value={diseaseName} onChange={e => setDiseaseName(e.target.value)} />
        <NotBlank id="description" className="mb-3" label={t('Reports.Description')} required value={description} onChange={e => setDescription(e.target.value)} />
        <FormCheck id="shareWithBand" className="mb-3" label={t('FromBand')} value={share} onChange={e => setShare(!share)} />
        <Button className="m-2" type="submit">{diseaseId === undefined ? "Dodaj chorobę" : "Zapisz zmiany"}</Button>
        <NavButton to="../medicaldata">{t('Cancel')}</NavButton>
        {error ? (
          <Alert variant="danger" className="mt-3">
            <Alert.Heading>{t('Error.Error')}</Alert.Heading>
            <p>{error}</p>
          </Alert>
        ) : ""}
      </Form>
    </Container>
  );
};

export default MedicalConditionForm;
