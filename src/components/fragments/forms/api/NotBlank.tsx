import { ChangeEventHandler } from "react";
import FormControl from "../FormControl";

export interface NotBlankParams {
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

const NotBlank = (props: Readonly<NotBlankParams>) => {
  return <FormControl maxLength={100} pattern="\\S+" {...props} />;
};

export default NotBlank;
