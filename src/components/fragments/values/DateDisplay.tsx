export interface DateDisplayParams {
  value: Date
}

const DateDisplay = (props: Readonly<DateDisplayParams>) => {
  return <>{props.value.toISOString().substring(0, 16).replace("T", " ")}</>;
};

export default DateDisplay;
