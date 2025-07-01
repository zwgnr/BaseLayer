// Auto-generated registry from registry data
// Do not edit manually - regenerate with 'pnpm build'

import type { ComponentRegistry, ComponentRegistryEntry } from '@baselayer/registry';

const registry: ComponentRegistry = {
  "version": "2.0.0",
  "components": [
    {
        "id": "accordion",
        "template": "/templates/accordion.txt",
        "meta": {
            "name": "accordion",
            "category": "layout",
            "status": "stable",
            "description": "An accordion allows users to toggle the display of sections of content. Each accordion consists of a header with a title and content area.",
            "tags": [
                "disclosure",
                "collapsible",
                "expandable",
                "content"
            ]
        }
    },
    {
        "id": "badge",
        "template": "/templates/badge.txt",
        "meta": {
            "name": "badge",
            "category": "display",
            "status": "stable",
            "description": "A badge is a small label that can be used to display information or status.",
            "tags": [
                "status"
            ]
        }
    },
    {
        "id": "breadcrumbs",
        "template": "/templates/breadcrumbs.txt",
        "meta": {
            "name": "breadcrumbs",
            "category": "navigation",
            "status": "stable",
            "description": "Breadcrumbs display a heirarchy of links to the current page or resource in an application.",
            "tags": [
                "navigation"
            ]
        }
    },
    {
        "id": "button",
        "template": "/templates/button.txt",
        "meta": {
            "name": "button",
            "category": "forms",
            "status": "stable",
            "description": "A button allows a user to perform an action, with mouse, touch, and keyboard interactions.",
            "tags": [
                "form",
                "interactive"
            ]
        }
    },
    {
        "id": "calendar",
        "template": "/templates/calendar.txt",
        "meta": {
            "name": "calendar",
            "category": "data-entry",
            "status": "stable",
            "description": "A calendar displays one or more date grids and allows users to select either a single date or a contiguous range of dates.",
            "tags": [
                "form",
                "interactive",
                "date-time"
            ]
        }
    },
    {
        "id": "card",
        "template": "/templates/card.txt",
        "meta": {
            "name": "card",
            "category": "layout",
            "status": "stable",
            "description": "Displays a card with header, content, and footer.",
            "tags": [
                "layout",
                "container",
                "display"
            ]
        }
    },
    {
        "id": "checkbox",
        "template": "/templates/checkbox.txt",
        "meta": {
            "name": "checkbox",
            "category": "forms",
            "status": "stable",
            "description": "A checkbox allows a user to select multiple items from a list of individual items, or to mark one individual item as selected.",
            "tags": [
                "form",
                "interactive"
            ]
        }
    },
    {
        "id": "combobox",
        "template": "/templates/combobox.txt",
        "meta": {
            "name": "combobox",
            "category": "forms",
            "status": "stable",
            "description": "A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.",
            "tags": [
                "form",
                "interactive",
                "picker"
            ]
        }
    },
    {
        "id": "command",
        "template": "/templates/command.txt",
        "meta": {
            "name": "command",
            "category": "navigation",
            "status": "beta",
            "description": "A command palette that allows users to quickly search and execute commands using keyboard shortcuts.",
            "tags": [
                "search",
                "navigation",
                "keyboard",
                "palette"
            ]
        }
    },
    {
        "id": "date-field",
        "template": "/templates/date-field.txt",
        "meta": {
            "name": "date-field",
            "category": "forms",
            "status": "stable",
            "description": "A date field allows users to enter and edit date and time values using a keyboard. Each part of a date value is displayed in an individually editable segment.",
            "tags": [
                "form",
                "interactive",
                "date"
            ]
        }
    },
    {
        "id": "date-picker",
        "template": "/templates/date-picker.txt",
        "meta": {
            "name": "date-picker",
            "category": "forms",
            "status": "stable",
            "description": "A date picker combines one or more DateFields with a calendar popover, allowing users to enter or select a single date/time or a range.",
            "tags": [
                "form",
                "interactive",
                "date-time"
            ]
        }
    },
    {
        "id": "input",
        "template": "/templates/input.txt",
        "meta": {
            "name": "input",
            "category": "forms",
            "status": "stable",
            "description": "Allows a user to enter a plain text value with a keyboard.",
            "tags": [
                "form",
                "interactive"
            ]
        }
    },
    {
        "id": "menu",
        "template": "/templates/menu.txt",
        "meta": {
            "name": "menu",
            "category": "pickers",
            "status": "stable",
            "description": "A menu displays a list of actions or options that a user can choose.",
            "tags": [
                "interactive",
                "navigation"
            ]
        }
    },
    {
        "id": "meter",
        "template": "/templates/meter.txt",
        "meta": {
            "name": "meter",
            "category": "data-display",
            "status": "stable",
            "description": "A meter represents a quantity within a known range, or a fractional value.",
            "tags": [
                "data-display",
                "progress"
            ]
        }
    },
    {
        "id": "modal",
        "template": "/templates/modal.txt",
        "meta": {
            "name": "modal",
            "category": "overlays",
            "status": "stable",
            "description": "A modal is an overlay element which blocks interaction with elements outside it.",
            "tags": [
                "overlay"
            ]
        }
    },
    {
        "id": "popover",
        "template": "/templates/popover.txt",
        "meta": {
            "name": "popover",
            "category": "overlays",
            "status": "stable",
            "description": "A popover is an overlay element positioned relative to a trigger.",
            "tags": [
                "overlay",
                "interactive"
            ]
        }
    },
    {
        "id": "radio-group",
        "template": "/templates/radio-group.txt",
        "meta": {
            "name": "radio-group",
            "category": "forms",
            "status": "stable",
            "description": "A radio group allows a user to select a single option from a list of mutually exclusive options.",
            "tags": [
                "form",
                "interactive",
                "selection"
            ]
        }
    },
    {
        "id": "select",
        "template": "/templates/select.txt",
        "meta": {
            "name": "select",
            "category": "forms",
            "status": "stable",
            "description": "A select displays a collapsible list of options and allows a user to select one of them.",
            "tags": [
                "form",
                "interactive",
                "picker"
            ]
        }
    },
    {
        "id": "slider",
        "template": "/templates/slider.txt",
        "meta": {
            "name": "slider",
            "category": "forms",
            "status": "stable",
            "description": "A slider allows a user to select one or more values within a range.",
            "tags": [
                "form",
                "interactive",
                "range"
            ]
        }
    },
    {
        "id": "switch",
        "template": "/templates/switch.txt",
        "meta": {
            "name": "switch",
            "category": "forms",
            "status": "stable",
            "description": "A switch allows a user to turn a setting on or off.",
            "tags": [
                "form",
                "interactive",
                "toggle"
            ]
        }
    },
    {
        "id": "table",
        "template": "/templates/table.txt",
        "meta": {
            "name": "table",
            "category": "data-display",
            "status": "stable",
            "description": "A table displays data in rows and columns and enables a user to navigate its contents via directional navigation keys, and optionally supports row selection and sorting.",
            "tags": [
                "data-display",
                "interactive"
            ]
        }
    },
    {
        "id": "tabs",
        "template": "/templates/tabs.txt",
        "meta": {
            "name": "tabs",
            "category": "navigation",
            "status": "stable",
            "description": "Tabs organize content into multiple sections and allow users to navigate between them.",
            "tags": [
                "navigation",
                "interactive",
                "layout"
            ]
        }
    },
    {
        "id": "tag-group",
        "template": "/templates/tag-group.txt",
        "meta": {
            "name": "tag-group",
            "category": "forms",
            "status": "stable",
            "description": "A tag group is a focusable list of labels, categories, keywords, filters, or other items, with support for keyboard navigation, selection, and removal.",
            "tags": [
                "form",
                "interactive",
                "selection",
                "filtering"
            ]
        }
    },
    {
        "id": "time-field",
        "template": "/templates/time-field.txt",
        "meta": {
            "name": "time-field",
            "category": "forms",
            "status": "stable",
            "description": "A time field allows users to enter and edit time values using a keyboard. Each part of a time value is displayed in an individually editable segment.",
            "tags": [
                "form",
                "interactive",
                "time"
            ]
        }
    },
    {
        "id": "toggle",
        "template": "/templates/toggle.txt",
        "meta": {
            "name": "toggle",
            "category": "forms",
            "status": "stable",
            "description": "A toggle button allows a user to toggle a selection on or off, for example switching between two states or modes.",
            "tags": [
                "form",
                "interactive",
                "toggle"
            ]
        }
    },
    {
        "id": "tooltip",
        "template": "/templates/tooltip.txt",
        "meta": {
            "name": "tooltip",
            "category": "overlays",
            "status": "stable",
            "description": "A tooltip displays a description of an element on hover or focus.",
            "tags": [
                "overlay",
                "interactive",
                "help"
            ]
        }
    }
  ]
};

