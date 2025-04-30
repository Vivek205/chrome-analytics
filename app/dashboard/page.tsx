import { InfoCard } from "@/components/InfoCard/InfoCard";
import { getInfoDataMock } from "@/mocks/infoDataMock";
import { DownloadCloudIcon } from "lucide-react";

export default function Dashboard() {
  const infoData = getInfoDataMock();

  return (
    <div className="flex gap-2 flex-wrap">
      {infoData.map((item) => (
        <InfoCard
          key={item.id}
          title={item.title}
          value={item.value}
          growthChange={item.growthChange}
          icon={DownloadCloudIcon}
        />
      ))}
    </div>
  );
}
