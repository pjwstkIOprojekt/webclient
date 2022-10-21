import { ChangeEventHandler } from "react";
import FormControl from "../FormControl";

export interface EmailParams {
  id?: string,
  className?: string,
  label?: string,
  labelClass?: string,
  innerClass?: string,
  required?: boolean,
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  value?: string | number | string[],
  placeholder?: string,
  disabled?: boolean,
  error?: string
}

const Email = (props: Readonly<EmailParams>) => {
  return <FormControl maxLength={100} type="email" {...props} />;
};

export default Email;
