import { button } from "@/components/base/button";
import {
  PaginationEllipsis,
  PaginationList,
  PaginationNextPageTrigger,
  PaginationPageTrigger,
  PaginationPrevPageTrigger,
  Pagination as PaginationRoot,
  type PaginationProps,
} from "@ark-ui/react";

import { paginationPotion } from "@/components/base/paginationPotion";

const { root, list, pageTrigger, ellipsis } = paginationPotion();

export const Pagination = (props: Partial<PaginationProps>) => (
  <PaginationRoot
    count={5000}
    pageSize={10}
    siblingCount={2}
    className={root()}
    {...props}
  >
    {({ pages }) => (
      <>
        <PaginationList className={list()}>
          <PaginationPrevPageTrigger asChild>
            <button
              className={button({
                className: "bg-surface-4 hover:bg-secondary",
              })}
            >
              Previous
            </button>
          </PaginationPrevPageTrigger>

          {pages.map((page, index) =>
            page.type === "page" ? (
              <PaginationPageTrigger
                className={pageTrigger()}
                key={index}
                {...page}
                asChild
              >
                <button
                  className={button({
                    className: "bg-surface-3 hover:bg-secondary",
                  })}
                >
                  {page.value}
                </button>
              </PaginationPageTrigger>
            ) : (
              <PaginationEllipsis
                className={ellipsis()}
                key={index}
                index={index}
              >
                &#8230;
              </PaginationEllipsis>
            ),
          )}

          <PaginationNextPageTrigger asChild>
            <button className={button({ intent: "secondary" })}>Next</button>
          </PaginationNextPageTrigger>
        </PaginationList>
      </>
    )}
  </PaginationRoot>
);
