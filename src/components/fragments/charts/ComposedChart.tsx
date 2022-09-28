import { CurveType } from "recharts/types/shape/Curve";
import { Margin } from "recharts/types/util/types";
import { CategoricalChartFunc } from "recharts/types/chart/generateCategoricalChart";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Area, Bar, Line, ComposedChart as Inner, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

export interface ComposedChartData {
  key: string,
  values: Record<string, number | number[]>
}

export interface ComposedChartSetting {
  key: string,
  kind?: "area" | "bar" | "line",
  size?: number,
  stroke?: string,
  fill?: string,
  opacity?: string | number,
  type?: CurveType
}

export interface ComposedChartParams {
  width: number,
  height: number,
  data: ComposedChartData[],
  settings: ComposedChartSetting[],
  tooltip?: boolean,
  legend?: boolean,
  grid?: boolean,
  syncId?: string | number,
  margin?: Margin,
  onClick?: CategoricalChartFunc
}

const ComposedChart = (props: Readonly<ComposedChartParams>) => {
  const darkMode = useDarkMode();
  const stroke = darkMode ? "var(--dark-text)" : "var(--light-text)";

  const display = (x: ComposedChartSetting, index: number) => {
    switch (x.kind) {
      case "area":
        return <Area dataKey={`values.${x.key}`} type={x.type} stroke={x.stroke} fill={x.fill} fillOpacity={x.opacity} key={index} name={x.key} />;
      case "line":
        return <Line dataKey={`values.${x.key}`} type={x.type} stroke={x.stroke} key={index} name={x.key} />;
      default:
        return <Bar dataKey={`values.${x.key}`} type={x.type ? x.type.toString() : undefined} barSize={x.size && x.size > 0 ? x.size : 25} fill={x.fill} fillOpacity={x.opacity} key={index} name={x.key} />;
    }
  };

  return (
    <Inner width={props.width} height={props.height} data={props.data} syncId={props.syncId} margin={props.margin} onClick={props.onClick}>
      {props.grid ? <CartesianGrid strokeDasharray="3 3" stroke={stroke} /> : ""}
      <XAxis dataKey="key" stroke={stroke} />
      <YAxis stroke={stroke} />
      {props.tooltip ? <Tooltip wrapperClassName={`bg-${darkMode ? "dark" : "light"}`} cursor={{stroke: stroke}} /> : ""}
      {props.settings.map((set, index) => display(set, index))}
      {props.legend ? <Legend /> : ""}
    </Inner>
  );
};

export default ComposedChart;
