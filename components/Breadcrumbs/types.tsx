export type BreadcrumbItem = {
  label: string;
  href?: string;
  isCurrent?: boolean;
};
export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};
