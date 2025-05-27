"use client";
import { InfoCard } from "@/components/InfoCard/InfoCard";
import { LineChart } from "@/components/LineChart/LineChart";
import { getDownloadChartMock } from "@/mocks/downloadChartMock";
import { getInfoDataMock } from "@/mocks/infoDataMock";
import { getRatingsChartMock } from "@/mocks/ratingsChartMock";
import { DownloadCloudIcon } from "lucide-react";
import { useUser } from "@stackframe/stack";

export default async function Dashboard() {
  const loggedIn = useUser({ or: "redirect" });
  console.log(loggedIn);
  const infoData = await getInfoDataMock();
  const downloadChartData = await getDownloadChartMock();
  const ratingsChartData = await getRatingsChartMock();

  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {infoData.map((item) => (
          <InfoCard
            key={item.id}
            title={item.title}
            value={item.value}
            growthChange={item.growthChange}
            icon={DownloadCloudIcon}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <div className="w-lg mt-2">
          <LineChart
            title="Download Trends"
            description="Monthly download statistics"
            data={downloadChartData}
            chartConfig={{
              desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
            }}
          />
        </div>
        <div className="w-lg mt-2">
          <LineChart
            title="Ratings Chart"
            description="Monthly Ratings Analysis"
            data={ratingsChartData}
            chartConfig={{
              desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
            }}
          />
        </div>
      </div>
    </div>
  );
}