const templateContents: Record<string, string> = {
  "accordion": "\"use client\";\n\nimport type { ReactNode } from \"react\";\n\nimport {\n\tButton,\n\tDisclosure,\n\tDisclosureGroup,\n\ttype DisclosureGroupProps,\n\tDisclosurePanel,\n\ttype DisclosureProps,\n\tHeading,\n} from \"react-aria-components\";\nimport { tv, type VariantProps } from \"tailwind-variants\";\n\nimport { Minus, Plus } from \"lucide-react\";\n\nconst accordion = tv({\n\tslots: {\n\t\troot: \"group w-full\",\n\t\tgroup: \"flex flex-col gap-3\",\n\t\tbutton:\n\t\t\t\"flex w-full items-center justify-between gap-6 rounded-2xl border border-border bg-surface-2 p-4 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-focus data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-surface group-data-[expanded]:rounded-b-none group-data-[expanded]:border-b-0\",\n\t\ticon: \"size-4 shrink-0 fill-none transition-transform duration-200\",\n\t\tpanel:\n\t\t\t\"rounded-b-2xl border-border bg-surface-2 px-4 text-muted-foreground text-sm group-data-[expanded]:border-x group-data-[expanded]:border-b group-data-[expanded]:pb-4\",\n\t},\n});\n\nconst styles = accordion();\n\ntype AccordionVariantProps = VariantProps<typeof accordion>;\n\ninterface AccordionProps\n\textends AccordionVariantProps,\n\t\tOmit<DisclosureProps, \"children\"> {\n\tclassName?: string;\n\ttitle?: string;\n\tchildren?: ReactNode;\n}\n\nconst Accordion = ({\n\tclassName,\n\ttitle,\n\tchildren,\n\t...props\n}: AccordionProps) => {\n\treturn (\n\t\t<Disclosure className={styles.root({ className })} {...props}>\n\t\t\t{({ isExpanded }) => (\n\t\t\t\t<>\n\t\t\t\t\t<Heading>\n\t\t\t\t\t\t<Button slot=\"trigger\" className={styles.button()}>\n\t\t\t\t\t\t\t<span className=\"font-bold\">{title}</span>\n\t\t\t\t\t\t\t{isExpanded ? (\n\t\t\t\t\t\t\t\t<Minus className={styles.icon()} />\n\t\t\t\t\t\t\t) : (\n\t\t\t\t\t\t\t\t<Plus className={styles.icon()} />\n\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t</Button>\n\t\t\t\t\t</Heading>\n\t\t\t\t\t<DisclosurePanel className={styles.panel()}>\n\t\t\t\t\t\t{children}\n\t\t\t\t\t</DisclosurePanel>\n\t\t\t\t</>\n\t\t\t)}\n\t\t</Disclosure>\n\t);\n};\n\ninterface AccordionGroupProps extends DisclosureGroupProps {\n\tclassName?: string;\n\tchildren: ReactNode;\n}\n\nconst AccordionGroup = ({\n\tclassName,\n\tchildren,\n\t...props\n}: AccordionGroupProps) => (\n\t<DisclosureGroup {...props} className={styles.group({ className })}>\n\t\t{children}\n\t</DisclosureGroup>\n);\n\nexport { Accordion, AccordionGroup };\nexport type { AccordionProps, AccordionGroupProps };\n",
  "badge": "import type { HTMLAttributes } from \"react\";\n\nimport { tv, type VariantProps } from \"tailwind-variants\";\n\nexport const badge = tv({\n\tbase: \"flex items-center justify-center rounded-4xl px-3 py-2 font-semibold text-xs\",\n\tvariants: {\n\t\tvariant: {\n\t\t\tattention: \"bg-gradient-to-r from-pink-500 to-purple-500 text-white\",\n\t\t\tneutral: \"bg-secondary text-secondary-fg\",\n\t\t\tdanger: \"bg-danger text-danger-fg\",\n\t\t},\n\t},\n\tdefaultVariants: {\n\t\tvariant: \"attention\",\n\t},\n});\n\ntype BadgeProps = VariantProps<typeof badge> & HTMLAttributes<HTMLSpanElement>;\n\nconst Badge = ({ className, variant, ...props }: BadgeProps) => (\n\t<span className={badge({ variant, className })} {...props} />\n);\n\nexport { Badge };\nexport type { BadgeProps };\n",
  "breadcrumbs": "\"use client\";\n\nimport {\n\tBreadcrumbs as AriaBreadcrumbs,\n\ttype BreadcrumbsProps as AriaBreadcrumbsProps,\n\tBreadcrumb,\n\ttype BreadcrumbProps,\n\tLink,\n\ttype LinkProps,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nconst breadcrumbs = tv({\n\tslots: {\n\t\troot: \"m-0 flex list-none items-center gap-2 p-0 font-md\",\n\t\tlink: \"relative cursor-pointer rounded-md text-fg outline-none ring-focus data-[hovered]:underline data-[focus-visible]:ring-2 [&[aria-current]]:font-extrabold [&[aria-current]]:text-fg\",\n\t\titem: \"flex items-center gap-2\",\n\t},\n});\n\nconst styles = breadcrumbs();\n\nconst Breadcrumbs = <T extends object>({\n\tchildren,\n\tclassName,\n\t...props\n}: AriaBreadcrumbsProps<T> & { className?: string }) => (\n\t<AriaBreadcrumbs className={styles.root({ className })} {...props}>\n\t\t{children}\n\t</AriaBreadcrumbs>\n);\n\nconst BreadcrumbsLink = ({\n\tchildren,\n\tclassName,\n\t...props\n}: LinkProps & { className?: string }) => (\n\t<Link className={styles.link({ className })} {...props}>\n\t\t{children}\n\t</Link>\n);\n\nconst BreadcrumbsItem = ({\n\tchildren,\n\tclassName,\n\t...props\n}: BreadcrumbProps & { className?: string }) => (\n\t<Breadcrumb className={styles.item({ className })} {...props}>\n\t\t{children}\n\t</Breadcrumb>\n);\n\nexport { BreadcrumbsItem, BreadcrumbsLink, Breadcrumbs };",
  "button": "\"use client\";\n\nimport {\n\tButton as AriaButton,\n\ttype ButtonProps as AriaButtonProps,\n} from \"react-aria-components\";\nimport { tv, type VariantProps } from \"tailwind-variants\";\n\nconst button = tv({\n\tbase: \"inline-flex appearance-none items-center justify-center rounded-full font-semibold outline-none ring-focus ring-offset-3 ring-offset-surface transition-transform duration-100 disabled:pointer-events-none disabled:opacity-50 data-[focus-visible]:ring-2\",\n\tvariants: {\n\t\tvariant: {\n\t\t\tprimary:\n\t\t\t\t\"bg-primary text-primary-fg data-[hovered]:bg-primary/80\",\n\t\t\tsecondary:\n\t\t\t\t\"border border-border text-fg data-[hovered]:border-secondary data-[hovered]:bg-secondary\",\n\t\t\tghost:\n\t\t\t\t\"bg-transparent text-fg data-[hovered]:bg-secondary data-[hovered]:text-secondary-fg\",\n\t\t\tdanger:\n\t\t\t\t\"border border-transparent bg-danger text-danger-fg data-[hovered]:bg-danger/80\",\n\t\t},\n\t\tsize: {\n\t\t\tsm: \"px-2 py-1.5 text-sm\",\n\t\t\tmd: \"px-4 py-2.5 text-base\",\n\t\t\tlg: \"px-6 py-3.5 font-bold text-lg\",\n\t\t\ticon: \"size-9\",\n\t\t},\n\t},\n\tdefaultVariants: {\n\t\tvariant: \"primary\",\n\t\tsize: \"md\",\n\t},\n});\n\ntype ButtonVariantProps = VariantProps<typeof button>;\n\ninterface ButtonProps\n\textends Omit<AriaButtonProps, \"className\">,\n\t\tButtonVariantProps {\n\tclassName?: string;\n}\n\nconst Button = ({\n\tclassName,\n\tsize,\n\tvariant,\n\tchildren,\n\t...props\n}: ButtonProps) => (\n\t<AriaButton className={button({ className, size, variant })} {...props}>\n\t\t{children}\n\t</AriaButton>\n);\n\nButton.displayName = \"Button\";\n\nexport { Button };\nexport type { ButtonProps };\n",
  "calendar": "\"use client\";\n\nimport {\n\tCalendar as AriaCalendar,\n\ttype CalendarProps as AriaCalendarProps,\n\tRangeCalendar as AriaRangeCalendar,\n\ttype RangeCalendarProps as AriaRangeCalendarProps,\n\tButton,\n\tCalendarCell,\n\tCalendarGrid,\n\tCalendarGridBody,\n\tCalendarGridHeader,\n\tCalendarHeaderCell,\n\ttype DateValue,\n\tHeading,\n\tText,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nimport { ChevronLeft, ChevronRight } from \"lucide-react\";\n\nconst baseStyles = tv({\n\tslots: {\n\t\troot: \"w-fit max-w-full rounded-2xl border border-border bg-surface p-4 text-fg\",\n\t\theader: \"flex w-full items-center gap-1 pb-4\",\n\t\theading: \"flex-1 text-center font-bold\",\n\t\theaderCell: \"pb-2 text-fg-muted text-sm\",\n\t\tmonthButton:\n\t\t\t\"flex appearance-none items-center justify-center rounded-full p-2 text-center outline-none ring-focus data-[hovered]:bg-secondary data-[focus-visible]:ring-2\",\n\t},\n});\n\nconst calendar = tv({\n\textend: baseStyles,\n\tslots: {\n\t\tcell: \"flex size-9 cursor-default items-center justify-center rounded-full border-border text-center text-sm outline-focus outline-offset-2 data-[hovered]:bg-secondary data-[pressed]:bg-secondary data-[selected]:bg-primary data-[selected]:text-primary-fg data-[unavailable]:text-fg-muted data-[unavailable]:line-through data-[focus-visible]:outline-2 data-[focus-visible]:outline-focus [&[data-outside-month]]:hidden\",\n\t},\n});\n\nconst rangeCalendar = tv({\n\textend: baseStyles,\n\tslots: {\n\t\tcell: \"flex size-9 cursor-default items-center justify-center rounded-full text-center text-sm outline-none outline-offset-2 data-[selected]:rounded-none data-[hovered]:bg-secondary data-[pressed]:bg-secondary data-[selected]:bg-primary data-[selected]:text-primary-fg data-[unavailable]:text-fg-muted data-[unavailable]:line-through data-[focus-visible]:ring-2 data-[focus-visible]:ring-focus data-[focus-visible]:ring-offset-2 [&[data-outside-month]]:hidden [&[data-selection-end]]:rounded-r-full [&[data-selection-start]]:rounded-l-full\",\n\t},\n});\n\nconst styles = calendar();\nconst rangeStyles = rangeCalendar();\n\ninterface CalendarProps<T extends DateValue>\n\textends Omit<AriaCalendarProps<T>, \"className\"> {\n\terrorMessage?: string;\n\tclassName?: string;\n}\n\nconst Calendar = ({\n\tclassName,\n\terrorMessage,\n\t...props\n}: CalendarProps<DateValue>) => (\n\t<AriaCalendar {...props} className={styles.root({ className })}>\n\t\t<header className={styles.header()}>\n\t\t\t<Button className={styles.monthButton()} slot=\"previous\">\n\t\t\t\t<ChevronLeft className=\"h-5 w-5 self-center\" />\n\t\t\t</Button>\n\t\t\t<Heading className={styles.heading()} slot=\"label\" />\n\t\t\t<Button className={styles.monthButton()} slot=\"next\">\n\t\t\t\t<ChevronRight className=\"h-5 w-5 self-center\" />\n\t\t\t</Button>\n\t\t</header>\n\t\t<CalendarGrid>\n\t\t\t<CalendarGridHeader>\n\t\t\t\t{(day) => (\n\t\t\t\t\t<CalendarHeaderCell className={styles.headerCell()}>\n\t\t\t\t\t\t{day}\n\t\t\t\t\t</CalendarHeaderCell>\n\t\t\t\t)}\n\t\t\t</CalendarGridHeader>\n\t\t\t<CalendarGridBody>\n\t\t\t\t{(date) => <CalendarCell className={styles.cell()} date={date} />}\n\t\t\t</CalendarGridBody>\n\t\t</CalendarGrid>\n\t\t{errorMessage && (\n\t\t\t<Text className=\"text-danger text-sm\" slot=\"errorMessage\">\n\t\t\t\t{errorMessage}\n\t\t\t</Text>\n\t\t)}\n\t</AriaCalendar>\n);\n\ninterface RangeCalendarProps<T extends DateValue>\n\textends Omit<AriaRangeCalendarProps<T>, \"className\"> {\n\terrorMessage?: string;\n\tclassName?: string;\n}\n\nconst RangeCalendar = ({\n\tclassName,\n\terrorMessage,\n\t...props\n}: RangeCalendarProps<DateValue>) => (\n\t<AriaRangeCalendar {...props} className={rangeStyles.root({ className })}>\n\t\t<header className={rangeStyles.header()}>\n\t\t\t<Button className={rangeStyles.monthButton()} slot=\"previous\">\n\t\t\t\t<ChevronLeft className=\"h-5 w-5 self-center\" />\n\t\t\t</Button>\n\t\t\t<Heading className={rangeStyles.heading()} slot=\"label\" />\n\t\t\t<Button className={rangeStyles.monthButton()} slot=\"next\">\n\t\t\t\t<ChevronRight className=\"h-5 w-5 self-center\" />\n\t\t\t</Button>\n\t\t</header>\n\t\t<CalendarGrid>\n\t\t\t<CalendarGridHeader>\n\t\t\t\t{(day) => (\n\t\t\t\t\t<CalendarHeaderCell className={rangeStyles.headerCell()}>\n\t\t\t\t\t\t{day}\n\t\t\t\t\t</CalendarHeaderCell>\n\t\t\t\t)}\n\t\t\t</CalendarGridHeader>\n\t\t\t<CalendarGridBody>\n\t\t\t\t{(date) => <CalendarCell className={rangeStyles.cell()} date={date} />}\n\t\t\t</CalendarGridBody>\n\t\t</CalendarGrid>\n\t\t{errorMessage && (\n\t\t\t<Text className=\"text-danger text-sm\" slot=\"errorMessage\">\n\t\t\t\t{errorMessage}\n\t\t\t</Text>\n\t\t)}\n\t</AriaRangeCalendar>\n);\n\nexport { Calendar, RangeCalendar };\nexport type { CalendarProps, RangeCalendarProps };\n",
  "card": "\"use client\";\n\nimport type { HTMLAttributes } from \"react\";\n\nimport { tv, type VariantProps } from \"tailwind-variants\";\n\nconst card = tv({\n\tslots: {\n\t\troot: \"rounded-2xl border-2 bg-surface text-fg\",\n\t\theader: \"flex flex-col space-y-1.5 p-6\",\n\t\ttitle: \"font-semibold text-2xl leading-none tracking-tight\",\n\t\tdescription: \"text-fg-muted text-sm\",\n\t\tcontent: \"p-6 pt-0\",\n\t\tfooter: \"flex items-center p-6 pt-0\",\n\t},\n\tvariants: {\n\t\tvariant: {\n\t\t\toutlined: {\n\t\t\t\troot: \"border border-border/50\",\n\t\t\t},\n\t\t\tfilled: {\n\t\t\t\troot: \"border-surface-2 bg-surface-2\",\n\t\t\t},\n\t\t},\n\t},\n\tdefaultVariants: {\n\t\tvariant: \"outlined\",\n\t},\n});\n\nconst styles = card();\n\ntype CardVariantProps = VariantProps<typeof card>;\n\ninterface CardProps extends HTMLAttributes<HTMLDivElement>, CardVariantProps {\n\tclassName?: string;\n\ttitle?: string;\n\tdescription?: string;\n}\n\ninterface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {\n\tclassName?: string;\n}\n\ninterface CardContentProps extends HTMLAttributes<HTMLDivElement> {\n\tclassName?: string;\n}\n\ninterface CardFooterProps extends HTMLAttributes<HTMLDivElement> {\n\tclassName?: string;\n}\n\nconst Card = ({\n\tclassName,\n\tvariant,\n\ttitle,\n\tdescription,\n\tchildren,\n\t...props\n}: CardProps) => (\n\t<div className={styles.root({ variant, className })} {...props}>\n\t\t{(title || description) && (\n\t\t\t<div className={styles.header()}>\n\t\t\t\t{title && <h3 className={styles.title()}>{title}</h3>}\n\t\t\t\t{description && <p className={styles.description()}>{description}</p>}\n\t\t\t</div>\n\t\t)}\n\t\t{children}\n\t</div>\n);\n\nconst CardHeader = ({ className, ...props }: CardHeaderProps) => (\n\t<div className={styles.header({ className })} {...props} />\n);\n\nconst CardContent = ({ className, ...props }: CardContentProps) => (\n\t<div className={styles.content({ className })} {...props} />\n);\n\nconst CardFooter = ({ className, ...props }: CardFooterProps) => (\n\t<div className={styles.footer({ className })} {...props} />\n);\n\nexport { Card, CardHeader, CardContent, CardFooter };\nexport type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps };\n",
  "checkbox": "\"use client\";\n\nimport type { ReactNode } from \"react\";\n\nimport {\n\ttype CheckboxProps as AriaCheckBoxProps,\n\tCheckbox as AriaCheckbox,\n\tCheckboxGroup as AriaCheckboxGroup,\n\ttype CheckboxGroupProps as AriaCheckboxGroupProps,\n\tFieldError,\n\tText,\n\ttype ValidationResult,\n} from \"react-aria-components\";\nimport { tv, type VariantProps } from \"tailwind-variants\";\n\nimport { Check } from \"lucide-react\";\n\nconst checkbox = tv({\n\tbase: \"group flex items-center justify-center gap-2 py-1 text-fg\",\n});\n\nconst checkboxGroup = tv({\n\tbase: \"flex flex-col gap-2\",\n});\n\ntype CheckboxVariantProps = VariantProps<typeof checkbox>;\n\ninterface CheckboxProps extends CheckboxVariantProps, AriaCheckBoxProps {\n\tclassName?: string;\n\tchildren: ReactNode;\n\tdescription?: string;\n\terrorMessage?: string | ((validation: ValidationResult) => string);\n}\n\nconst Checkbox = ({\n\tclassName,\n\terrorMessage,\n\tchildren,\n\tdescription,\n\t...props\n}: CheckboxProps) => {\n\treturn (\n\t\t<AriaCheckbox className={checkbox({ className })} {...props}>\n\t\t\t{({ isSelected }) => (\n\t\t\t\t<>\n\t\t\t\t\t<div className=\"flex size-6 shrink-0 items-center justify-center rounded-lg border border-border transition-all group-data-[selected]:border-primary group-data-[selected]:bg-primary group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-focus group-data-[focus-visible]:ring-offset-2 group-data-[focus-visible]:ring-offset-surface\">\n\t\t\t\t\t\t{isSelected && <Check className=\"size-4 text-primary-fg\" />}\n\t\t\t\t\t</div>\n\t\t\t\t\t{children}\n\t\t\t\t\t{description && (\n\t\t\t\t\t\t<Text className=\"text-sm\" slot=\"description\">\n\t\t\t\t\t\t\t{description}\n\t\t\t\t\t\t</Text>\n\t\t\t\t\t)}\n\t\t\t\t\t<FieldError className=\"text-danger text-sm\">\n\t\t\t\t\t\t{errorMessage}\n\t\t\t\t\t</FieldError>\n\t\t\t\t</>\n\t\t\t)}\n\t\t</AriaCheckbox>\n\t);\n};\n\ninterface CheckboxGroupProps extends AriaCheckboxGroupProps {\n\tclassName?: string;\n\tlabel?: string;\n\tchildren: ReactNode;\n\tdescription?: string;\n\terrorMessage?: string | ((validation: ValidationResult) => string);\n}\n\nconst CheckboxGroup = ({\n\tclassName,\n\tlabel,\n\tdescription,\n\terrorMessage,\n\tchildren,\n\t...props\n}: CheckboxGroupProps) => (\n\t<AriaCheckboxGroup {...props} className={checkboxGroup({ className })}>\n\t\t{label && (\n\t\t\t<Text className=\"text-md\" slot=\"label\">\n\t\t\t\t{label}\n\t\t\t</Text>\n\t\t)}\n\t\t{children}\n\t\t{description && (\n\t\t\t<Text className=\"text-md\" slot=\"description\">\n\t\t\t\t{description}\n\t\t\t</Text>\n\t\t)}\n\t\t<FieldError className=\"text-danger text-sm\">{errorMessage}</FieldError>\n\t</AriaCheckboxGroup>\n);\n\nexport { Checkbox, CheckboxGroup };\nexport type { CheckboxProps, CheckboxGroupProps };\n",
  "combobox": "\"use client\";\n\nimport type { ReactNode } from \"react\";\n\nimport {\n\tComboBox as AriaComboBox,\n\ttype ComboBoxProps as AriaComboBoxProps,\n\tButton,\n\tFieldError,\n\tInput,\n\tLabel,\n\tListBox,\n\tListBoxItem,\n\ttype ListBoxItemProps,\n\tPopover,\n\tText,\n\ttype ValidationResult,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nimport { CheckIcon, ChevronsUpDown } from \"lucide-react\";\n\nconst combobox = tv({\n\tslots: {\n\t\troot: \"group max-h-inherit w-full overflow-auto p-1 outline-none\",\n\t\tinput:\n\t\t\t\"w-full rounded-lg border border-border bg-surface px-4 py-1.5 align-middle font-semibold text-fg outline-none ring-fg transition-all group-data-[focused]:border-transparent group-data-[focused]:bg-surface group-data-[focused]:ring-2\",\n\t\tbutton:\n\t\t\t\"absolute right-2 flex appearance-none items-center justify-center rounded-full border-0 outline-none ring-focus ring-offset-2 ring-offset-surface data-[focus-visible]:ring-2\",\n\t\tpopover:\n\t\t\t\"w-[var(--trigger-width)] rounded-xl border border-border/25 bg-surface p-1 text-fg shadow-lg outline-none\",\n\t\titem: \"relative m-1 flex cursor-default flex-col rounded-lg p-2 font-semibold outline-none data-[disabled]:cursor-not-allowed data-[focused]:bg-secondary data-[disabled]:text-fg-disabled\",\n\t},\n});\n\nconst styles = combobox();\n\ninterface ComboBoxProps<T extends ListBoxItemProps>\n\textends Omit<AriaComboBoxProps<T>, \"className\"> {\n\tclassName?: string;\n\tlabel?: string;\n\tdescription?: string;\n\terrorMessage?: string | ((validation: ValidationResult) => string);\n}\n\nconst ComboBox = <T extends ListBoxItemProps>({\n\tlabel,\n\tclassName,\n\tdescription,\n\terrorMessage,\n\tchildren,\n\t...props\n}: ComboBoxProps<T>) => (\n\t<AriaComboBox\n\t\t{...props}\n\t\tclassName={styles.root({ className })}\n\t>\n\t\t{label && <Label className=\"text-sm\">{label}</Label>}\n\t\t<div className=\"relative flex w-full items-center rounded-2xl bg-surface\">\n\t\t\t<Input className={styles.input()} />\n\t\t\t<Button className={styles.button()}>\n\t\t\t\t<ChevronsUpDown className=\"size-5 text-fg-muted group-data-[focused]:text-fg\" />\n\t\t\t</Button>\n\t\t</div>\n\t\t{description && (\n\t\t\t<Text className=\"text-fg-muted text-sm\" slot=\"description\">\n\t\t\t\t{description}\n\t\t\t</Text>\n\t\t)}\n\t\t<FieldError className=\"text-danger text-sm\">{errorMessage}</FieldError>\n\t\t<Popover className={styles.popover()}>\n\t\t\t<ListBox className=\"max-h-56 overflow-y-auto\">{children}</ListBox>\n\t\t</Popover>\n\t</AriaComboBox>\n);\n\ninterface ComboBoxItemProps\n\textends Omit<ListBoxItemProps, \"className\" | \"children\"> {\n\tchildren: ReactNode;\n\tclassName?: string;\n}\n\nconst ComboBoxItem = ({ className, ...props }: ComboBoxItemProps) => (\n\t<ListBoxItem {...props} className={styles.item({ className })}>\n\t\t{({ isSelected }) => (\n\t\t\t<div className=\"flex items-center justify-between gap-2\">\n\t\t\t\t<span>{props.children}</span>\n\t\t\t\t{isSelected && <CheckIcon className=\"size-4\" />}\n\t\t\t</div>\n\t\t)}\n\t</ListBoxItem>\n);\n\nexport { ComboBox, ComboBoxItem };\nexport type { ComboBoxProps, ListBoxItemProps as ComboBoxItemProps };",
  "command": "\"use client\";\n\nimport type { ComponentType, ReactNode } from \"react\";\nimport { useEffect, useState } from \"react\";\n\nimport {\n\tButton as AriaButton,\n\tDialog as AriaDialog,\n\tDialogTrigger as AriaDialogTrigger,\n\tModal as AriaModal,\n\tAutocomplete,\n\tInput,\n\tMenu,\n\tMenuItem,\n\ttype MenuItemProps,\n\tModalOverlay,\n\ttype ModalOverlayProps,\n\tTextField,\n\tuseFilter,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nimport { Search } from \"lucide-react\";\n\nconst command = tv({\n\tslots: {\n\t\ttrigger:\n\t\t\t\"flex w-full items-center justify-between rounded-full bg-secondary px-4 py-2 font-semibold text-fg outline-none ring-primary ring-offset-2 ring-offset-surface transition-colors data-[hovered]:bg-secondary/75 data-[focus-visible]:ring-2\",\n\t\toverlay:\n\t\t\t\"data-[entering]:fade-in data-[exiting]:fade-out fixed inset-0 z-50 flex min-h-full items-start justify-center bg-zinc-500/25 p-4 text-center data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:duration-300 data-[exiting]:duration-200 sm:items-center\",\n\t\tmodal:\n\t\t\t\"data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:duration-300 data-[exiting]:duration-200\",\n\t\tdialog:\n\t\t\t\"flex min-h-96 min-w-80 max-w-full flex-col gap-1 rounded-2xl bg-surface p-2 shadow-lg outline-none md:w-lg\",\n\t\tinput:\n\t\t\t\"rounded-lg border-b-2 border-none bg-transparent px-3 py-2 text-base text-fg leading-5 outline-none placeholder:text-fg-muted\",\n\t\tmenu: \"mt-2 h-80 overflow-auto\",\n\t\titem: \"group flex min-h-12 w-full cursor-default items-center rounded-lg px-3 py-2 text-fg outline-none data-[focused]:bg-secondary data-[pressed]:bg-surface-3 data-[focused]:text-focus-fg\",\n\t\tkbd: \"ml-auto rounded border border-border bg-surface-2 px-2 py-1 font-semibold text-fg-muted text-xs\",\n\t},\n});\n\nconst styles = command();\n\ninterface CommandItem {\n\tid: string;\n\tlabel: string;\n\tshortcut?: string;\n\ticon?: ComponentType<{ className?: string }>;\n\tonSelect?: () => void;\n}\n\ninterface CommandProps extends Omit<ModalOverlayProps, \"className\"> {\n\tclassName?: string;\n\ttrigger?: ReactNode;\n\tcommands: CommandItem[];\n\tplaceholder?: string;\n\ttriggerKey?: string;\n\tonCommandSelect?: (command: CommandItem) => void;\n\tonSearchChange?: (search: string) => void;\n}\n\nconst Command = ({\n\tclassName,\n\ttrigger,\n\tcommands,\n\tplaceholder = \"Search commands…\",\n\ttriggerKey = \"k\",\n\tonCommandSelect,\n\tonSearchChange,\n\t...props\n}: CommandProps) => {\n\tconst [isOpen, setOpen] = useState(false);\n\tconst [isMac, setIsMac] = useState(true);\n\tconst { contains } = useFilter({ sensitivity: \"base\" });\n\n\tuseEffect(() => {\n\t\tsetIsMac(/Mac/.test(navigator?.platform || \"\"));\n\t}, []);\n\n\tuseEffect(() => {\n\t\tconst handleKeyDown = (e: KeyboardEvent) => {\n\t\t\tif (\n\t\t\t\te.key.toLowerCase() === triggerKey.toLowerCase() &&\n\t\t\t\t(isMac ? e.metaKey : e.ctrlKey)\n\t\t\t) {\n\t\t\t\te.preventDefault();\n\t\t\t\tsetOpen((prev) => !prev);\n\t\t\t} else if (e.key === \"Escape\") {\n\t\t\t\te.preventDefault();\n\t\t\t\tsetOpen(false);\n\t\t\t}\n\t\t};\n\n\t\tdocument.addEventListener(\"keydown\", handleKeyDown);\n\t\treturn () => document.removeEventListener(\"keydown\", handleKeyDown);\n\t}, [isMac, triggerKey]);\n\n\tconst handleCommandSelect = (command: CommandItem) => {\n\t\tcommand.onSelect?.();\n\t\tonCommandSelect?.(command);\n\t\tsetOpen(false);\n\t};\n\n\treturn (\n\t\t<AriaDialogTrigger isOpen={isOpen} onOpenChange={setOpen}>\n\t\t\t{trigger || (\n\t\t\t\t<AriaButton className={styles.trigger({ className })}>\n\t\t\t\t\t<div className=\"flex items-center gap-2 text-fg-muted\">\n\t\t\t\t\t\t<Search className=\"size-4 text-fg-muted\" />\n\t\t\t\t\t\tSearch\n\t\t\t\t\t</div>\n\t\t\t\t\t<kbd className=\"rounded-md border border-border px-2 py-1 font-semibold text-fg-muted text-xs\">\n\t\t\t\t\t\t{isMac ? \"⌘\" : \"Ctrl\"} {triggerKey.toUpperCase()}\n\t\t\t\t\t</kbd>\n\t\t\t\t</AriaButton>\n\t\t\t)}\n\t\t\t<ModalOverlay {...props} isDismissable className={styles.overlay()}>\n\t\t\t\t<AriaModal className={styles.modal()}>\n\t\t\t\t\t<AriaDialog className={styles.dialog()}>\n\t\t\t\t\t\t<Autocomplete filter={onSearchChange ? () => true : contains}>\n\t\t\t\t\t\t\t<TextField\n\t\t\t\t\t\t\t\taria-label=\"Search commands\"\n\t\t\t\t\t\t\t\tclassName=\"flex flex-col border-border border-b px-3 py-2 outline-none\"\n\t\t\t\t\t\t\t\tonChange={onSearchChange}\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<Input\n\t\t\t\t\t\t\t\t\tautoFocus\n\t\t\t\t\t\t\t\t\tplaceholder={placeholder}\n\t\t\t\t\t\t\t\t\tclassName={styles.input()}\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</TextField>\n\t\t\t\t\t\t\t<Menu\n\t\t\t\t\t\t\t\titems={commands}\n\t\t\t\t\t\t\t\tclassName={styles.menu()}\n\t\t\t\t\t\t\t\tselectionMode=\"none\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{({ label, shortcut, icon: Icon, ...command }) => (\n\t\t\t\t\t\t\t\t\t<CommandMenuItem\n\t\t\t\t\t\t\t\t\t\t{...command}\n\t\t\t\t\t\t\t\t\t\ttextValue={label}\n\t\t\t\t\t\t\t\t\t\tonAction={() =>\n\t\t\t\t\t\t\t\t\t\t\thandleCommandSelect({\n\t\t\t\t\t\t\t\t\t\t\t\tlabel,\n\t\t\t\t\t\t\t\t\t\t\t\tshortcut,\n\t\t\t\t\t\t\t\t\t\t\t\ticon: Icon,\n\t\t\t\t\t\t\t\t\t\t\t\t...command,\n\t\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t<div className=\"flex min-w-0 items-center gap-3\">\n\t\t\t\t\t\t\t\t\t\t\t{Icon && (\n\t\t\t\t\t\t\t\t\t\t\t\t<Icon className=\"size-4 shrink-0 text-fg-muted\" />\n\t\t\t\t\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t\t\t\t\t\t<span className=\"truncate font-medium text-sm leading-tight\">\n\t\t\t\t\t\t\t\t\t\t\t\t{label}\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t{shortcut && (\n\t\t\t\t\t\t\t\t\t\t\t<span className={styles.kbd()}>{shortcut}</span>\n\t\t\t\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t\t\t\t</CommandMenuItem>\n\t\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t\t</Menu>\n\t\t\t\t\t\t</Autocomplete>\n\t\t\t\t\t</AriaDialog>\n\t\t\t\t</AriaModal>\n\t\t\t</ModalOverlay>\n\t\t</AriaDialogTrigger>\n\t);\n};\n\ninterface CommandMenuItemProps extends Omit<MenuItemProps, \"className\"> {\n\tclassName?: string;\n\tchildren: ReactNode;\n}\n\nconst CommandMenuItem = ({\n\tclassName,\n\tchildren,\n\t...props\n}: CommandMenuItemProps) => (\n\t<MenuItem {...props} className={styles.item({ className })}>\n\t\t{children}\n\t</MenuItem>\n);\n\nconst CommandTrigger = AriaDialogTrigger;\n\nexport { Command, CommandMenuItem, CommandTrigger };\nexport type { CommandProps, CommandMenuItemProps, CommandItem };\n",
  "date-field": "\"use client\";\n\nimport type {\n\tDateFieldProps as AriaDateFieldProps,\n\tDateValue,\n} from \"react-aria-components\";\nimport {\n\tDateField as AriaDateField,\n\tDateInput,\n\tDateSegment,\n\tFieldError,\n\tLabel,\n\tText,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nconst dateField = tv({\n\tslots: {\n\t\tinput:\n\t\t\t\"flex min-h-11 min-w-48 appearance-none items-center rounded-lg border border-border bg-surface px-3 py-0.5 outline-none ring-primary transition-all data-[disabled]:cursor-not-allowed data-[focus-within]:border-transparent data-[disabled]:border-none data-[disabled]:bg-primary/10 data-[focus-within]:bg-surface data-[disabled]:text-fg-disabled data-[focus-within]:ring-2 [&::placeholder]:text-sm\",\n\t\tsegmentStyles:\n\t\t\t\"rounded-md p-1 text-end outline-none focus:text-primary-fg data-[focused]:bg-primary data-[placeholder]:text-fg-muted data-[type='literal']:text-fg-muted data-[placeholder]:focus:text-primary-fg\",\n\t},\n});\n\nconst styles = dateField();\n\ninterface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {\n\tlabel?: string;\n\tdescription?: string;\n\terrorMessage?: string;\n}\n\nconst DateField = <T extends DateValue>({\n\tlabel,\n\tdescription,\n\terrorMessage,\n\t...props\n}: DateFieldProps<T>) => (\n\t<AriaDateField className=\"flex flex-col gap-1\" {...props}>\n\t\t{label && <Label className=\"text-sm\">{label}</Label>}\n\t\t<DateInput className={styles.input()}>\n\t\t\t{(segment) => (\n\t\t\t\t<DateSegment className={styles.segmentStyles()} segment={segment} />\n\t\t\t)}\n\t\t</DateInput>\n\t\t{description && <Text slot=\"description\">{description}</Text>}\n\t\t<FieldError className=\"text-danger text-sm\">{errorMessage}</FieldError>\n\t</AriaDateField>\n);\n\nexport { DateField };\nexport type { DateFieldProps };\n",
  "date-picker": "\"use client\";\n\nimport type {\n\tDatePickerProps as AriaDatePickerProps,\n\tDateRangePickerProps as AriaDateRangePickerProps,\n} from \"react-aria-components\";\nimport {\n\tDatePicker as AriaDatePicker,\n\tDateRangePicker as AriaDateRangePicker,\n\tButton,\n\tDateInput,\n\tDateSegment,\n\ttype DateValue,\n\tDialog,\n\tFieldError,\n\tGroup,\n\tLabel,\n\tPopover,\n\tText,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nimport { ChevronDown } from \"lucide-react\";\n\nimport { Calendar, RangeCalendar } from \"../calendar/calendar\";\n\nconst baseStyles = tv({\n\tslots: {\n\t\tinput:\n\t\t\t\"appearance-none rounded-lg px-3 py-1.5 outline-none ring-primary transition-all\",\n\t\tpopover:\n\t\t\t\"overflow-auto rounded-2xl data-[entering]:animate-fade data-[exiting]:animate-fadeOut\",\n\t},\n});\n\nconst datePicker = tv({\n\textend: baseStyles,\n\tslots: {\n\t\tgroup:\n\t\t\t\"relative flex min-h-11 w-auto min-w-48 items-center rounded-lg border border-border bg-surface transition-all data-[focus-within]:border-transparent data-[focus-within]:bg-surface data-[focus-within]:ring-2 data-[focus-within]:ring-primary data-[focus-within]:ring-offset-surface\",\n\t\tdateSegment:\n\t\t\t\"min-w-16 rounded-md p-1 text-end outline-none focus:bg-primary focus:text-primary-fg data-[placeholder]:text-fg-muted data-[type='literal']:text-fg-muted data-[placeholder]:focus:text-primary-fg\",\n\t},\n});\n\nconst dateRangePicker = tv({\n\textend: baseStyles,\n\tslots: {\n\t\tgroup:\n\t\t\t\"relative flex min-h-11 w-fit min-w-96 flex-wrap items-center rounded-lg border border-border bg-surface transition-all data-[focus-within]:border-transparent data-[focus-within]:bg-surface data-[focus-within]:ring-2 data-[focus-within]:ring-primary data-[focus-within]:ring-offset-surface\",\n\t\tdateSegment:\n\t\t\t\"rounded-md p-1 text-end outline-none focus:bg-primary focus:text-primary-fg data-[placeholder]:text-fg-muted data-[type='literal']:text-fg-muted data-[placeholder]:focus:text-primary-fg\",\n\t\tseparator: \"px-2 text-fg-muted\",\n\t},\n});\n\nconst styles = datePicker();\nconst rangeStyles = dateRangePicker();\n\ninterface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {\n\tlabel?: string;\n\tdescription?: string;\n\terrorMessage?: string;\n}\n\nconst DatePicker = <T extends DateValue>({\n\tclassName,\n\tlabel,\n\tdescription,\n\terrorMessage,\n\tchildren,\n\t...props\n}: DatePickerProps<T>) => (\n\t<AriaDatePicker className=\"flex flex-col gap-1\" {...props}>\n\t\t{label && <Label className=\"text-sm\">{label}</Label>}\n\t\t<Group className={styles.group()}>\n\t\t\t<DateInput className={styles.input()}>\n\t\t\t\t{(segment) => (\n\t\t\t\t\t<DateSegment className={styles.dateSegment()} segment={segment} />\n\t\t\t\t)}\n\t\t\t</DateInput>\n\t\t\t<Button className=\"absolute right-2 w-6 rounded-xs outline-offset-0\">\n\t\t\t\t<ChevronDown className=\"size-4 text-fg-muted\" />\n\t\t\t</Button>\n\t\t</Group>\n\t\t{description && (\n\t\t\t<Text className=\"text-fg-muted text-sm\" slot=\"description\">\n\t\t\t\t{description}\n\t\t\t</Text>\n\t\t)}\n\t\t<FieldError className=\"text-danger text-sm\">{errorMessage}</FieldError>\n\t\t<Popover className={styles.popover()}>\n\t\t\t<Dialog>\n\t\t\t\t<Calendar />\n\t\t\t</Dialog>\n\t\t</Popover>\n\t</AriaDatePicker>\n);\n\ninterface DateRangePickerProps<T extends DateValue>\n\textends AriaDateRangePickerProps<T> {\n\tlabel?: string;\n\tdescription?: string;\n\terrorMessage?: string;\n}\n\nconst DateRangePicker = <T extends DateValue>({\n\tclassName,\n\tlabel,\n\tdescription,\n\terrorMessage,\n\tchildren,\n\t...props\n}: DateRangePickerProps<T>) => (\n\t<AriaDateRangePicker className=\"flex flex-col gap-1\" {...props}>\n\t\t{label && <Label className=\"text-sm\">{label}</Label>}\n\t\t<Group className={rangeStyles.group()}>\n\t\t\t<DateInput slot=\"start\" className={rangeStyles.input()}>\n\t\t\t\t{(segment) => (\n\t\t\t\t\t<DateSegment\n\t\t\t\t\t\tclassName={rangeStyles.dateSegment()}\n\t\t\t\t\t\tsegment={segment}\n\t\t\t\t\t/>\n\t\t\t\t)}\n\t\t\t</DateInput>\n\t\t\t<span className={rangeStyles.separator()} aria-hidden=\"true\">\n\t\t\t\t–\n\t\t\t</span>\n\t\t\t<DateInput slot=\"end\" className={rangeStyles.input()}>\n\t\t\t\t{(segment) => (\n\t\t\t\t\t<DateSegment\n\t\t\t\t\t\tclassName={rangeStyles.dateSegment()}\n\t\t\t\t\t\tsegment={segment}\n\t\t\t\t\t/>\n\t\t\t\t)}\n\t\t\t</DateInput>\n\t\t\t<Button className=\"absolute right-2 w-6 rounded-xs outline-offset-0\">\n\t\t\t\t<ChevronDown className=\"size-4 text-fg-muted\" />\n\t\t\t</Button>\n\t\t</Group>\n\t\t{description && (\n\t\t\t<Text className=\"text-fg-muted text-sm\" slot=\"description\">\n\t\t\t\t{description}\n\t\t\t</Text>\n\t\t)}\n\t\t<FieldError className=\"text-danger text-sm\">{errorMessage}</FieldError>\n\t\t<Popover className={rangeStyles.popover()}>\n\t\t\t<Dialog>\n\t\t\t\t<RangeCalendar />\n\t\t\t</Dialog>\n\t\t</Popover>\n\t</AriaDateRangePicker>\n);\n\nexport { DatePicker, DateRangePicker };\nexport type { DatePickerProps, DateRangePickerProps };\n",
  "input": "\"use client\";\n\nimport type {\n\tTextFieldProps as AriaTextFieldProps,\n\tValidationResult,\n} from \"react-aria-components\";\nimport {\n\tInput as AriaInput,\n\tTextField as AriaTextField,\n\tFieldError,\n\tLabel,\n\tText,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nconst input = tv({\n\tbase: \"min-h-11 appearance-none rounded-lg border border-border bg-surface px-3 py-1 text-fg outline-none ring-primary transition-all data-[disabled]:cursor-not-allowed data-[focused]:border-transparent data-[disabled]:bg-primary/10 data-[disabled]:text-fg-disabled data-[focused]:ring-2 [&::placeholder]:text-fg-muted [&::placeholder]:text-sm\",\n});\n\ninterface InputProps extends Omit<AriaTextFieldProps, \"className\"> {\n\tclassName?: string;\n\tlabel?: string;\n\tdescription?: string;\n\terrorMessage?: string | ((validation: ValidationResult) => string);\n\tplaceholder?: string;\n}\n\nconst Input = ({\n\tlabel,\n\tdescription,\n\terrorMessage,\n\tplaceholder,\n\tclassName,\n\t...props\n}: InputProps) => (\n\t<AriaTextField className=\"flex w-full flex-col gap-1\" {...props}>\n\t\t{label && <Label className=\"text-sm\">{label}</Label>}\n\t\t<AriaInput className={input({ className })} placeholder={placeholder} />\n\t\t{description && (\n\t\t\t<Text className=\"text-fg-muted text-sm\" slot=\"description\">\n\t\t\t\t{description}\n\t\t\t</Text>\n\t\t)}\n\t\t<FieldError className=\"text-danger text-sm\">{errorMessage}</FieldError>\n\t</AriaTextField>\n);\n\nexport { Input };\nexport type { InputProps };\n",
  "menu": "\"use client\";\n\nimport type { HTMLAttributes } from \"react\";\n\nimport {\n\tHeader as AriaHeader,\n\tMenu as AriaMenu,\n\tMenuItem as AriaMenuItem,\n\tMenuSection as AriaMenuSection,\n\tMenuTrigger as AriaMenuTrigger,\n\ttype MenuItemProps,\n\ttype MenuProps,\n\tPopover,\n\tSeparator,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nexport const menu = tv({\n\tslots: {\n\t\tmenuPopover:\n\t\t\t\"data-[entering]:fade-in data-[exiting]:fade-out overflow-auto rounded-2xl border border-border/25 bg-surface shadow-xl data-[entering]:animate-in data-[exiting]:animate-out\",\n\t\theader: \"p-2 font-semibold\",\n\t\tcontent: \"flex h-fit min-w-56 flex-col gap-2 p-3 outline-none\",\n\t\titem: \"relative flex cursor-default justify-between rounded-lg p-3 font-semibold outline-none data-[disabled]:cursor-not-allowed data-[focused]:bg-secondary data-[disabled]:text-fg-disabled\",\n\t\tseparator: \"h-[1px] bg-border\",\n\t},\n});\n\nconst { menuPopover, content, header, item, separator } = menu();\n\nconst MenuTrigger = AriaMenuTrigger;\nconst MenuSection = AriaMenuSection;\n\nconst MenuContent = <T extends object>({\n\tchildren,\n\tclassName,\n\t...props\n}: MenuProps<T> & { className?: string }) => (\n\t<Popover className={menuPopover()}>\n\t\t<AriaMenu {...props} className={content({ className })}>\n\t\t\t{children}\n\t\t</AriaMenu>\n\t</Popover>\n);\n\nconst MenuItem = ({\n\tchildren,\n\tclassName,\n\t...props\n}: MenuItemProps & { className?: string }) => (\n\t<AriaMenuItem {...props} className={item({ className })}>\n\t\t{children}\n\t</AriaMenuItem>\n);\n\nconst MenuHeader = ({\n\tchildren,\n\tclassName,\n\t...props\n}: HTMLAttributes<HTMLElement> & { className?: string }) => (\n\t<AriaHeader {...props} className={header({ className })}>\n\t\t{children}\n\t</AriaHeader>\n);\n\nconst MenuSeperator = ({\n\tclassName,\n\t...props\n}: HTMLAttributes<HTMLElement> & { className?: string }) => (\n\t<Separator {...props} className={separator({ className })} />\n);\n\nexport {\n\tMenuContent,\n\tMenuHeader,\n\tMenuItem,\n\tMenuSeperator,\n\tMenuTrigger,\n\tMenuSection,\n};\n",
  "meter": "\"use client\";\n\nimport {\n\tMeter as AriaMeter,\n\ttype MeterProps as AriaMeterProps,\n\tLabel,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nconst bar = tv({\n\tbase: \"h-4 overflow-hidden rounded-2xl bg-surface-2\",\n});\n\ninterface MeterProps extends Omit<AriaMeterProps, \"className\"> {\n\tlabel?: string;\n\tclassName?: string;\n}\n\nconst Meter = ({ label, className, ...props }: MeterProps) => (\n\t<AriaMeter className=\"flex w-56 flex-col gap-2\" {...props}>\n\t\t{({ percentage, valueText }) => (\n\t\t\t<>\n\t\t\t\t<div className=\"flex justify-between\">\n\t\t\t\t\t{label && <Label className=\"text-primary text-sm\">{label}</Label>}\n\t\t\t\t\t<span className=\"value text-primary text-sm\">{valueText}</span>\n\t\t\t\t</div>\n\t\t\t\t<div className={bar({ className })}>\n\t\t\t\t\t<div\n\t\t\t\t\t\tclassName=\"h-full bg-primary\"\n\t\t\t\t\t\tstyle={{ width: `${percentage}%` }}\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t</>\n\t\t)}\n\t</AriaMeter>\n);\n\nexport { Meter };\nexport type { MeterProps };\n",
  "modal": "\"use client\";\n\nimport {\n\tDialog as AriaDialog,\n\tDialogTrigger as AriaDialogTrigger,\n\tModal as AriaModal,\n\ttype DialogProps,\n\tModalOverlay,\n\ttype ModalOverlayProps,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nexport const modal = tv({\n\tslots: {\n\t\tdialog: \"flex w-full flex-col gap-6 outline-none\",\n\t\tmodalStyles:\n\t\t\t\"fade-in w-full rounded-2xl bg-surface p-6 text-fg outline-none data-[entering]:animate-in md:w-md\",\n\t},\n});\n\nconst styles = modal();\n\ninterface ModalProps extends Omit<ModalOverlayProps, \"className\"> {\n\tclassName?: string;\n}\n\nconst Modal = ({ children, className, ...props }: ModalProps) => (\n\t<ModalOverlay\n\t\t{...props}\n\t\tclassName=\"fade-in fade-out fixed top-0 left-0 z-50 flex h-[var(--visual-viewport-height)] w-screen items-center justify-center bg-zinc-500/50 data-[entering]:animate-in data-[exiting]:animate-out\"\n\t>\n\t\t<AriaModal className={styles.modalStyles({ className })}>\n\t\t\t{children}\n\t\t</AriaModal>\n\t</ModalOverlay>\n);\n\nconst Dialog = ({ children, className, ...props }: DialogProps) => (\n\t<AriaDialog {...props} className={styles.dialog({ className })}>\n\t\t{children}\n\t</AriaDialog>\n);\n\nconst ModalTrigger = AriaDialogTrigger;\n\nexport { Modal, Dialog, ModalTrigger };\nexport type { ModalProps, DialogProps };",
  "popover": "\"use client\";\n\nimport type { ReactNode } from \"react\";\n\nimport {\n\tDialogTrigger as AriaDialogTrigger,\n\tPopover as AriaPopover,\n\ttype PopoverProps as AriaPopoverProps,\n\tDialog,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nexport const popover = tv({\n\tbase: \"data-[entering]:fade-in data-[exiting]:fade-out m-1 max-w-lg rounded-2xl border border-border/25 bg-surface p-2 text-fg shadow-lg outline-none data-[entering]:animate-in data-[exiting]:animate-out\",\n});\n\ninterface DialogProps extends Omit<AriaPopoverProps, \"className\" | \"children\"> {\n\tchildren: ReactNode;\n\tclassName?: string;\n}\n\nconst PopoverTrigger = AriaDialogTrigger;\n\nconst Popover = ({ children, className, ...props }: DialogProps) => (\n\t<AriaPopover className={popover({ className })} {...props}>\n\t\t<Dialog className=\"outline-none\">{children}</Dialog>\n\t</AriaPopover>\n);\n\nexport { Popover, PopoverTrigger };\n",
  "radio-group": "\"use client\";\n\nimport type { ReactNode } from \"react\";\n\nimport type {\n  RadioGroupProps as AriaRadioGroupProps,\n  RadioProps,\n  ValidationResult,\n} from \"react-aria-components\";\nimport {\n  Radio as AriaRadio,\n  RadioGroup as AriaRadioGroup,\n  FieldError,\n  Text,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nconst radioGroup = tv({\n  slots: {\n    radio:\n      \"flex items-center gap-4 text-fg before:block before:h-5 before:w-5 before:rounded-full before:border before:border-border before:ring-focus before:ring-offset-2 before:ring-offset-surface before:transition-all data-[selected]:before:border-4 data-[selected]:before:border-primary data-[focus-visible]:before:ring-2\",\n    group: \"flex flex-col gap-4 text-fg\",\n  },\n});\n\nconst { group, radio } = radioGroup();\n\ninterface RadioGroupProps extends Omit<AriaRadioGroupProps, \"children\" | \"className\"> {\n  className?: string;\n  children?: ReactNode;\n  label?: string;\n  description?: string;\n  errorMessage?: string | ((validation: ValidationResult) => string)\n}\n\nconst RadioGroup = ({\n  className,\n  label,\n  description,\n  errorMessage,\n  children,\n  ...props\n}: RadioGroupProps) => (\n  <AriaRadioGroup className={group({ className })} {...props}>\n    {label}\n    {children}\n    {description && <Text slot=\"description\">{description}</Text>}\n    <FieldError className=\"text-fg-error text-sm\">{errorMessage}</FieldError>\n  </AriaRadioGroup>\n);\n\nconst Radio = ({\n  children,\n  className,\n  ...props\n}: RadioProps & {\n  className?: string;\n}) => (\n  <AriaRadio className={radio({ className })} {...props}>\n    {children}\n  </AriaRadio>\n);\n\nexport { RadioGroup, Radio }; ",
  "select": "\"use client\";\n\nimport type { ReactNode } from \"react\";\n\nimport type {\n\tSelectProps as AriaSelectProps,\n\tListBoxItemProps,\n\tValidationResult,\n} from \"react-aria-components\";\nimport {\n\tSelect as AriaSelect,\n\tAutocomplete,\n\tButton,\n\tFieldError,\n\tInput,\n\tLabel,\n\tListBox,\n\tListBoxItem,\n\tPopover,\n\tSearchField,\n\tSelectValue,\n\tText,\n\tuseFilter,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nimport { CheckIcon, ChevronDown, Search } from \"lucide-react\";\n\nconst select = tv({\n\tslots: {\n\t\tgroup: \"group flex flex-col gap-1\",\n\t\tbutton:\n\t\t\t\"group flex w-fit items-center justify-between gap-4 rounded-full border border-border bg-surface px-4 py-2.75 align-middle font-semibold text-fg text-sm outline-none ring-fg transition-all data-[hovered]:bg-surface-2 group-data-[focus-visible]:border-transparent group-data-[open]:bg-surface-2 group-data-[focus-visible]:ring-2\",\n\t\titem: \"relative m-1 flex cursor-default flex-col rounded-lg p-2 font-semibold outline-none data-[disabled]:cursor-not-allowed data-[focused]:bg-secondary data-[disabled]:text-fg-disabled\",\n\t\tsearchField:\n\t\t\t\"group m-1 flex items-center rounded-full border border-border bg-surface px-2 py-1.5\",\n\t\tsearchInput:\n\t\t\t\"flex-1 bg-transparent text-fg outline-none placeholder:text-fg-muted\",\n\t\tsearchIcon: \"mr-2 size-4 text-fg-muted\",\n\t\tclearButton:\n\t\t\t\"ml-2 rounded p-0.5 text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg group-empty:invisible\",\n\t\tpopover:\n\t\t\t\"min-w-[var(--trigger-width)] rounded-xl border border-border/25 bg-surface p-1 text-fg shadow-lg outline-none\",\n\t},\n});\n\nconst styles = select();\n\ninterface SelectProps<T extends ListBoxItemProps>\n\textends Omit<AriaSelectProps<T>, \"className\"> {\n\tclassName?: string;\n\tpopoverClassName?: string;\n\tlabel?: string;\n\tdescription?: string;\n\terrorMessage?: string | ((validation: ValidationResult) => string);\n}\n\nconst Select = <T extends ListBoxItemProps>({\n\tlabel,\n\tclassName,\n\tdescription,\n\terrorMessage,\n\tpopoverClassName,\n\tchildren,\n\t...props\n}: SelectProps<T>) => (\n\t<AriaSelect className={styles.group()} {...props}>\n\t\t{label && <Label className=\"text-sm\">{label}</Label>}\n\t\t<Button className={styles.button({ className })}>\n\t\t\t<SelectValue className=\"data-[placeholder]:text-fg-muted\" />\n\t\t\t<ChevronDown className=\"size-4 text-fg-muted group-data-[open]:rotate-180 group-data-[focused]:text-fg\" />\n\t\t</Button>\n\t\t{description && (\n\t\t\t<Text className=\"text-fg-muted text-sm\" slot=\"description\">\n\t\t\t\t{description}\n\t\t\t</Text>\n\t\t)}\n\t\t<FieldError className=\"text-danger text-sm\">{errorMessage}</FieldError>\n\t\t<Popover className={styles.popover({ className: popoverClassName })}>\n\t\t\t<ListBox className=\"outline-none\">{children}</ListBox>\n\t\t</Popover>\n\t</AriaSelect>\n);\n\ninterface SelectItemProps\n\textends Omit<ListBoxItemProps, \"className\" | \"children\"> {\n\tchildren: ReactNode;\n\tclassName?: string;\n}\n\nconst SelectItem = ({ className, ...props }: SelectItemProps) => (\n\t<ListBoxItem {...props} className={styles.item({ className })}>\n\t\t{({ isSelected }) => (\n\t\t\t<div className=\"flex items-center justify-between gap-2\">\n\t\t\t\t<span>{props.children}</span>\n\t\t\t\t{isSelected && <CheckIcon className=\"size-4\" />}\n\t\t\t</div>\n\t\t)}\n\t</ListBoxItem>\n);\n\ninterface SearchableSelectProps<T extends ListBoxItemProps>\n\textends SelectProps<T> {\n\tsearchPlaceholder?: string;\n}\n\nconst SearchableSelect = <T extends ListBoxItemProps>({\n\tlabel,\n\tclassName,\n\tdescription,\n\terrorMessage,\n\tsearchPlaceholder = \"Search...\",\n\tchildren,\n\tpopoverClassName,\n\t...props\n}: SearchableSelectProps<T>) => {\n\tconst { contains } = useFilter({ sensitivity: \"base\" });\n\n\treturn (\n\t\t<AriaSelect className={styles.group()} {...props}>\n\t\t\t{label && <Label className=\"text-sm\">{label}</Label>}\n\t\t\t<Button className={styles.button({ className })}>\n\t\t\t\t<SelectValue className=\"data-[placeholder]:text-fg-muted\" />\n\t\t\t\t<ChevronDown className=\"size-4 text-fg-muted group-data-[open]:rotate-180 group-data-[focused]:text-fg\" />\n\t\t\t</Button>\n\t\t\t{description && (\n\t\t\t\t<Text className=\"text-fg-muted text-sm\" slot=\"description\">\n\t\t\t\t\t{description}\n\t\t\t\t</Text>\n\t\t\t)}\n\t\t\t<FieldError className=\"text-danger text-sm\">{errorMessage}</FieldError>\n\t\t\t<Popover className={styles.popover({ className: popoverClassName })}>\n\t\t\t\t<Autocomplete filter={contains}>\n\t\t\t\t\t<SearchField\n\t\t\t\t\t\taria-label=\"Search\"\n\t\t\t\t\t\tautoFocus\n\t\t\t\t\t\tclassName={styles.searchField()}\n\t\t\t\t\t>\n\t\t\t\t\t\t<Search className={styles.searchIcon()} />\n\t\t\t\t\t\t<Input\n\t\t\t\t\t\t\tplaceholder={searchPlaceholder}\n\t\t\t\t\t\t\tclassName={styles.searchInput()}\n\t\t\t\t\t\t/>\n\t\t\t\t\t</SearchField>\n\t\t\t\t\t<ListBox className=\"max-h-48 overflow-auto outline-none\">\n\t\t\t\t\t\t{children}\n\t\t\t\t\t</ListBox>\n\t\t\t\t</Autocomplete>\n\t\t\t</Popover>\n\t\t</AriaSelect>\n\t);\n};\n\nexport { Select, SelectItem, SearchableSelect };\nexport type { SelectProps, SelectItemProps, SearchableSelectProps };\n",
  "slider": "\"use client\";\n\nimport {\n\tSlider as AriaSlider,\n\tSliderThumb as AriaSliderThumb,\n\tSliderTrack as AriaSliderTrack,\n\tLabel,\n\ttype LabelProps,\n\tSliderOutput,\n\ttype SliderProps,\n\ttype SliderThumbProps,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nconst slider = tv({\n\tslots: {\n\t\troot: \"grid w-64 auto-cols-fr grid-cols-1 text-fg-muted\",\n\t\tthumb:\n\t\t\t\"h-5 w-5 rounded-full bg-primary ring-focus ring-offset-2 ring-offset-surface data-[dragging]:outline-2 data-[focus-visible]:ring-2\",\n\t\ttrack:\n\t\t\t\"before:-translate-y-1/2 relative col-span-2 col-start-1 w-full before:absolute before:top-1/2 before:h-0.5 before:w-full before:transform before:bg-secondary\",\n\t},\n});\n\nconst { root, thumb, track } = slider();\n\nconst SliderRoot = ({\n\tchildren,\n\tclassName,\n\t...props\n}: SliderProps & { className?: string }) => (\n\t<AriaSlider {...props} className={root({ className })}>\n\t\t{children}\n\t</AriaSlider>\n);\n\nconst SliderThumb = ({\n\tchildren,\n\tclassName,\n\t...props\n}: SliderThumbProps & { className?: string }) => (\n\t<AriaSliderTrack className={track()}>\n\t\t<AriaSliderThumb className={thumb({ className })} {...props} />\n\t</AriaSliderTrack>\n);\n\nconst SliderLabel = ({\n\tchildren,\n\tclassName,\n\t...props\n}: LabelProps & { className?: string }) => (\n\t<div className=\"col-span-2 my-4 flex w-full justify-between\">\n\t\t<Label className=\"text-fg text-sm\" {...props}>\n\t\t\t{children}\n\t\t</Label>\n\t\t<SliderOutput className=\"text-fg text-sm\" />\n\t</div>\n);\n\nexport { SliderRoot, SliderThumb, SliderLabel };\n",
  "switch": "\"use client\";\n\nimport type { ReactNode } from \"react\";\n\nimport {\n\tSwitch as AriaSwitch,\n\ttype SwitchProps as AriaSwitchProps,\n\tLabel,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nconst switchStyles = tv({\n\tslots: {\n\t\troot: \"group flex items-center gap-2 transition-none duration-200\",\n\t\tindicator:\n\t\t\t\"h-6 w-10 cursor-pointer rounded-xl bg-secondary duration-200 before:mx-[3px] before:mt-[3px] before:block before:size-4.5 before:rounded-2xl before:bg-surface before:transition-all data-[selected]:bg-primary group-data-[selected]:bg-primary group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-focus group-data-[focus-visible]:ring-offset-2 group-data-[focus-visible]:ring-offset-surface group-data-[selected]:before:translate-x-4\",\n\t\tlabel: \"font-semibold text-fg text-sm\",\n\t},\t\n});\n\nconst styles = switchStyles();\n\ninterface SwitchProps extends AriaSwitchProps {\n\tchildren?: ReactNode;\n\tclassName?: string;\n}\n\n const Switch = ({ className, children, ...restProps }: SwitchProps) => (\n\t<AriaSwitch className={styles.root({ className })} {...restProps}>\n\t\t<div className={styles.indicator()} />\n\t\t<Label className={styles.label()}> {children}</Label>\n\t</AriaSwitch>\n);\n\nexport { Switch };\nexport type { SwitchProps };",
  "table": "\"use client\";\n\nimport {\n\tColumn as AriaColumn,\n\tTable as AriaTable,\n\tTableBody as AriaTableBody,\n\tTableHeader as AriaTableheader,\n\tCell,\n\ttype CellProps,\n\tCollection,\n\ttype ColumnProps,\n\tRow,\n\ttype RowProps,\n\ttype TableHeaderProps,\n\ttype TableProps,\n\tuseTableOptions,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nimport { Menu } from \"lucide-react\";\n\nimport { Button } from \"../button/button\";\nimport { Checkbox } from \"../checkbox/checkbox\";\n\nconst table = tv({\n\tslots: {\n\t\troot: \"table min-h-[100px] border-separate border-spacing-0 self-start rounded-xl border border-border p-4 outline-none\",\n\t\tcolumn: \"border-border border-b-2 px-4 py-1 text-left outline-none\",\n\t\theader: \"text-fg after:table-row after:h-[2px]\",\n\t\tlabel: \"text-fg-3\",\n\t\trow: \"relative cursor-default rounded-xl text-fg outline-none ring-focus data-[focus-visible]:ring-2\",\n\t\tcell: \"px-4 py-2 outline-none ring-focus data-[focus-visible]:ring-2\",\n\t},\n});\n\nconst styles = table();\n\nconst TableBody = AriaTableBody;\n\nconst Table = ({\n\tchildren,\n\tclassName,\n\t...props\n}: TableProps & { className?: string }) => (\n\t<AriaTable {...props} className={styles.root({ className })}>\n\t\t{children}\n\t</AriaTable>\n);\n\nconst TableCell = ({\n\tchildren,\n\tclassName,\n\t...props\n}: CellProps & { className?: string }) => (\n\t<Cell {...props} className={styles.cell({ className })}>\n\t\t{children}\n\t</Cell>\n);\n\nconst TableColumn = ({\n\tchildren,\n\tclassName,\n\t...props\n}: ColumnProps & { className?: string }) => (\n\t<AriaColumn {...props} className={styles.column({ className })}>\n\t\t{children}\n\t</AriaColumn>\n);\n\nconst TableHeader = <T extends object>({\n\tchildren,\n\tclassName,\n\tcolumns,\n\t...props\n}: TableHeaderProps<T> & { className?: string }) => {\n\tconst { selectionBehavior, selectionMode, allowsDragging } =\n\t\tuseTableOptions();\n\treturn (\n\t\t<AriaTableheader {...props} className={styles.header({ className })}>\n\t\t\t{/* Add extra columns for drag and drop and selection. */}\n\t\t\t{allowsDragging && <TableColumn />}\n\t\t\t{selectionBehavior === \"toggle\" && (\n\t\t\t\t<TableColumn>\n\t\t\t\t\t{selectionMode === \"multiple\" && (\n\t\t\t\t\t\t<Checkbox slot=\"selection\"> </Checkbox>\n\t\t\t\t\t)}\n\t\t\t\t</TableColumn>\n\t\t\t)}\n\t\t\t<Collection items={columns}>{children}</Collection>\n\t\t</AriaTableheader>\n\t);\n};\n\nconst TableRow = <T extends object>({\n\tchildren,\n\tclassName,\n\tcolumns,\n\tid,\n\t...props\n}: RowProps<T> & { className?: string }) => {\n\tconst { selectionBehavior, allowsDragging } = useTableOptions();\n\treturn (\n\t\t<Row id={id} {...props} className={styles.row({ className })}>\n\t\t\t{allowsDragging && (\n\t\t\t\t<Cell className=\"ring-focus data-[focus-visible]:ring-2\">\n\t\t\t\t\t<Button className=\"bg-transparent\" slot=\"drag\">\n\t\t\t\t\t\t<Menu className=\"h-4 w-4 text-fg\" />\n\t\t\t\t\t</Button>\n\t\t\t\t</Cell>\n\t\t\t)}\n\t\t\t{selectionBehavior === \"toggle\" && (\n\t\t\t\t<Cell className=\"\">\n\t\t\t\t\t<Checkbox slot=\"selection\"> </Checkbox>\n\t\t\t\t</Cell>\n\t\t\t)}\n\t\t\t<Collection items={columns}>{children}</Collection>\n\t\t</Row>\n\t);\n};\n\nexport { TableColumn, Table, TableBody, TableCell, TableHeader, TableRow };\n",
  "tabs": "\"use client\";\n\nimport {\n\tTab as AriaTab,\n\tTabList as AriaTabList,\n\ttype TabListProps as AriaTabListProps,\n\tTabPanel as AriaTabPanel,\n\ttype TabPanelProps as AriaTabPanelProps,\n\ttype TabProps as AriaTabProps,\n\ttype TabsProps as AriaTabsProps,\n\tTabs as AriaTabsRoot,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nconst tabs = tv({\n\tslots: {\n\t\troot: \"flex w-full flex-col items-start\",\n\t\tlist: \"relative inline-flex items-center justify-between gap-6 rounded-md p-1\",\n\t\ttab: \"relative flex w-fit cursor-pointer justify-center rounded-2xl border-primary pb-0.5 font-semibold text-fg-muted outline-none ring-focus ring-offset-2 ring-offset-surface transition-colors duration-200 aria-selected:cursor-default aria-selected:rounded-none aria-selected:border-b-2 aria-selected:pb-0 aria-selected:text-primary aria-selected:hover:bg-transparent data-[hovered]:text-primary data-[focus-visible]:ring-2\",\n\t\tpanel:\n\t\t\t\"mt-4 w-96 rounded-xl p-4 outline-none ring-focus data-[focus-visible]:ring-2\",\n\t},\n});\n\nconst styles = tabs();\n\ninterface TabsProps extends Omit<AriaTabsProps, \"className\"> {\n\tclassName?: string;\n}\n\nconst TabsRoot = ({ children, className, ...props }: TabsProps) => (\n\t<AriaTabsRoot {...props} className={styles.root({ className })}>\n\t\t{children}\n\t</AriaTabsRoot>\n);\n\ninterface TabListProps<T> extends Omit<AriaTabListProps<T>, \"className\"> {\n\tclassName?: string;\n}\n\nconst TabList = <T extends object>({\n\tchildren,\n\tclassName,\n\t...props\n}: TabListProps<T>) => (\n\t<AriaTabList {...props} className={styles.list({ className })}>\n\t\t{children}\n\t</AriaTabList>\n);\n\ninterface TabProps extends Omit<AriaTabProps, \"className\"> {\n\tclassName?: string;\n}\n\nconst Tab = ({ children, className, ...props }: TabProps) => (\n\t<AriaTab {...props} className={styles.tab({ className })}>\n\t\t{children}\n\t</AriaTab>\n);\n\ninterface TabPanelProps extends Omit<AriaTabPanelProps, \"className\"> {\n\tclassName?: string;\n}\n\nconst TabPanel = ({ children, className, ...props }: TabPanelProps) => (\n\t<AriaTabPanel {...props} className={styles.panel({ className })}>\n\t\t{children}\n\t</AriaTabPanel>\n);\n\nexport { Tab, TabList, TabPanel, TabsRoot };\nexport type { TabsProps, TabListProps, TabProps, TabPanelProps }; ",
  "tag-group": "\"use client\";\n\nimport {\n\tTag as AriaTag,\n\tTagGroup as AriaTagGroup,\n\ttype TagGroupProps as AriaTagGroupProps,\n\ttype TagProps as AriaTagProps,\n\tLabel,\n\tTagList,\n\ttype TagListProps,\n\tText,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nconst tagGroup = tv({\n\tslots: {\n\t\troot: \"flex flex-col gap-2 text-sm\",\n\t\tlist: \"flex flex-wrap gap-2\",\n\t\ttag: \"flex cursor-default items-center rounded-full border border-border px-2 py-1 outline-none ring-focus ring-offset-2 ring-offset-surface aria-selected:border-primary aria-selected:bg-primary aria-selected:text-primary-fg data-[focus-visible]:ring-2\",\n\t},\n});\n\nconst styles = tagGroup();\n\ninterface TagGroupProps<T>\n\textends Omit<AriaTagGroupProps, \"children\">,\n\t\tPick<TagListProps<T>, \"items\" | \"children\" | \"renderEmptyState\"> {\n\tlabel?: string;\n\tdescription?: string;\n\terrorMessage?: string;\n}\n\nconst TagGroup = <T extends object>({\n\tlabel,\n\tclassName,\n\tdescription,\n\terrorMessage,\n\titems,\n\tchildren,\n\trenderEmptyState,\n\t...props\n}: TagGroupProps<T>) => (\n\t<AriaTagGroup className={styles.root({ className })} {...props}>\n\t\t{label && <Label className=\"text-primary text-sm\">{label}</Label>}\n\t\t<TagList\n\t\t\tclassName={styles.list()}\n\t\t\titems={items}\n\t\t\trenderEmptyState={renderEmptyState}\n\t\t>\n\t\t\t{children}\n\t\t</TagList>\n\t\t{description && (\n\t\t\t<Text className=\"text-sm\" slot=\"description\">\n\t\t\t\t{description}\n\t\t\t</Text>\n\t\t)}\n\t\t{errorMessage && (\n\t\t\t<Text className=\"text-danger text-sm\" slot=\"errorMessage\">\n\t\t\t\t{errorMessage}\n\t\t\t</Text>\n\t\t)}\n\t</AriaTagGroup>\n);\n\nconst Tag = ({\n\tchildren,\n\tclassName,\n\t...props\n}: AriaTagProps & { className?: string }) => {\n\tconst textValue = typeof children === \"string\" ? children : undefined;\n\treturn (\n\t\t<AriaTag\n\t\t\tclassName={styles.tag({ className })}\n\t\t\ttextValue={textValue}\n\t\t\t{...props}\n\t\t>\n\t\t\t{children}\n\t\t</AriaTag>\n\t);\n};\n\nexport { Tag, TagGroup };\n",
  "time-field": "\"use client\";\n\nimport type {\n\tTimeFieldProps as AriaTimeFieldProps,\n\tTimeValue,\n} from \"react-aria-components\";\nimport {\n\tTimeField as AriaTimeField,\n\tDateInput,\n\tDateSegment,\n\tFieldError,\n\tLabel,\n\tText,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nconst timeField = tv({\n\tslots: {\n\t\tinput:\n\t\t\t\"appearance-none rounded-lg border border-border bg-surface px-3 py-1.75 outline-none ring-primary transition-all data-[disabled]:cursor-not-allowed data-[focus-within]:border-transparent data-[disabled]:bg-primary/10 data-[focus-within]:bg-surface data-[disabled]:text-fg-disabled data-[focus-within]:ring-2 [&::placeholder]:text-sm [&::placeholder]:focus:text-primary-fg\",\n\t\tsegmentStyles:\n\t\t\t\"rounded-md p-1 text-end outline-none focus:bg-primary focus:text-primary-fg data-[placeholder]:text-fg-muted data-[type='literal']:text-fg-muted\",\n\t},\n});\n\nconst styles = timeField();\n\ninterface TimeFieldProps<T extends TimeValue> extends AriaTimeFieldProps<T> {\n\tlabel?: string;\n\tdescription?: string;\n\terrorMessage?: string;\n}\n\nconst TimeField = <T extends TimeValue>({\n\tlabel,\n\tdescription,\n\terrorMessage,\n\t...props\n}: TimeFieldProps<T>) => (\n\t<AriaTimeField className=\"flex w-fit min-w-36 flex-col gap-1\" {...props}>\n\t\t{label && <Label className=\"text-sm\">{label}</Label>}\n\t\t<DateInput className={styles.input()}>\n\t\t\t{(segment) => (\n\t\t\t\t<DateSegment className={styles.segmentStyles()} segment={segment} />\n\t\t\t)}\n\t\t</DateInput>\n\t\t{description && (\n\t\t\t<Text className=\"text-fg-muted text-sm\" slot=\"description\">\n\t\t\t\t{description}\n\t\t\t</Text>\n\t\t)}\n\t\t<FieldError className=\"text-danger text-sm\">{errorMessage}</FieldError>\n\t</AriaTimeField>\n);\n\nexport { TimeField };\nexport type { TimeFieldProps };\n",
  "toggle": "\"use client\";\n\nimport type { ReactNode } from \"react\";\n\nimport {\n\tToggleButton,\n\tToggleButtonGroup,\n\ttype ToggleButtonGroupProps,\n\ttype ToggleButtonProps,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nconst toggle = tv({\n\tbase: \"inline-flex appearance-none items-center justify-center rounded-full bg-surface-2 px-4 py-1 font-medium outline-none ring-focus ring-offset-2 ring-offset-surface transition-transform duration-100 disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-primary data-[selected]:text-primary-fg data-[focus-visible]:ring-2\",\n});\n\nconst toggleGroup = tv({\n\tbase: \"flex min-h-11 gap-1 rounded-full border border-border bg-surface-2 p-1\",\n});\n\ninterface ToggleProps extends Omit<ToggleButtonProps, \"className\"> {\n\tclassName?: string;\n}\n\nconst Toggle = ({ className, children, ...props }: ToggleProps) => (\n\t<ToggleButton className={toggle({ className })} {...props}>\n\t\t{children}\n\t</ToggleButton>\n);\n\ninterface ToggleGroupProps extends ToggleButtonGroupProps {\n\tclassName?: string;\n\tchildren: ReactNode;\n}\n\nconst ToggleGroup = ({ className, children, ...props }: ToggleGroupProps) => (\n\t<ToggleButtonGroup {...props} className={toggleGroup({ className })}>\n\t\t{children}\n\t</ToggleButtonGroup>\n);\n\nexport { Toggle, ToggleGroup };\nexport type { ToggleProps, ToggleGroupProps };\n",
  "tooltip": "\"use client\";\n\nimport type { ReactNode } from \"react\";\n\nimport {\n\tTooltip as AriaTooltip,\n\ttype TooltipProps as AriaTooltipProps,\n\tTooltipTrigger as AriaTooltipTrigger,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nconst tooltip = tv({\n\tbase: \"[&[data-entering]]:fade-in [&[data-exiting]]:fade-out m-1 max-w-sm rounded-full border border-border bg-surface px-4 py-2 text-fg shadow-xl outline-none [&[data-entering]]:animate-fade-in [&[data-exiting]]:animate-fade-out\",\n});\n\nconst TooltipTrigger = AriaTooltipTrigger;\n\ninterface TooltipProps extends Omit<AriaTooltipProps, \"children\"> {\n\tclassName?: string;\n\tchildren: ReactNode;\n}\n\nconst Tooltip = ({ children, className, ...props }: TooltipProps) => (\n\t<AriaTooltip className={tooltip({ className })} {...props}>\n\t\t{children}\n\t</AriaTooltip>\n);\n\nexport { Tooltip, TooltipTrigger };\n"
};

