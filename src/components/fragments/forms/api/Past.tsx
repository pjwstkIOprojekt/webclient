import { RawTextControlParams } from "../sharedFormsParams";
import { useState, ChangeEvent } from "react";
import FormControl from "../FormControl";

const Past = (props: Readonly<RawTextControlParams>) => {
  const [error, setError] = useState(props.error);

  const onUpdate = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (value && new Date(value) >= new Date(Date.now())) {
      setError("Można podać tylko datę w przeszłości");
      return;      
    }

    if (props.onChange) {
      props.onChange(e);
    }
  };

  return <FormControl type="date" error={error} onChange={onUpdate} {...props} />;
};

export default Past;
