import { BareBonesChartParams, customStroke } from "./sharedChartParams";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { PieChart, Pie } from "recharts";

export interface ProgressColor {
  r: number,
  g: number,
  b: number
}

export interface ProgressChartParams extends BareBonesChartParams {
  value: number,
  innerRadius: string | number,
  color: ProgressColor,
  label?: boolean
}

const ProgressChart = (props: Readonly<ProgressChartParams>) => {
  const darkMode = useDarkMode();
  const value = props.value > 100 ? 100 : (props.value < 0 ? 0 : props.value);
  const stroke = customStroke(darkMode);

  const data = [
    { name: "Full", value: value, fill: `rgb(${props.color.r},${props.color.g},${props.color.b})` },
    { name: "Empty", value: 100 - value, fill: `rgba(${props.color.r},${props.color.g},${props.color.b},0.2)` }
  ];

  return (
    <PieChart width={props.width} height={props.height} syncId={props.syncId} margin={props.margin} onClick={props.onClick}>
      <Pie data={data} nameKey="name" dataKey="value" cx="50%" cy="50%" innerRadius={props.innerRadius} />
      {props.label ? (
        <text x={props.width / 2} y={props.height / 2} textAnchor="middle" dominantBaseline="middle" fill={stroke} fontSize={props.width / 8}>
          {value} %
        </text>
      ) : ""}
    </PieChart>
  );
};

export default ProgressChart;
