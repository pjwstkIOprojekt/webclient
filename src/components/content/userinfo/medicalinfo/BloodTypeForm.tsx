import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { userEmailError, unknownError, networkError, errorHeader } from "../../sharedStrings";
import { getEmail } from "../../../../helpers/authHelper";
import { updateBlood } from "../../../../api/medicalInfoCalls";
import Form from "../../../fragments/forms/Form";
import EnumRadio from "../../../fragments/forms/api/EnumRadio";
import { BloodType, RhType } from "../../../../api/enumCalls";
import Button from "../../../fragments/util/Button";
import { Alert } from "react-bootstrap";

export interface Blood {
  id?: number,
  bloodType?: string,
  rhType?: string
}

const BloodTypeForm = (props: Readonly<Blood>) => {
  const [group, setGroup] = useState(props.bloodType);
  const [rh, setRh] = useState(props.rhType);
  const [readOnly, setReadOnly] = useState(true);
  const [error, setError] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    setGroup(props.bloodType);
    setRh(props.rhType);
  }, [props.bloodType, props.rhType]);

  const reset = (message?: string) => {
    if (message) {
      console.error(message);
    }

    setGroup(props.bloodType);
    setRh(props.rhType);
    setReadOnly(true);
  };

  const onSubmit = () => {
    setError("");

    if (readOnly) {
      setReadOnly(false);
      return;
    }

    if (!group || !rh) {
      return;
    }

    if (group === props.bloodType && rh === props.rhType) {
      setReadOnly(true);
      return;
    }

    if (!props.id) {
      reset("Blood is undefined. Check server responses for more info.");
      return;
    }

    const email = getEmail();

    if (!email) {
      reset(userEmailError);
      return;
    }

    updateBlood(props.id, {
      userEmail: email,
      bloodType: group,
      rhType: rh
    }).then(res => {
      if (res.ok) {
        setReadOnly(true);
      } else {
        console.log(res);
        setError(unknownError);
      }
    }).catch(err => {
      console.error(err);
      setError(networkError);
    });
  };

  const getError = (x?: string) => !readOnly && !x ? t("Error.EmptyValue") : undefined;

  return (
    <Form onSubmit={onSubmit}>
      <div className="mb-3">
        <h3>{t("Blood.Type")}</h3>
        <div>
          <EnumRadio labelClass="p-3" label={t("Blood.Type")} required enum={BloodType} onChange={e => setGroup(e.target.value)} value={group} disabled={readOnly} error={getError(group)} />
        </div>
        <div>
          <EnumRadio labelClass="p-3" label={t("Blood.Rh")} required enum={RhType} onChange={e => setRh(e.target.value)} value={rh} disabled={readOnly} error={getError(rh)} />
        </div>
        {error ? (
          <Alert variant="danger" className="w-25">
            <Alert.Heading>{t(errorHeader)}</Alert.Heading>
            <p>{t(error)}</p>
          </Alert>
        ) : ""}
        <Button type="submit">{readOnly ? t("Common.Edit") : t("Common.Save")}</Button>
        {readOnly ? "" : <Button type="button" onClick={e => reset()} className="mx-3">{t("Common.Cancel")}</Button>}
      </div>
    </Form>
  );
};

export default BloodTypeForm;
