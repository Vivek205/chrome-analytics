import type { ChartConfig } from "../ui/chart";

export type LineChartValue = Record<string, string | number>;

export type LineChartData = {
  xAxisDataKey: string;
  yAxisDataKey: string;
  yAxisMinValue?: number;
  yAxisMaxValue?: number;
  values: LineChartValue[];
};

export type LineChartProps = {
  title: string;
  description: string;
  data: LineChartData;
  chartConfig: ChartConfig;
};
