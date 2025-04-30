"use client";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import type { LineChartProps } from "./types";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import {
  CartesianGrid,
  Line,
  LineChart as LineChartRe,
  XAxis,
  YAxis,
} from "recharts";

export const LineChart: FC<LineChartProps> = ({
  title,
  description,
  data,
  chartConfig,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <LineChartRe data={data.values} margin={{ left: 0, right: 12, top: 5 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey={data.xAxisDataKey}
            axisLine={false}
            padding={{ left: 20 }}
            tickLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          {/* TODO: Use a custom tickRenderer and calculate the width Dynamically. Set the max width */}
          <YAxis
            axisLine={false}
            width={40}
            domain={[
              data.yAxisMinValue ?? "dataMin",
              data.yAxisMaxValue ?? "auto",
            ]}
            max={data.yAxisMaxValue}
          />
          <Line
            dataKey={data.yAxisDataKey}
            type="natural"
            stroke="hsl(var(--line-chart-stroke))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--line-chart-stroke))" }}
            activeDot={{ r: 6 }}
          />
        </LineChartRe>
      </ChartContainer>
    </CardContent>
  </Card>
);
