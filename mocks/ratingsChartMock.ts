import { LineChartData } from "@/components/LineChart/types";

const ratingsChartMock: LineChartData = {
  xAxisDataKey: "month",
  yAxisDataKey: "rating",
  values: [
    { month: "January", rating: 3.0 },
    { month: "February", rating: 4.5 },
    { month: "March", rating: 2.5 },
    { month: "April", rating: 4.0 },
    { month: "May", rating: 3.5 },
    { month: "June", rating: 5.0 },
  ],
};

export const getRatingsChartMock = () => Promise.resolve(ratingsChartMock);
