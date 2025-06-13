// app/extensions/actions.ts
"use server";

import { addUserExtension } from "@/services/userExtensions.service";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export async function addExtensionAction(formData: FormData) {
  try {
    const session = await auth();
    const extensionUrl = formData.get("extension-url");

    if (
      !extensionUrl ||
      typeof extensionUrl !== "string" ||
      !session?.user?.id
    ) {
      console.error("Invalid data");
      return;
    }

    await addUserExtension(session.user.id, extensionUrl);
  } catch (error) {
    console.error("Error adding extension:", error);
  }

  redirect("/extensions");
}
