import { RawTextControlParams } from "../sharedFormsParams";
import FormControl from "../FormControl";

const Email = (props: Readonly<RawTextControlParams>) => {
  return <FormControl maxLength={100} type="email" {...props} />;
};

export default Email;
