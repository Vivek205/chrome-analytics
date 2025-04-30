import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { InfoCardProps } from "./types";

export const InfoCard: FC<InfoCardProps> = ({
  title,
  value,
  growthChange,
  icon: Icon,
}) => (
  <Card className="w-full md:w-auto min-w-2xs">
    <CardHeader>
      <CardTitle className="flex justify-between ">
        <p className="font-normal text-md">{title}</p>
        {<Icon />}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="font-bold text-2xl">{value}</p>
      {growthChange && <p className="text-xs">{growthChange}</p>}
    </CardContent>
  </Card>
);
