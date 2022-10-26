import { NumberControlParams } from "../sharedFormsParams";
import FormControl from "../FormControl";

const Number = (props: Readonly<NumberControlParams>) => {
  return <FormControl type="number" {...props} />;
};

export default Number;
