import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getDiseaseById, DiseaseResponse, createDisease, updateDisease } from "../../../../api/diseaseCalls";
import { loadingError, userEmailError, unknownError, errorHeader } from "../../sharedStrings";
import { getEmail } from "../../../../helpers/authHelper";
import { Container, Alert } from "react-bootstrap";
import Form from "../../../fragments/forms/Form";
import NotBlank from "../../../fragments/forms/api/NotBlank";
import FormCheck from "../../../fragments/forms/FormCheck";
import Button from "../../../fragments/util/Button";
import NavButton from "../../../fragments/navigation/NavButton";

const MedicalConditionForm = () => {
  const [diseaseName, setDiseaseName] = useState("");
  const [description, setDescription] = useState("");
  const [share, setShare] = useState(false);
  const [error, setError] = useState("");
  const { diseaseId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (diseaseId !== undefined) {
      getDiseaseById(parseInt(diseaseId)).then(res => res.json()).then((data: DiseaseResponse) => {
        if (data.description && data.diseaseName) {
          setDiseaseName(data.diseaseName);
          setDescription(data.description);
          setShare(data.shareWithBand === true);
        } else {
          setError(loadingError);
        }
      }).catch(err => {
        console.error(err);
        setError(loadingError);
      });
    }
  }, [diseaseId]);

  const onSubmit = () => {
    setError("");
    const email = getEmail();

    if (!email) {
      console.error(userEmailError);
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
        setError(unknownError);
      }
    }).catch(err => {
      console.error(err);
      setError(unknownError);
    });
  };

  return (
    <Container className="my-3">
      <h1 className="mb-3">{diseaseId === undefined ? t("AddDisease") : t("EditDisease")}</h1>
      <Form onSubmit={onSubmit}>
        <NotBlank id="diseaseName" className="mb-3" label={t("Name")} required value={diseaseName} onChange={e => setDiseaseName(e.target.value)} />
        <NotBlank id="description" className="mb-3" label={t("Reports.Description")} required value={description} onChange={e => setDescription(e.target.value)} />
        <FormCheck id="shareWithBand" className="mb-3" label={t("FromBand")} value={share} onChange={e => setShare(!share)} />
        <Button className="m-2" type="submit">{diseaseId === undefined ? t("Add") : t("Save")}</Button>
        <NavButton to="../medicaldata">{t("Cancel")}</NavButton>
        {error ? (
          <Alert variant="danger" className="mt-3">
            <Alert.Heading>{t(errorHeader)}</Alert.Heading>
            <p>{t(error)}</p>
          </Alert>
        ) : ""}
      </Form>
    </Container>
  );
};

export default MedicalConditionForm;
