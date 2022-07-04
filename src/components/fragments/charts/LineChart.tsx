import { Margin } from "recharts/types/util/types";
import { CategoricalChartFunc } from "recharts/types/chart/generateCategoricalChart";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { LineChart as Inner, CartesianGrid, XAxis, YAxis, Tooltip, Line, Legend } from "recharts";

export interface LineChartData {
  key: string,
  values: Record<string, number>
}

export interface LineChartSetting {
  key: string
  stroke?: string,
  type?: string
}

export interface LineChartParams {
  width: number,
  height: number,
  data: LineChartData[],
  settings: LineChartSetting[],
  tooltip?: boolean,
  legend?: boolean,
  grid?: boolean,
  syncId?: string | number,
  margin?: Margin,
  onClick?: CategoricalChartFunc
}

const LineChart = (props: Readonly<LineChartParams>) => {
  const darkMode = useDarkMode();
  const stroke = darkMode ? "var(--dark-text)" : "var(--light-text)";

  return (
    <Inner width={props.width} height={props.height} data={props.data} syncId={props.syncId} margin={props.margin} onClick={props.onClick}>
      {props.grid ? <CartesianGrid strokeDasharray="3 3" stroke={stroke} /> : ""}
      <XAxis dataKey="key" stroke={stroke} />
      <YAxis stroke={stroke} />
      {props.tooltip ? <Tooltip wrapperClassName={`bg-${darkMode ? "dark" : "light"}`} cursor={{stroke: stroke}} /> : ""}
      {props.settings.map((set, index) => <Line dataKey={`values.${set.key}`} type={set.type} stroke={set.stroke} key={index} name={set.key} />)}
      {props.legend ? <Legend /> : ""}
    </Inner>
  );
};

export default LineChart;
