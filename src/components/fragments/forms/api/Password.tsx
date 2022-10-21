import { ChangeEventHandler } from "react";
import FormControl from "../FormControl";

export interface PasswordParams {
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

const Password = (props: Readonly<PasswordParams>) => {
  return <FormControl maxLength={100} pattern="\\S+" type="password" {...props} />;
};

export default Password;
