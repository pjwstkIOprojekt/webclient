import { RawTextControlParams } from "../sharedFormsParams";
import FormControl from "../FormControl";

const NotBlank = (props: Readonly<RawTextControlParams>) => {
  return <FormControl maxLength={100} pattern=".*\S.*" {...props} />;
};

export default NotBlank;
