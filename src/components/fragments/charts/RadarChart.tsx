import { Margin, AxisDomain } from "recharts/types/util/types";
import { CategoricalChartFunc } from "recharts/types/chart/generateCategoricalChart";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { RadarChart as Inner, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Radar, Legend } from "recharts";

export interface RadarChartData {
  key: string,
  values: Record<string, number>
}

export interface RadarChartSetting {
  key: string,
  stroke?: string,
  fill?: string,
  fillDark?: string,
  opacity?: string | number
}

export interface RadarChartParams {
  width: number,
  height: number,
  data: RadarChartData[],
  settings: RadarChartSetting[],
  tooltip?: boolean,
  legend?: boolean,
  grid?: boolean,
  syncId?: string | number,
  margin?: Margin,
  onClick?: CategoricalChartFunc,
  innerRadius?: number,
  outerRadius?: number,
  angle?: number,
  domain?: AxisDomain
}

const RadarChart = (props: Readonly<RadarChartParams>) => {
  const darkMode = useDarkMode();
  const stroke = darkMode ? "var(--dark-text)" : "var(--light-text)";

  return (
    <Inner width={props.width} height={props.height} data={props.data} syncId={props.syncId} margin={props.margin} onClick={props.onClick} innerRadius={props.innerRadius} outerRadius={props.outerRadius}>
      {props.grid ? <PolarGrid stroke={stroke} /> : ""}
      <PolarAngleAxis dataKey="key" stroke={stroke} />
      <PolarRadiusAxis angle={props.angle} domain={props.domain} stroke={stroke} />
      {props.tooltip ? <Tooltip wrapperClassName={`bg-${darkMode ? "dark" : "light"}`} cursor={{
        stroke: stroke
      }} /> : ""}
      {props.settings.map((set, index) => <Radar dataKey={`values.${set.key}`} stroke={set.stroke} fill={darkMode ? set.fillDark : set.fill} fillOpacity={set.opacity} key={index} name={set.key} />)}
      {props.legend ? <Legend /> : ""}
    </Inner>
  );
};

export default RadarChart;
