import { RawTextControlParams } from "../sharedFormsParams";
import FormControl from "../FormControl";

export interface LengthParams extends RawTextControlParams {
  length: number
}

const Length = (props: Readonly<LengthParams>) => {
  return <FormControl pattern={`\S{${props.length}}`} {...props} />;
};

export default Length;
