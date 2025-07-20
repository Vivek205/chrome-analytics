import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";

type BasicInfoProps = {
  latestMetrics: any;
  extensionDetails: any;
};

export function BasicInfo({
  latestMetrics,
  extensionDetails,
}: BasicInfoProps) {
  return (
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
  );
}
