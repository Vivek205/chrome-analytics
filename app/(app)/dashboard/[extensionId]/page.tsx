import { auth } from "@/auth";
import { InfoCard } from "@/components/InfoCard/InfoCard";
import { LineChart } from "@/components/LineChart/LineChart";
import { LineChartData } from "@/components/LineChart/types";
import { formatDateDDMM } from "@/lib/date";
import { getExtensionMetrics } from "@/services/extensionMetrics.service";
import { getExtensionDetails } from "@/services/extensions.service";
import { checkIfUserHasAddedExtension } from "@/services/userExtensions.service";
import { StarIcon, Users } from "lucide-react";

type ExtensionPageProps = {
  params: Promise<{ extensionId: string }>;
};
export default async function ExtensionPage({ params }: ExtensionPageProps) {
  const { extensionId } = await params;
  const session = await auth();
  if (!session?.user?.id) {
    return <div>Please log in to view extension details.</div>;
  }
  const hasUserAddedExtension = await checkIfUserHasAddedExtension(
    session.user.id,
    extensionId
  );
  if (!hasUserAddedExtension) {
    return <div>You have not added this extension.</div>;
  }
  const extensionDetails = await getExtensionDetails(extensionId);
  const extensionMetrics = await getExtensionMetrics(extensionId);

  const latestMetrics = extensionMetrics.at(-1);

  const ratingsChartData: LineChartData = {
    xAxisDataKey: "date",
    yAxisDataKey: "downloads",
    values: extensionMetrics.map((metric) => ({
      date: formatDateDDMM(metric.scrapedAt),
      downloads: metric.ratingsValue ?? 0,
    })),
  };

  const activeUsersChartData: LineChartData = {
    xAxisDataKey: "date",
    yAxisDataKey: "activeUsers",
    values: extensionMetrics.map((metric) => ({
      date: formatDateDDMM(metric.scrapedAt),
      activeUsers: metric.activeUsers ?? 0,
    })),
  };

  // TODO: The date is not displayed correctly in the chart, fix it later

  return (
    <div>
      <h2 className="text-xl font-semibold pb-2">
        Extension: {extensionDetails?.name}
      </h2>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 flex-wrap">
          <InfoCard
            title={"Active Users"}
            value={`${latestMetrics?.activeUsers?.toString() || "0"} users`}
            icon={Users}
          />
          <InfoCard
            title={"Ratings"}
            value={`${latestMetrics?.ratingsValue?.toString() || "0"}/5 (${
              latestMetrics?.ratingsCount
            } ratings)`}
            icon={StarIcon}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <LineChart
            title="Ratings"
            description="Monthly Ratings Analysis"
            data={ratingsChartData}
            chartConfig={{
              desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
            }}
          />
          <LineChart
            title="Active Users"
            description="Analysis of Active Users Over Time"
            data={activeUsersChartData}
            chartConfig={{
              desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
            }}
          />
        </div>
      </div>
    </div>
  );
}