const tailwindCSS = "@variant dark ([data-theme=\"dark\"] &);\n\n:root {\n  /* SURFACES (neutrals & elevation) */\n  --surface: oklch(98.5% 0 0); /* app/page background */\n  --surface-2: oklch(97% 0 0); /* card / raised */\n\n  /* CONTENT (foreground) */\n  --fg: oklch(14.5% 0 0); /* primary reading text */\n  --fg-muted: oklch(55.6% 0 0); /* secondary text, captions */\n  --fg-inverse: oklch(98.5% 0 0); /* text on dark */\n  --fg-disabled: oklch(70.8% 0 0); /* explicit disabled state text */\n\n  /* OUTLINES & DIVIDERS */\n  --border: oklch(87% 0 0); /* generic 1px rules, inputs */\n  --focus: oklch(68.5% 0.169 237.323); /* focus ring / a11y outline */\n\n  /* INTERACTIVE ROLES (paired bg / fg ) */\n  --primary: oklch(14.5% 0 0);\n  --primary-fg: oklch(98.5% 0 0);\n\n  --secondary: oklch(92.2% 0 0);\n  --secondary-fg: oklch(14.5% 0 0);\n\n  /* STATUS / FUNCTIONAL */\n  \n  --danger: oklch(63.7% 0.237 25.331);\n  --danger-fg: #ffffff;\n}\n\n[data-theme='dark'] {\n  /* SURFACES (neutrals & elevation) */\n  --surface: oklch(14.5% 0 0); /* app/page background */\n  --surface-2: oklch(20.5% 0 0); /* card / raised */\n\n  /* CONTENT (foreground) */\n  --fg: oklch(98.5% 0.001 106.423); /* primary reading text */\n  --fg-muted: oklch(55.6% 0 0); /* secondary text, captions */\n  --fg-inverse: oklch(98.5% 0 0); /* text on dark */\n  --fg-disabled: oklch(37.1% 0 0); /* explicit disabled state text */\n\n  /* OUTLINES & DIVIDERS */\n  --border: oklch(37.1% 0 0); /* generic 1px rules, inputs */\n  --focus: oklch(68.5% 0.169 237.323); /* focus ring / a11y outline */\n\n  /* INTERACTIVE ROLES (paired bg / fg ) */\n  --primary: oklch(98.5% 0 0);\n  --primary-fg: oklch(14.5% 0 0);\n\n  --secondary: oklch(26.9% 0 0);\n  --secondary-fg: oklch(98.5% 0 0);\n\n  /* STATUS / FUNCTIONAL */\n  \n  --danger: oklch(63.7% 0.237 25.331);\n  --danger-fg: oklch(98.5% 0 0);\n}\n\n@theme {\n  --color-surface: var(--surface);\n  --color-surface-2: var(--surface-2);\n  --color-fg: var(--fg);\n  --color-fg-muted: var(--fg-muted);\n  --color-fg-disabled: var(--fg-disabled);\n  --color-fg-inverse: var(--fg-inverse);\n  --color-border: var(--border);\n  --color-focus: var(--focus);\n  --color-primary: var(--primary);\n  --color-primary-fg: var(--primary-fg);\n  --color-secondary: var(--secondary);\n  --color-secondary-fg: var(--secondary-fg);\n  --color-danger: var(--danger);\n  --color-danger-fg: var(--danger-fg);\n}\n\n  /* clears the ‘X’ from Internet Explorer */\n  input[type=\"search\"]::-ms-clear {\n    display: none;\n    width: 0;\n    height: 0;\n  }\n  input[type=\"search\"]::-ms-reveal {\n    display: none;\n    width: 0;\n    height: 0;\n  }\n  /* clears the ‘X’ from Chrome */\n  input[type=\"search\"]::-webkit-search-decoration,\n  input[type=\"search\"]::-webkit-search-cancel-button,\n  input[type=\"search\"]::-webkit-search-results-button,\n  input[type=\"search\"]::-webkit-search-results-decoration {\n    display: none;\n  } \n";

