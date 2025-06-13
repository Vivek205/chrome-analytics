import { auth } from "@/auth";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { fetchOgImage } from "@/lib/fetchOgImage";
import { getUserExtensions } from "@/services/userExtensions.service";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AddExtensionForm } from "./AddExtensionForm";

export default async function Extensions() {
  const session = await auth();
  if (!session || !session.user) {
    return <div>Please log in to manage extensions.</div>;
  }
  const extensions = await getUserExtensions(session.user.id || "");

  if (!extensions.length) {
    return (
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Your Extensions
        </h1>
        <p className="text-muted-foreground">
          No extensions found. Please add some.
        </p>
      </div>
    );
  }

  const extensionsWithImages = await Promise.all(
    extensions.map(async (extension) => {
      const ogImage = await fetchOgImage(extension.url);
      return {
        ...extension,
        ogImage: ogImage, // Fallback image if OG image not found
      };
    })
  );

  return (
    <div>
      <p className="text-xl font-semibold tracking-tight">Add New Extension</p>
      <div className="pt-2">
        <AddExtensionForm />
      </div>
      <p className="pt-2 text-xl font-semibold tracking-tight">
        Your Extensions
      </p>
      <div className="mt-4">
        <ul className="flex gap-4 flex-wrap">
          {extensionsWithImages.map((extension) => (
            <Card key={extension.id} role="listitem" className="w-64">
              <CardHeader className="h-8 ">
                <CardTitle>{extension.name}</CardTitle>
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
              <CardFooter>
                <CardAction className="w-full flex justify-between">
                  <Button variant="destructive" className="cursor-pointer">
                    Remove
                  </Button>
                  <Link
                    className={buttonVariants()}
                    href={extension.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open
                    <SquareArrowOutUpRight />
                  </Link>
                </CardAction>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
}
