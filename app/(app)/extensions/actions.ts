// app/extensions/actions.ts
"use server";

import {
  addUserExtension,
  removeUserExtension,
} from "@/services/userExtensions.service";
import { auth } from "@/auth";

export type AddExtensionActionState = {
  success: boolean;
  id?: string;
  error?: string;
};

export async function addExtensionAction(
  prevState: AddExtensionActionState,
  formData: FormData
): Promise<AddExtensionActionState> {
  try {
    const session = await auth();
    const extensionUrl = formData.get("extension-url");

    if (
      !extensionUrl ||
      typeof extensionUrl !== "string" ||
      !session?.user?.id
    ) {
      console.error("Invalid data", extensionUrl, session?.user?.id);
      return { success: false, error: "Invalid data" };
    }

    const { id } = await addUserExtension(session.user.id, extensionUrl);
    return { success: true, id };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error adding extension:", error);
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unknown error occurred" };
  }
}

export type RemoveUserExtensionAction = (
  userId: string,
  extensionId: string
) => Promise<void>;

export async function removeUserExtensionAction(
  userId: string,
  extensionId: string
): Promise<void> {
  await removeUserExtension(userId, extensionId);
}
