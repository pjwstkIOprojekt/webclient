import { RawTextControlParams } from "../sharedFormsParams";
import FormControl from "../FormControl";

const Time = (props: Readonly<RawTextControlParams>) => {
  return <FormControl type="time" {...props} />;
};

export default Time;
