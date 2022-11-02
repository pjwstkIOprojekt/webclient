import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllergyById, AllergyResponse, createAllergy, updateAllergy } from "../../../../api/allergyCalls";
import { getEmail } from "../../../../helpers/authHelper";
import { Container, Alert } from "react-bootstrap";
import Form from "../../../fragments/forms/Form";
import EnumSelect from "../../../fragments/forms/api/EnumSelect";
import { AllergyType } from "../../../../api/enumCalls";
import NotBlank from "../../../fragments/forms/api/NotBlank";
import Button from "../../../fragments/util/Button";
import NavButton from "../../../fragments/navigation/NavButton";
import { useTranslation } from "react-i18next";

const AllergyForm = () => {
  const [allergyType, setAllergyType] = useState("");
  const [allergyName, setAllergyName] = useState("");
  const [other, setOther] = useState("");
  const [error, setError] = useState("");
  const { allergyId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation("jezyk");

  useEffect(() => {
    if (allergyId !== undefined) {
      getAllergyById(parseInt(allergyId)).then(res => res.json()).then((data: AllergyResponse) => {
        if (data.allergyType && data.allergyName && data.other) {
          setAllergyType(data.allergyType);
          setAllergyName(data.allergyName);
          setOther(data.other);
        } else {
          setError("Nastąpił problem z wczytaniem danych. Spróbuj ponownie.");
        }
      }).catch(err => {
        console.error(err);
        setError("Nastąpił problem z wczytaniem danych. Spróbuj ponownie.");
      });
    }
  }, [allergyId]);

  const onSubmit = () => {
    setError("");
    const email = getEmail();

    if (!email) {
      console.error("User email is undefined. Check Session Storage and verify that user is actually logged in.");
      return;
    }

    const allergy = {
      userEmail: email,
      allergyType: allergyType,
      allergyName: allergyName,
      other: other
    };

    (allergyId === undefined ? createAllergy(allergy) : updateAllergy(parseInt(allergyId), allergy)).then(res => {
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
      <h1 className="mb-3">{allergyId === undefined ? "Dodawanie alergii" : "Edycja alergii"}</h1>
      <Form onSubmit={onSubmit}>
        <EnumSelect id="allergyType" className="mb-3" label={t('Allergy.Type')} required enum={AllergyType} value={allergyType} onChange={e => setAllergyType(e.target.value)} />
        <NotBlank id="allergyName" className="mb-3" label={t('Allergy.Name')} required value={allergyName} onChange={e => setAllergyName(e.target.value)} />
        <NotBlank id="other" className="mb-3" label={t('Allergy.Other')} required value={other} onChange={e => setOther(e.target.value)} />
        <Button className="m-2" type="submit">{allergyId === undefined ? "Dodaj alergię" : "Zapisz zmiany"}</Button>
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

export default AllergyForm;
