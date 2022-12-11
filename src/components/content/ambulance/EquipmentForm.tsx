import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ItemType } from "../../../api/enumCalls";
import { ItemRequest, createItem } from "../../../api/itemCalls";
import { unknownError, networkError } from "../sharedStrings";
import Form from "../../fragments/forms/Form";
import { Row } from "react-bootstrap";
import EnumSelect from "../../fragments/forms/api/EnumSelect";
import NotBlank from "../../fragments/forms/api/NotBlank";
import InDate from "../../fragments/forms/api/Date";
import Submit from "../../fragments/forms/Submit";
import Error from "../../fragments/forms/Error";

const EquipmentForm = () => {
	const [type, setType] = useState("");
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [manu, setManu] = useState("");
	const [exp, setExp] = useState("");
	const [error, setError] = useState<string | undefined>("");
	const { t } = useTranslation();
	const navigate = useNavigate();
	const single = type === ItemType.singleUse;
  const multi = type === ItemType.multiUse;
	const medical = type === ItemType.medical;

	const onSubmit = () => {
		setError(undefined);
		const tp = type;

		const item: ItemRequest = {
			type: tp,
			name: name
		};

    if (!multi) {
      item.description = desc;

      if (!single) {
        item.manufacturer = manu;
      }
    }

		if (medical) {
      item.expiration_date = new Date(exp);
    }

		createItem(item).then(res => {
			if (res.ok) {
				navigate("../equip");
			} else {
				console.log(res);
				setError(unknownError);
			}
		}).catch(err => {
			console.error(err);
			setError(networkError);
		});
	};

	return (
		<Form onSubmit={onSubmit} className="my-3">
			<h3 className="text-center">{t("Equipment.Adding")}</h3>
			<Row className="justify-content-center">
				<EnumSelect id="type" label={t("Equipment.Type")} className="my-3 w-50" enum={ItemType} required value={type} onChange={e => setType(e.target.value)} onLoad={setType} />
			</Row>
			<Row className="justify-content-center">
				<NotBlank id="name" label={t("Equipment.Name")} className="mb-3 w-50" required value={name} onChange={e => setName(e.target.value)} />
			</Row>
			<Row className="justify-content-center">
				<NotBlank id="description" label={t("Equipment.Description")} className="mb-3 w-50" required value={desc} onChange={e => setDesc(e.target.value)} disabled={multi} />
			</Row>
			<Row className="justify-content-center">
				<NotBlank id="manufacturer" label={t("Equipment.Manufacturer")} className="mb-3 w-50" required value={manu} onChange={e => setManu(e.target.value)} disabled={single || multi} />
			</Row>
			<Row className="justify-content-center">
				<InDate id="expirationDate" label={t("Equipment.Expiration")} className="mb-3 w-50" required value={exp} onChange={e => setExp(e.target.value)} disabled={!medical} />
			</Row>
			<Row className="justify-content-center">
				<Submit className="mb-3 w-25" canSubmit={error !== undefined}>{t("Equipment.Add")}</Submit>
			</Row>
			<Row className="mx-3 justify-content-center">
				<Error className="w-50" error={error} />
			</Row>
		</Form>
	);
};

export default EquipmentForm;
