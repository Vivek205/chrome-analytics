import { auth } from "@/auth";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LineChart } from "@/components/LineChart/LineChart";
import { LineChartData } from "@/components/LineChart/types";
import { formatDateDDMM } from "@/lib/date";
import { getExtensionMetrics } from "@/services/extensionMetrics.service";
import { getExtensionDetails } from "@/services/extensions.service";
import { checkIfUserHasAddedExtension } from "@/services/userExtensions.service";
import { SquareArrowOutUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="flex flex-col gap-y-2">
      <div className="flex gap-2 items-center">
        <Breadcrumbs
          items={[
            { label: "Extensions", href: "/extensions" },
            { label: extensionDetails?.name || "Extension", isCurrent: true },
          ]}
        />
      </div>
      <div className="flex">
        <Card className="md:w-auto min-w-2xs">
          <CardHeader>
            <CardTitle>Current Info</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <div className="font-bold">
                <p>Users</p>
                <p>Rating</p>
                <p>Version</p>
                <p>Url</p>
              </div>
              <div>
                <p>{latestMetrics?.activeUsers}</p>
                <p>{latestMetrics?.ratingsValue} / 5</p>
                <p>1.30.2</p>
                <p>
                  <a
                    href={extensionDetails?.url}
                    target="_blank"
                    className="cursor-pointer underline text-blue-600 w-32 truncate inline-block align-bottom"
                  >
                    <span>{extensionDetails?.url}</span>
                  </a>
                  <SquareArrowOutUpRight size={14} className="inline ml-2" />
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
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
  );
}
