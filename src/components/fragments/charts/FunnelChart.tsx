import { Margin } from "recharts/types/util/types";
import { CategoricalChartFunc } from "recharts/types/chart/generateCategoricalChart";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { FunnelChart as Inner, Funnel, LabelList, Tooltip } from "recharts";

export interface FunnelChartData {
  name: string,
  value: number,
  fill: string,
  fillDark: string
}

export interface FunnelChartParams {
  width: number,
  height: number,
  data: FunnelChartData[],
  tooltip?: boolean,
  legend?: boolean,
  syncId?: string | number,
  margin?: Margin,
  onClick?: CategoricalChartFunc,
  animation?: boolean,
  legendOnLeft?: boolean
}

const FunnelChart = (props: Readonly<FunnelChartParams>) => {
  const darkMode = useDarkMode();
  const stroke = darkMode ? "var(--dark-text)" : "var(--light-text)";

  const data = props.data.map(x => {
    return {
      name: x.name,
      value: x.value,
      fill: darkMode ? x.fillDark : x.fill
    };
  });

  return (
    <Inner width={props.width} height={props.height} syncId={props.syncId} margin={props.margin} onClick={props.onClick}>
      <Funnel data={data} nameKey="name" dataKey="value" isAnimationActive={props.animation}>
        {props.legend ? <LabelList position={props.legendOnLeft ? "left" : "right"} fill={stroke} stroke="none" dataKey="name" /> : ""}
      </Funnel>
      {props.tooltip ? <Tooltip wrapperClassName={`bg-${darkMode ? "dark" : "light"}`} itemStyle={{
        color: stroke
      }} cursor={{
        stroke: stroke
      }} /> : ""}
    </Inner>
  );
};

export default FunnelChart;
