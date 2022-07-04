import { Margin } from "recharts/types/util/types";
import { CategoricalChartFunc } from "recharts/types/chart/generateCategoricalChart";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { BarChart as Inner, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend } from "recharts";

export interface BarChartData {
  key: string,
  values: Record<string, number | number[]>
}

export interface BarChartSetting {
  key: string
  size?: number,
  fill?: string,
  opacity?: string | number,
  type?: string
}

export interface BarChartParams {
  width: number,
  height: number,
  data: BarChartData[],
  settings: BarChartSetting[],
  tooltip?: boolean,
  legend?: boolean,
  grid?: boolean,
  syncId?: string | number,
  margin?: Margin,
  onClick?: CategoricalChartFunc
}

const BarChart = (props: Readonly<BarChartParams>) => {
  const darkMode = useDarkMode();
  const stroke = darkMode ? "var(--dark-text)" : "var(--light-text)";

  return (
    <Inner width={props.width} height={props.height} data={props.data} syncId={props.syncId} margin={props.margin} onClick={props.onClick}>
      {props.grid ? <CartesianGrid strokeDasharray="3 3" stroke={stroke} /> : ""}
      <XAxis dataKey="key" stroke={stroke} />
      <YAxis stroke={stroke} />
      {props.tooltip ? <Tooltip wrapperClassName={`bg-${darkMode ? "dark" : "light"}`} cursor={{stroke: stroke}} /> : ""}
      {props.settings.map((set, index) => <Bar dataKey={`values.${set.key}`} type={set.type} barSize={set.size && set.size > 0 ? set.size : 25} fill={set.fill} fillOpacity={set.opacity} key={index} name={set.key} />)}
      {props.legend ? <Legend /> : ""}
    </Inner>
  );
};

export default BarChart;
