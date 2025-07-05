"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { redirect } from "next/navigation";

type ExtensionSelectProps = {
  userExtensions: { id: string; name: string }[];
  extensionId?: string;
};
export const ExtensionSelect = ({
  userExtensions,
  extensionId,
}: ExtensionSelectProps) => {
  const handleSelectChange = (extensionId: string) => {
    redirect(`/dashboard/${extensionId}`);
  };
  return (
    <Select onValueChange={handleSelectChange} defaultValue={extensionId}>
      <SelectTrigger className="cursor-pointer">
        <SelectValue placeholder="Select Extension" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Extensions</SelectLabel>
          {userExtensions.map((extension) => (
            <SelectItem
              key={extension.id}
              value={extension.id}
              className="cursor-pointer"
            >
              {extension.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
