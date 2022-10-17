import { useDarkMode } from "../../../hooks/useDarkMode";

export interface CircleParams {
  value: number,
  name?: string,
  className?: string,
  nameClass?: string,
  valueClass?: string
}

const StatsCircle = (props: Readonly<CircleParams>) => {
  const darkMode = useDarkMode();
  return (
    <div className={`circle circle-${darkMode ? "dark" : "light"} ${props.className}`}>
      <span className={`circle-title ${props.nameClass ?? ""}`}>{props.name}</span>
      <br />
      <br />
      <span className={props.valueClass}>{props.value}</span>
    </div>
  );
};

export default StatsCircle;
