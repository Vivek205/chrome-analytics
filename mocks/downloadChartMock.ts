import { LineChartData } from "@/components/LineChart/types";

const downloadChartMock: LineChartData = {
  xAxisDataKey: "month",
  yAxisDataKey: "desktop",
  values: [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ],
};

export const getDownloadChartMock = () => Promise.resolve(downloadChartMock);
