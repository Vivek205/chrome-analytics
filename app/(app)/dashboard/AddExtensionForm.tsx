import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export const AddExtensionForm = () => {
  const addExtensionAction = async (formData: FormData) => {
    "use server";
    const extensionUrl = formData.get("extension-url");
    console.log("formData", extensionUrl);
    if (!extensionUrl || typeof extensionUrl !== "string") {
      return;
    }
    // TODO: Implement extension addition logic
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Add Chrome Extension
        </h2>
        <p>Enter the extension URL to get started</p>
        <Card className="w-md">
          <CardContent>
            <form className="flex flex-col gap-4" action={addExtensionAction}>
              <Label htmlFor="extension-url">Extension URL</Label>
              <Input
                id="extension-url"
                name="extension-url"
                type="text"
                placeholder="enter the url here"
              />
              <Button type="submit">Add Extension</Button>
            </form>
          </CardContent>
        </Card>
        <p className="text-sm text-muted-foreground w-md">
          Supported URLs: Chrome Web Store extension URLs starting with
          https://chrome.google.com/webstore/detail/
        </p>
      </div>
    </div>
  );
};
