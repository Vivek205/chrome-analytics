"use client";
import { Button } from "../ui/button";
import { ExternalLink, X } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import type { RemoveUserExtensionAction } from "@/app/(app)/extensions/actions";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Badge } from "../ui/badge";

type Extension = {
  ogImage: string | null;
  id: string;
  name: string;
  url: string;
};

type ExtensionCardProps = {
  extension: Extension;
  removeUserExtensionAction: RemoveUserExtensionAction;
};

export const ExtensionCard = ({
  extension,
  removeUserExtensionAction,
}: ExtensionCardProps) => {
  const { data: session } = useSession();
  const [isRemoving, setIsRemoving] = useState(false);
  const router = useRouter();

  const handleRemoveExtension = async (
    e: React.MouseEvent<HTMLButtonElement>,
    extensionId: string
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (!session?.user?.id) {
      return;
    }
    try {
      setIsRemoving(true);
      await removeUserExtensionAction(session.user.id, extensionId);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden pt-0 h-72">
      {/* Remove Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/80 hover:bg-white/90 shadow-sm"
        onClick={(e) => handleRemoveExtension(e, extension.id)}
        disabled={isRemoving}
      >
        <X
          className={`h-4 w-4 text-gray-600 ${
            isRemoving ? "animate-spin" : ""
          }`}
        />
      </Button>

      {/* Extension Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={extension.ogImage || "/placeholder.svg"}
          alt={extension.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* External Link Icon */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-white/90 rounded-full p-1.5">
            <ExternalLink className="h-4 w-4 text-gray-700" />
          </div>
        </div>
      </div>

      <CardHeader className="pb-2 h-24 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
              {extension.name}
            </CardTitle>
            <div className="mt-1">
              <Badge variant="outline" className="text-xs">
                #tag
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  );
};
