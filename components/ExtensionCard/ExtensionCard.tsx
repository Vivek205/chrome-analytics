"use client";
import { Button } from "../ui/button";
import { SquareArrowOutUpRight, Trash, TrashIcon } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
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
    <Card role="listitem" className="w-64">
      <CardHeader className="h-8 ">
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
      <CardContent>
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
