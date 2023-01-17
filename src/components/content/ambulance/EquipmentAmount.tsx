import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Form from "../../fragments/forms/Form";
import { Row } from "react-bootstrap";
import Number from "../../fragments/forms/api/Number";
import Submit from "../../fragments/forms/Submit";
import Button from "../../fragments/util/Button";

interface AmountParams {
  amount: number,
  unit: string,
  editing: boolean,
  processing: boolean,
  update: (diff?: number, unit?: string) => void
}

const EquipmentAmount = (props: Readonly<AmountParams>) => {
	const [newAmount, setNewAmount] = useState(props.amount);
  const { t } = useTranslation();

	useEffect(() => {
    if (!props.editing) {
      setNewAmount(props.amount);
    }
  }, [props.amount, props.editing]);

  const onSubmit = () => {
    if (!props.editing || newAmount === props.amount) {
      props.update();
      return;
    }

    props.update(newAmount - props.amount);
  };

	return (
		<Form onSubmit={onSubmit}>
			<Row xs="2" className="justify-content-center">
				{props.editing && !props.processing ? <Number required value={newAmount} onChange={e => setNewAmount(parseFloat(e.target.value))} minValue="0" /> : props.amount}
         {props.unit}
			</Row>
      <Row xs="2" className="justify-content-center">
        <Submit className="my-3 w-25" canSubmit={!props.processing}>{t(`Common.${props.editing ? "SaveChanges" : "Edit"}`)}</Submit>
        {props.editing && !props.processing ? <Button className="mx-1 my-3 w-25" onClick={e => props.update()}>{t("Common.Cancel")}</Button> : ""}
      </Row>
		</Form>
	);
};

export default EquipmentAmount;
