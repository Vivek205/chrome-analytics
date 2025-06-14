"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTransition } from "react";
import { addExtensionAction } from "./actions";

type AddExtensionFormProps = {};
export const AddExtensionForm = ({}: AddExtensionFormProps) => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startTransition(() => {
      const formData = new FormData(event.currentTarget);
      addExtensionAction(formData);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-md gap-4">
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
  );
};
