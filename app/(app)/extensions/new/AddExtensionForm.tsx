"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addExtensionAction, AddExtensionActionState } from "../actions";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Link as LinkIcon, CheckCircle, AlertCircle } from "lucide-react";

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
    <div className="space-y-6">
      {/* Form */}
      <form action={addExtensionFormAction} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="extension-url" className="text-sm font-medium text-gray-700">
            Chrome Web Store URL
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LinkIcon className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="extension-url"
              name="extension-url"
              type="url"
              placeholder="https://chrome.google.com/webstore/detail/..."
              disabled={isPending}
              className="pl-10 h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <p className="text-xs text-gray-500">
            Example: https://chrome.google.com/webstore/detail/extension-name/id
          </p>
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none disabled:opacity-50"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Adding Extension...
            </>
          ) : (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              Add Extension
            </>
          )}
        </Button>
      </form>

      {/* Status Messages */}
      {addExtensionState.error && !isPending && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <p className="text-sm font-medium text-red-800">Error adding extension</p>
            <p className="text-sm text-red-700">{addExtensionState.error}</p>
          </div>
        </div>
      )}

      {/* Help Text */}
      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <h3 className="text-sm font-medium text-gray-900">How to find the URL:</h3>
        <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
          <li>Go to the Chrome Web Store</li>
          <li>Find the extension you want to track</li>
          <li>Copy the URL from your browser&apos;s address bar</li>
          <li>Paste it in the field above</li>
        </ol>
      </div>
    </div>
  );
};
