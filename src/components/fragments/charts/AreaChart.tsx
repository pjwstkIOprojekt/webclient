import { CurveType } from "recharts/types/shape/Curve";
import { Margin } from "recharts/types/util/types";
import { CategoricalChartFunc } from "recharts/types/chart/generateCategoricalChart";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { AreaChart as Inner, CartesianGrid, XAxis, YAxis, Tooltip, Area, Legend } from "recharts";

export interface AreaChartData {
  key: string,
  values: Record<string, number | number[]>
}

export interface AreaChartSetting {
  key: string
  stroke?: string,
  fill?: string,
  opacity?: string | number,
  type?: CurveType
}

export interface AreaChartParams {
  width: number,
  height: number,
  data: AreaChartData[],
  settings: AreaChartSetting[],
  tooltip?: boolean,
  legend?: boolean,
  grid?: boolean,
  syncId?: string | number,
  margin?: Margin,
  onClick?: CategoricalChartFunc
}

const AreaChart = (props: Readonly<AreaChartParams>) => {
  const darkMode = useDarkMode();
  const stroke = darkMode ? "var(--dark-text)" : "var(--light-text)";

  return (
    <Inner width={props.width} height={props.height} data={props.data} syncId={props.syncId} margin={props.margin} onClick={props.onClick}>
      {props.grid ? <CartesianGrid strokeDasharray="3 3" stroke={stroke} /> : ""}
      <XAxis dataKey="key" stroke={stroke} />
      <YAxis stroke={stroke} />
      {props.tooltip ? <Tooltip wrapperClassName={`bg-${darkMode ? "dark" : "light"}`} cursor={{stroke: stroke}} /> : ""}
      {props.settings.map((set, index) => <Area dataKey={`values.${set.key}`} type={set.type} stroke={set.stroke} fill={set.fill} fillOpacity={set.opacity} key={index} name={set.key} />)}
      {props.legend ? <Legend /> : ""}
    </Inner>
  );
};

export default AreaChart;
