import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AddExtensionHero } from "./AddExtensionHero";
import { AddExtensionForm } from "./AddExtensionForm";

export default function AddExtensionPage() {
  return (
    <div className="flex flex-col gap-y-6">
      <Breadcrumbs
        items={[
          { label: "Extensions", href: "/extensions" },
          { label: "Add New Extension", isCurrent: true },
        ]}
      />

      <AddExtensionHero />

      {/* Form Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <AddExtensionForm />
      </div>
    </div>
  );
}
