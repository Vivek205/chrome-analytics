import { Skeleton } from "@/components/ui/skeleton";

export const BreadcrumbsSkeleton = () => {
  return (
    <nav className="flex items-center gap-1 text-sm">
      {/* Home icon skeleton */}
      <div className="flex items-center">
        <Skeleton className="h-3 w-3 rounded" />
        <Skeleton className="ml-1.5 h-4 w-12 rounded" />
      </div>
      
      {/* Chevron separator */}
      <div className="flex items-center">
        <Skeleton className="mx-1.5 h-3 w-3 rounded" />
      </div>
      
      {/* Second breadcrumb item */}
      <div className="flex items-center">
        <Skeleton className="h-4 w-16 rounded" />
      </div>
      
      {/* Chevron separator */}
      <div className="flex items-center">
        <Skeleton className="mx-1.5 h-3 w-3 rounded" />
      </div>
      
      {/* Third breadcrumb item (current) */}
      <div className="flex items-center">
        <Skeleton className="h-4 w-20 rounded" />
      </div>
    </nav>
  );
}; 