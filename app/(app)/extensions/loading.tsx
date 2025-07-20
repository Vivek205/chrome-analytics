import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ExtensionsHeroSkeleton } from "@/components/ExtensionsHero/ExtensionsHeroSkeleton";

const ExtensionCardSkeleton = () => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden pt-0 h-72">
      {/* Remove Button */}
      <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/80 hover:bg-white/90 shadow-sm rounded-full">
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>

      {/* Extension Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Skeleton className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* External Link Icon */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-white/90 rounded-full p-1.5">
            <Skeleton className="h-4 w-4 rounded-full" />
          </div>
        </div>
      </div>

      <CardHeader className="pb-2 h-24 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Skeleton className="h-5 w-3/4 mb-2" />
            <div className="mt-1">
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
          </div>
        </div>
      </CardHeader>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  );
};

export default function Loading() {
  return (
    <div>
      <ExtensionsHeroSkeleton />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {new Array(5).fill(0).map((_, index) => (
          <ExtensionCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