export default registry;

// Helper functions
export type ComponentId = "accordion" | "badge" | "breadcrumbs" | "button" | "calendar" | "card" | "checkbox" | "combobox" | "command" | "date-field" | "date-picker" | "input" | "menu" | "meter" | "modal" | "popover" | "radio-group" | "select" | "slider" | "switch" | "table" | "tabs" | "tag-group" | "time-field" | "toggle" | "tooltip";

export function getComponent(id: ComponentId): ComponentRegistryEntry | null {
  return registry.components.find(comp => comp.id === id) || null;
}

export function getComponentsByCategory(category: string): ComponentRegistryEntry[] {
  return registry.components.filter(comp => comp.meta.category === category);
}

export function getComponentsByStatus(status: string): ComponentRegistryEntry[] {
  return registry.components.filter(comp => comp.meta.status === status);
}

export function searchComponents(query: string): ComponentRegistryEntry[] {
  const lowercaseQuery = query.toLowerCase();
  return registry.components.filter(comp => 
    comp.id.toLowerCase().includes(lowercaseQuery) ||
    comp.meta.name.toLowerCase().includes(lowercaseQuery) ||
    comp.meta.description.toLowerCase().includes(lowercaseQuery) ||
    comp.meta.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getComponentTemplate(id: ComponentId): string | null {
  return templateContents[id] || null;
}

export function getTailwindCSS(): string {
  return tailwindCSS;
}

export { registry };
export const COMPONENTS = registry.components;
export type { ComponentRegistry, ComponentRegistryEntry };
