import { BreadcrumbsSkeleton } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Extension Details Hero Skeleton
const ExtensionDetailsHeroSkeleton = () => {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl opacity-60"></div>

      {/* Content */}
      <div className="relative flex items-center justify-between p-6">
        <div className="flex items-center space-x-3">
          {/* Icon */}
          <Skeleton className="w-10 h-10 rounded-lg" />
          
          {/* Title and Details */}
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
        </div>

        {/* Extension ID Badge */}
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
    </div>
  );
};

// Basic Info Skeleton - matches the BasicInfo component structure
const BasicInfoSkeleton = () => {
  return (
    <Card className="md:w-auto min-w-2xs bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-0 shadow-lg">
      <CardContent className="space-y-3">
        <div className="flex items-center gap-3 pb-2">
          <Skeleton className="w-9 h-9 rounded-lg" />
          <Skeleton className="h-6 w-32" />
        </div>

        {/* Users Section */}
        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <Skeleton className="w-8 h-8 rounded-lg" />
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
        </div>

        {/* Rating Section */}
        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <Skeleton className="w-8 h-8 rounded-lg" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-8" />
            <Skeleton className="h-4 w-4" />
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Skeleton key={star} className="h-3 w-3" />
              ))}
            </div>
          </div>
        </div>

        {/* Version Section */}
        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <Skeleton className="w-8 h-8 rounded-lg" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>

        {/* URL Section */}
        <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <Skeleton className="w-8 h-8 rounded-lg" />
            <Skeleton className="h-4 w-8" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-3 w-3" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Line Chart Skeleton - matches the LineChart component structure
const LineChartSkeleton = () => {
  return (
    <Card className="w-96">
      <CardHeader>
        <Skeleton className="h-6 w-24 mb-2" />
        <Skeleton className="h-4 w-48" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-64 w-full rounded-lg" />
      </CardContent>
    </Card>
  );
};

export default function Loading() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-2 items-center">
        <BreadcrumbsSkeleton />
      </div>
      
      <ExtensionDetailsHeroSkeleton />
      
      <div className="flex">
        <BasicInfoSkeleton />
      </div>

      <div className="flex flex-wrap gap-4">
        <LineChartSkeleton />
        <LineChartSkeleton />
      </div>
    </div>
  );
}
