import { DateControlParams } from "../sharedFormsParams";
import { useState, ChangeEvent } from "react";
import Dat from "./Date";

const Past = (props: Readonly<DateControlParams>) => {
  const [error, setError] = useState(props.error);

  const onUpdate = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setError(props.error);
    const value = e.target.value;

    if (value && new Date(value) >= new Date(Date.now())) {
      setError("Można podać tylko datę w przeszłości.");
      return;      
    }

    if (props.onChange) {
      props.onChange(e);
    }
  };

  const args = {...props};
  delete args.error;
  delete args.onChange;
  return <Dat error={error} onChange={onUpdate} {...args} />;
};

export default Past;
