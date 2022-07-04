import { Margin } from "recharts/types/util/types";
import { CategoricalChartFunc } from "recharts/types/chart/generateCategoricalChart";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { PieChart as Inner, Pie, Tooltip, Legend } from "recharts";

export interface PieChartData {
  name: string,
  value: number,
  fill: string
}

export interface PieChartParams {
  width: number,
  height: number,
  data: PieChartData[],
  tooltip?: boolean,
  legend?: boolean,
  syncId?: string | number,
  margin?: Margin,
  onClick?: CategoricalChartFunc,
  label?: boolean
}

const PieChart = (props: Readonly<PieChartParams>) => {
  const darkMode = useDarkMode();
  const stroke = darkMode ? "var(--dark-text)" : "var(--light-text)";

  return (
    <Inner width={props.width} height={props.height} syncId={props.syncId} margin={props.margin} onClick={props.onClick}>
      <Pie data={props.data} nameKey="name" dataKey="value" cx="50%" cy="50%" label={props.label} />
      {props.tooltip ? <Tooltip wrapperClassName={`bg-${darkMode ? "dark" : "light"}`} itemStyle={{color: stroke}} cursor={{stroke: stroke}} /> : ""}
      {props.legend ? <Legend /> : ""}
    </Inner>
  );
};

export default PieChart;
