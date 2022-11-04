import { ClassNameParam, customTheme } from "../sharedParams";
import { useDarkMode } from "../../../hooks/useDarkMode";

export interface CircleParams extends ClassNameParam {
  value: number,
  name?: string,
  nameClass?: string,
  valueClass?: string
}

const StatsCircle = (props: Readonly<CircleParams>) => {
  const darkMode = useDarkMode();
  return (
    <div className={`circle circle-${customTheme(darkMode)} ${props.className}`}>
      <span className={`circle-title ${props.nameClass ?? ""}`}>{props.name}</span>
      <br />
      <br />
      <span className={props.valueClass}>{props.value}</span>
    </div>
  );
};

export default StatsCircle;
