import { BreadcrumbsSkeleton } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const InfoCardSkeleton = () => {
  return (
    <Card className="md:w-auto min-w-2xs">
      <CardHeader>
        <Skeleton className="h-5 w-20" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Skeleton className="h-5 w-14" />
          <Skeleton className="h-5 w-20" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-5 w-14" />
          <Skeleton className="h-5 w-20" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-5 w-14" />
          <Skeleton className="h-5 w-20" />
        </div>
      </CardContent>
    </Card>
  );
};

export const LineChartSkeleton = () => {
  return (
    <Card className="w-96">
      <CardHeader>
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-5 w-20" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
      </CardContent>
    </Card>
  );
};

export default function Loading() {
  return (
    <div>
      <BreadcrumbsSkeleton />
      <div className="mt-4 flex">
        <InfoCardSkeleton />
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        <LineChartSkeleton />
        <LineChartSkeleton />
      </div>
    </div>
  );
}
