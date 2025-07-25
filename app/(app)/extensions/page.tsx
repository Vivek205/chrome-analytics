import { auth } from "@/auth";
import { ExtensionCard } from "@/components/ExtensionCard";
import { ExtensionToast } from "@/components/ExtensionToast";
import { ExtensionsHero } from "@/components/ExtensionsHero";
import { fetchOgImage } from "@/lib/fetchOgImage";
import { getExtensionDetails } from "@/services/extensions.service";
import { getUserExtensions } from "@/services/userExtensions.service";
import Link from "next/link";
import { removeUserExtensionAction } from "./actions";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Extensions(props: {
  searchParams: SearchParams;
}) {
  const session = await auth();
  if (!session || !session.user) {
    return <div>Please log in to manage extensions.</div>;
  }
  const searchParams = await props.searchParams;
  const extensions = await getUserExtensions(session.user.id || "");
  let newExtensionName = "";
  if (searchParams?.success && searchParams.id) {
    const newExtensionDetails = await getExtensionDetails(
      searchParams.id as string
    );
    newExtensionName = newExtensionDetails ? newExtensionDetails.name : "";
  }

  if (!extensions.length) {
    return (
      <div>
        <ExtensionsHero />
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
      <ExtensionsHero />
      <div className="mt-4">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {extensionsWithImages.map((extension) => (
            <Link href={`/extensions/${extension.id}`} key={extension.id}>
              <ExtensionCard
                extension={extension}
                removeUserExtensionAction={removeUserExtensionAction}
              />
            </Link>
          ))}
        </ul>
      </div>
      <ExtensionToast newExtensionName={newExtensionName} />
    </div>
  );
}
