import { AddExtensionHeroSkeleton } from "./AddExtensionHeroSkeleton";
import { AddExtensionFormSkeleton } from "./AddExtensionFormSkeleton";

export default function Loading() {
  return (
    <div className="space-y-8">
      <AddExtensionHeroSkeleton />
      <AddExtensionFormSkeleton />
    </div>
  );
}
