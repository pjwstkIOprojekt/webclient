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
      <span className="circle-title">{props.name}</span>
      <br />
      <br />
      {props.value}
    </div>
  );
};

export default StatsCircle;
