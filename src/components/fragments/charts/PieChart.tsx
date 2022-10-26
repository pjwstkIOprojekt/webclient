import { ChartBaseParams, NamedChartData } from "./sharedChartParams";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { PieChart as Inner, Pie, Tooltip, Legend } from "recharts";

export interface PieChartParams extends ChartBaseParams<NamedChartData> {
  label?: boolean,
  innerRadius?: string | number
}

const PieChart = (props: Readonly<PieChartParams>) => {
  const darkMode = useDarkMode();
  const stroke = darkMode ? "var(--dark-text)" : "var(--light-text)";

  const data = props.data.map(x => {
    return {
      name: x.name,
      value: x.value,
      fill: darkMode ? x.fillDark : x.fill
    };
  });

  return (
    <Inner width={props.width} height={props.height} syncId={props.syncId} margin={props.margin} onClick={props.onClick}>
      <Pie data={data} nameKey="name" dataKey="value" cx="50%" cy="50%" label={props.label} innerRadius={props.innerRadius} />
      {props.tooltip ? <Tooltip wrapperClassName={`bg-${darkMode ? "dark" : "light"}`} itemStyle={{
        color: stroke
      }} cursor={{
        stroke: stroke
      }} /> : ""}
      {props.legend ? <Legend /> : ""}
    </Inner>
  );
};

export default PieChart;
