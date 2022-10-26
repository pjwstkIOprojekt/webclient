import { NumberControlParams } from "../sharedFormsParams";
import { ChangeEvent } from "react";
import Number from "./Number";

const Integer = (props: Readonly<NumberControlParams>) => {
  const onUpdate = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.value = parseInt(e.target.value).toString();

    if (props.onChange) {
      props.onChange(e);
    }
  };

  const args = {...props};
  delete args.onChange;
  return <Number onChange={onUpdate} {...args} />;
};

export default Integer;
