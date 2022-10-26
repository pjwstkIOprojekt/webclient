import { KeyParam, KeyValueChartParams, SingleKeyValueChartData } from "./sharedChartParams";
import { CurveType } from "recharts/types/shape/Curve";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { LineChart as Inner, CartesianGrid, XAxis, YAxis, Tooltip, Line, Legend } from "recharts";

export interface LineChartSettings extends KeyParam {
  stroke?: string,
  strokeDark?: string,
  type?: CurveType
}

const LineChart = (props: Readonly<KeyValueChartParams<SingleKeyValueChartData, LineChartSettings>>) => {
  const darkMode = useDarkMode();
  const stroke = darkMode ? "var(--dark-text)" : "var(--light-text)";

  return (
    <Inner width={props.width} height={props.height} data={props.data} syncId={props.syncId} margin={props.margin} onClick={props.onClick}>
      {props.grid ? <CartesianGrid strokeDasharray="3 3" stroke={stroke} /> : ""}
      <XAxis dataKey="key" stroke={stroke} />
      <YAxis stroke={stroke} />
      {props.tooltip ? <Tooltip wrapperClassName={`bg-${darkMode ? "dark" : "light"}`} cursor={{
        stroke: stroke
      }} /> : ""}
      {props.settings.map((set, index) => <Line dataKey={`values.${set.key}`} type={set.type} stroke={darkMode ? set.strokeDark : set.stroke} key={index} name={set.key} />)}
      {props.legend ? <Legend /> : ""}
    </Inner>
  );
};

export default LineChart;
