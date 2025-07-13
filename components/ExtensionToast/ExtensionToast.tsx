"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { Toaster } from "../ui/sonner";

export const ExtensionToast = ({
  newExtensionName,
}: {
  newExtensionName?: string;
}) => {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  useEffect(() => {
    console.log("success", success);
    if (success) {
      toast.success(`Extension ${newExtensionName} added successfully`);

      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete("success");
      newSearchParams.delete("id");
      
      // Use window.history.replaceState for shallow URL update
      const newUrl = `${window.location.pathname}${newSearchParams.toString() ? `?${newSearchParams.toString()}` : ''}`;
      window.history.replaceState({}, '', newUrl);
    }
  }, [success, newExtensionName, searchParams]);

  return <Toaster />;
};
