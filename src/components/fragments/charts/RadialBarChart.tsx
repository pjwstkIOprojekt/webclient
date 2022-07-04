import { Margin } from "recharts/types/util/types";
import { CategoricalChartFunc } from "recharts/types/chart/generateCategoricalChart";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { RadialBarChart as Inner, RadialBar, Tooltip, Legend } from "recharts";

export interface RadialBarChartData {
  name: string,
  value: number,
  fill: string
}

export interface RadialBarChartParams {
  width: number,
  height: number,
  data: RadialBarChartData[],
  tooltip?: boolean,
  legend?: boolean,
  syncId?: string | number,
  margin?: Margin,
  onClick?: CategoricalChartFunc,
  startAngle?: number,
  endAngle?: number,
  labelFill?: string,
  background?: boolean
}

const RadialBarChart = (props: Readonly<RadialBarChartParams>) => {
  const darkMode = useDarkMode();
  const stroke = darkMode ? "var(--dark-text)" : "var(--light-text)";

  return (
    <Inner width={props.width} height={props.height} data={props.data} syncId={props.syncId} margin={props.margin} onClick={props.onClick} startAngle={props.startAngle} endAngle={props.endAngle} innerRadius="20%" outerRadius="80%">
      <RadialBar label={{fill: props.labelFill, position: "insideStart"}} background={props.background} dataKey="value" name="Wartość" />
      {props.tooltip ? <Tooltip wrapperClassName={`bg-${darkMode ? "dark" : "light"}`} itemStyle={{color: stroke}} cursor={{stroke: stroke}} /> : ""}
      {props.legend ? <Legend /> : ""}
    </Inner>
  );
};

export default RadialBarChart;
