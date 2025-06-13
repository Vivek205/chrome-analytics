import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <div className="pt-4">
        <Skeleton className="h-7 w-1/3 " />
      </div>

      <div className="flex gap-4 pt-4">
        <Skeleton className="h-9 w-2/4" />
        <Skeleton className="h-9 w-1/4" />
      </div>
      <div className="flex pt-4 gap-4">
        <Card className="w-3xs">
          <CardHeader>
            <Skeleton className="h-6 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-52 w-full" />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Skeleton className="h-9 w-1/3" />
          </CardFooter>
        </Card>
        <Card className="w-3xs">
          <CardHeader>
            <Skeleton className="h-6 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-52 w-full" />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Skeleton className="h-9 w-1/3" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
