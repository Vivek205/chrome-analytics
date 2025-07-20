"use client";
import { Button } from "../ui/button";
import { TrashIcon } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import type { RemoveUserExtensionAction } from "@/app/(app)/extensions/actions";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

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
      await removeUserExtensionAction(session.user.id, extensionId);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card role="listitem">
      <CardHeader className="h-8">
        <CardTitle>{extension.name}</CardTitle>
        <CardAction>
          <Button
            size="icon"
            className="cursor-pointer"
            variant="ghost"
            onClick={(e) => handleRemoveExtension(e, extension.id)}
          >
            <TrashIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          src={extension.ogImage || ""}
          alt="OG"
          width={250}
          height={250}
          objectFit="cover"
        />
      </CardContent>
    </Card>
  );
};
