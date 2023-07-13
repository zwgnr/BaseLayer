import {
  BreadCrumbsItem,
  BreadCrumbsLink,
  Breadcrumbs,
} from "@/components/base/breadcrumbs";
import { ChevronRight } from "lucide-react";

export const BreadcrumbsExample = () => {
  return (
    <Breadcrumbs>
      <BreadCrumbsItem>
        <BreadCrumbsLink>
          <a href="/">Home</a>
        </BreadCrumbsLink>
        <ChevronRight className="h-4 w-4" />
      </BreadCrumbsItem>
      <BreadCrumbsItem>
        <BreadCrumbsLink>
          <a href="/docs">Docs</a>
        </BreadCrumbsLink>
        <ChevronRight className="h-4 w-4" />
      </BreadCrumbsItem>
      <BreadCrumbsItem>
        <BreadCrumbsLink>Breadcrumbs</BreadCrumbsLink>
      </BreadCrumbsItem>
    </Breadcrumbs>
  );
};
