"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addExtensionAction, AddExtensionActionState } from "./actions";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

const initialState: AddExtensionActionState = {
  success: false,
  error: "",
};

export const AddExtensionForm = () => {
  const router = useRouter();
  const [addExtensionState, addExtensionFormAction, isPending] = useActionState(
    addExtensionAction,
    initialState
  );

  useEffect(() => {
    if (addExtensionState.success) {
      router.push(`/extensions/?success=true&id=${addExtensionState.id}`);
    }
  }, [addExtensionState.success, router, addExtensionState.id]);

  return (
    <div className="flex flex-col gap-y-4">
      <form action={addExtensionFormAction} className="flex w-md gap-4">
        <Label htmlFor="extension-url-input" className="sr-only">
          Extension URL
        </Label>
        <Input
          id="extension-url"
          name="extension-url"
          type="url"
          placeholder="Enter the extension URL"
          disabled={isPending}
        />
        <Button
          type="submit"
          disabled={isPending}
          className="w-32 cursor-pointer"
        >
          {isPending ? "Adding..." : "Add Extension"}
        </Button>
      </form>
      <div>
        {addExtensionState.error && !isPending && (
          <p className="text-red-500">{addExtensionState.error}</p>
        )}
      </div>
    </div>
  );
};
