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
import { TrendingUp } from "lucide-react";

export const LineChart: FC<LineChartProps> = ({
  title,
  description,
  data,
  chartConfig,
}) => (
  <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.01] border-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    
    {/* Animated background pattern */}
    <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:20px_20px] animate-pulse" />
    </div>

    <CardHeader className="relative z-10 pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Icon with gradient background */}
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          
          <div>
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              {title}
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mt-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              {description}
            </CardDescription>
          </div>
        </div>
        
        {/* Subtle indicator */}
        <div className="hidden group-hover:block transition-all duration-300">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
        </div>
      </div>
    </CardHeader>
    
    <CardContent className="relative z-10 pt-0">
      <div className="relative">
        {/* Chart container with enhanced styling */}
        <ChartContainer 
          config={chartConfig} 
          className="min-h-[200px] w-full relative overflow-hidden"
        >
          <LineChartRe 
            data={data.values} 
            margin={{ left: 0, right: 8, top: 5, bottom: 5 }}
            className="group/chart"
            width={undefined}
            height={200}
          >
            <CartesianGrid 
              vertical={false} 
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              opacity={0.3}
            />
            <XAxis
              dataKey={data.xAxisDataKey}
              axisLine={false}
              padding={{ left: 10, right: 10 }}
              tickLine={false}
              tickMargin={6}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{ 
                fontSize: 11, 
                fill: "hsl(var(--muted-foreground))",
                fontWeight: 500 
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <YAxis
              axisLine={false}
              width={35}
              domain={[
                data.yAxisMinValue ?? "dataMin",
                data.yAxisMaxValue ?? "auto",
              ]}
              max={data.yAxisMaxValue}
              tick={{ 
                fontSize: 11, 
                fill: "hsl(var(--muted-foreground))",
                fontWeight: 500 
              }}
            />
            <Line
              dataKey={data.yAxisDataKey}
              type="natural"
              stroke="url(#lineGradient)"
              strokeWidth={3}
              dot={{ 
                fill: "hsl(var(--line-chart-stroke))",
                strokeWidth: 2,
                stroke: "white",
                r: 4,
                className: "transition-all duration-200 hover:r-6"
              }}
              activeDot={{ 
                r: 8,
                fill: "hsl(var(--line-chart-stroke))",
                stroke: "white",
                strokeWidth: 3,
                className: "animate-pulse"
              }}
            />
            
            {/* Gradient definition for the line */}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </LineChartRe>
        </ChartContainer>
        
        {/* Subtle glow effect behind chart */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
      </div>
    </CardContent>
  </Card>
);
