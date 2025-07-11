import { ChevronRightIcon } from "lucide-react";

import { Breadcrumbs, BreadcrumbsItem, BreadcrumbsLink } from "../core/breadcrumbs/breadcrumbs";

export const BreadcrumbsBase = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
    <Breadcrumbs>
      <BreadcrumbsItem>
        <BreadcrumbsLink>Home</BreadcrumbsLink>
        <ChevronRightIcon className='h-4 w-4' />
      </BreadcrumbsItem>
      <BreadcrumbsItem>
        <BreadcrumbsLink>Documents</BreadcrumbsLink>
        <ChevronRightIcon className='h-4 w-4' />
      </BreadcrumbsItem>
      <BreadcrumbsItem>
        <BreadcrumbsLink>Recent</BreadcrumbsLink>
      </BreadcrumbsItem>
    </Breadcrumbs>
  </div>
  );
};