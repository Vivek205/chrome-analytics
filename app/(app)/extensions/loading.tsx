import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ExtensionCardSkeleton = () => {
  return (
    <Card >
      <CardHeader>
        <Skeleton className="h-6 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-52 md:h-40 lg:h-52 w-full" />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Skeleton className="h-9 w-1/3" />
      </CardFooter>
    </Card>
  );
};

export default function Loading() {
  return (
    <div>
      <div className="flex gap-4 justify-between">
        <Skeleton className="h-9 w-2/4" />
        <Skeleton className="h-9 w-40" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
       {new Array(5).fill(0).map((_, index) => (
        <ExtensionCardSkeleton key={index} />
       ))}
      </div>
    </div>
  );
}
