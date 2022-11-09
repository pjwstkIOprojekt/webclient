import { ChartBaseParams, NamedChartData, customStroke } from "./sharedChartParams";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { RadialBarChart as Inner, RadialBar, Tooltip, Legend } from "recharts";
import { customTheme } from "../sharedParams";
import { useTranslation } from "react-i18next";

export interface RadialBarChartParams extends ChartBaseParams<NamedChartData> {
  startAngle?: number,
  endAngle?: number,
  labelFill?: string,
  background?: boolean
}

const RadialBarChart = (props: Readonly<RadialBarChartParams>) => {
  const darkMode = useDarkMode();
  const stroke = customStroke(darkMode);
  const { t } = useTranslation();

  const data = props.data.map(x => {
    return {
      name: x.name,
      value: x.value,
      fill: darkMode ? x.fillDark : x.fill
    };
  });

  return (
    <Inner width={props.width} height={props.height} data={data} syncId={props.syncId} margin={props.margin} onClick={props.onClick} startAngle={props.startAngle} endAngle={props.endAngle} innerRadius="20%" outerRadius="80%">
      <RadialBar label={{
        fill: props.labelFill,
        position: "insideStart"
      }} background={props.background} dataKey="value" name={t('Value')} />
      {props.tooltip ? <Tooltip wrapperClassName={`bg-${customTheme(darkMode)}`} itemStyle={{
        color: stroke
      }} cursor={{
        stroke: stroke
      }} /> : ""}
      {props.legend ? <Legend /> : ""}
    </Inner>
  );
};

export default RadialBarChart;
