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
import { useActionState, useEffect } from "react";
import type { RemoveUserExtensionAction } from "@/app/(app)/extensions/actions";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [state, removeUserExtensionFormAction, isPending] = useActionState(
    removeUserExtensionAction,
    {
      success: false,
    }
  );

  useEffect(() => {
    if (state.success) {
      router.refresh();
    }
  }, [state.success, router]);

  return (
    <Card role="listitem">
      <CardHeader className="h-8">
        <CardTitle>{extension.name}</CardTitle>
        <CardAction>
          <form
            action={removeUserExtensionFormAction}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <Button
              size="icon"
              className="cursor-pointer"
              variant="destructive"
            >
              <TrashIcon />
            </Button>
          </form>
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
