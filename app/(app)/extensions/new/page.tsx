import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AddExtensionForm } from "../AddExtensionForm";

export default function AddExtensionPage() {
  return (
    <div className="flex flex-col gap-y-4">
      <Breadcrumbs
        items={[
          { label: "Extensions", href: "/extensions" },
          { label: "Add New Extension", isCurrent: true },
        ]}
      />

      <div className="space-y-4">
        <p className="text-muted-foreground text-sm">
          Paste the Chrome Web Store URL of the extension you'd like to monitor
          for updates and details.
        </p>

        <AddExtensionForm />
      </div>
    </div>
  );
}
