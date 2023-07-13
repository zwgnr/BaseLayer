import type { APIRoute } from "astro";

type Component = {
  component: string;
  name: string;
  files: string;
};

const components: Component[] = [
  {
    component: "accordion.tsx",
    name: "Accordion.tsx",
    files: "import { styled } from \"@/lib/twc\";\nimport * as Accordion from \"@radix-ui/react-accordion\";\nimport { Minus } from \"lucide-react\";\n\nimport {\n  forwardRef,\n  type ComponentPropsWithoutRef,\n  type ElementRef,\n} from \"react\";\n\nexport const AccordionRoot = styled(\n  Accordion.Root,\n  \"rounded-lg bg-surface shadow-lg w-96\"\n);\n\nexport const AccordionItem = styled(\n  Accordion.Item,\n  \"border-b-2 border-surface-3 [&:last-child]:border-b-0\"\n);\n\nexport const AccordionContent = forwardRef<\n  ElementRef<typeof Accordion.Content>,\n  ComponentPropsWithoutRef<typeof Accordion.Content>\n>(({ className, children, ...props }, ref) => (\n  <div className=\"pb-4 pt-0\">\n    <Accordion.Content\n      className=\"overflow-hidden px-4 text-sm transition-all data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown\"\n      {...props}\n      ref={ref}\n    >\n      {children}\n    </Accordion.Content>\n  </div>\n));\n\n\nexport const AccordionTrigger = forwardRef<\n  ElementRef<typeof Accordion.Trigger>,\n  ComponentPropsWithoutRef<typeof Accordion.Trigger>\n>(({ className, children, ...props }, ref) => (\n  <Accordion.Header className=\"flex\">\n    <Accordion.Trigger\n      className=\"relative flex flex-1 items-center justify-between pl-4 font-medium transition-all [&:nth-child(1)]:[&[data-state=open]>svg]:rotate-180\"\n      {...props}\n      ref={ref}\n    >\n      <Minus className=\"absolute right-4 rotate-90 text-fg-3 transition-transform duration-500\" />\n      <Minus className=\"text-fg.3 absolute right-4 transition-transform\" />\n      {children}\n    </Accordion.Trigger>\n  </Accordion.Header>\n));\n"
  },
  {
    component: "badge.tsx",
    name: "Badge.tsx",
    files: "import { tv, VariantProps } from \"tailwind-variants\";\n\nexport const badge = tv({\n  base: \"flex items-center justify-center rounded-xl\",\n  variants: {\n    intent: {\n      default: \"bg-surface-3\",\n      info: \"bg-secondary text-secondary-fg\",\n      alert: \"bg-critical\",\n    },\n    size: {\n      sm: \"h-6 px-2 py-1 text-sm\",\n      md: \"h-8 px-4 py-1 text-base\",\n      lg: \"h-10 px-6 py-2 text-lg\",\n    },\n  },\n  defaultVariants: {\n    intent: \"default\",\n    size: \"md\",\n  },\n});\n\nexport interface BadgeProps\n  extends React.HTMLAttributes<HTMLSpanElement>,\n    VariantProps<typeof badge> {}\n\nexport const Badge = ({ className, size, intent, ...props }: BadgeProps) => (\n  <div className={badge({ size, intent, className })} {...props} />\n);\n"
  },
  {
    component: "button.tsx",
    name: "Button.tsx",
    files: "import { forwardRef, type ElementRef } from \"react\";\n\nimport {\n  Button as AriaButton,\n  ButtonProps as AriaButtonProps,\n} from \"react-aria-components\";\n\nimport { VariantProps, tv } from \"tailwind-variants\";\n\nexport const button = tv({\n  base: \"ring-offset-background focus-focus inline-flex appearance-none items-center justify-center rounded-lg font-medium outline-none transition-transform  duration-100 focus-visible:outline-none focus-visible:ring-2 active:scale-[.97] disabled:pointer-events-none disabled:opacity-50\",\n  variants: {\n    intent: {\n      primary: \"bg-primary text-primary-fg hover:bg-primary/70\",\n      secondary: \"bg-secondary text-secondary-fg hover:bg-secondary/70\",\n    },\n    state: {\n      filled: \"\",\n      ghost: \"\",\n      soft: \"\",\n      outline: \"\",\n    },\n    size: {\n      sm: \"h-8 px-2 text-sm\",\n      md: \"text-md h-10 px-4\",\n      lg: \"h-12 px-6 text-lg\",\n    },\n  },\n  compoundVariants: [\n    {\n      intent: \"primary\",\n      state: \"ghost\",\n      class: \"border-2 border-primary bg-primary/30 hover:bg-primary\",\n    },\n    {\n      intent: \"primary\",\n      state: \"soft\",\n      class:\n        \"bg-primary-200 text-primary-600 hover:bg-primary-400 hover:text-black\",\n    },\n    {\n      intent: \"primary\",\n      state: \"outline\",\n      class:\n        \"text-primary-content hover:bg-primary-500 border-2 border-primary bg-transparent hover:text-black\",\n    },\n    {\n      intent: \"secondary\",\n      state: \"ghost\",\n      class: \"border-2 border-primary bg-primary/30 hover:bg-primary\",\n    },\n    {\n      intent: \"secondary\",\n      state: \"soft\",\n      class:\n        \"bg-primary-200 text-primary-600 hover:bg-primary-400 hover:text-black\",\n    },\n    {\n      intent: \"secondary\",\n      state: \"outline\",\n      class:\n        \"text-primary-content hover:bg-primary-500 border-2 border-secondary bg-transparent hover:text-black\",\n    },\n  ],\n  defaultVariants: {\n    intent: \"primary\",\n    state: \"filled\",\n    size: \"md\",\n  },\n});\n\nexport interface ButtonProps\n  extends AriaButtonProps,\n    VariantProps<typeof button> {\n  className?: string | undefined;\n}\n\nexport const Button = forwardRef<ElementRef<typeof AriaButton>, ButtonProps>(\n  ({ className, size, intent, state, children, ...props }, ref) => {\n    return (\n      <AriaButton\n        className={button({ className, size, intent, state })}\n        ref={ref}\n        {...props}\n      >\n        {children}\n      </AriaButton>\n    );\n  }\n);\n\nButton.displayName = \"Button\";\n"
  },
  {
    component: "calendar.tsx",
    name: "Calendar.tsx",
    files: "import { ChevronLeft, ChevronRight } from \"lucide-react\";\nimport { ElementRef, forwardRef } from \"react\";\nimport {\n  Calendar as AriaCalendar,\n  CalendarProps as AriaCalendarProps,\n  Button,\n  CalendarCell,\n  CalendarGrid,\n  CalendarGridBody,\n  CalendarGridHeader,\n  CalendarHeaderCell,\n  DateValue,\n  Heading,\n  Text,\n} from \"react-aria-components\";\n\nimport { tv } from \"tailwind-variants\";\n\nexport const calendar = tv({\n  slots: {\n    root: \"w-fit max-w-full text-fg border rounded-xl p-6 shadow-lg bg-surface\",\n    header: \"mb-4 flex items-center \",\n    heading: \"text-md m-0 flex-1 text-center text-lg font-bold\",\n    gridHeaderCell: \"pb-2 text-sm text-fg-5\",\n    iconButton:\n      \"m-0 flex h-8 w-8 appearance-none items-center justify-center rounded-xl text-center outline-none hover:bg-surface-2\",\n    cell: \"flex h-8 w-8 items-center justify-center rounded-xl p-5 text-center text-sm outline-none hover:bg-surface-2 [&[data-outside-month]]:hidden  [&[data-pressed]]:bg-surface-2 [&[data-selected]]:bg-primary [&[data-selected]]:text-primary-fg [&[data-unavailable]]:text-fg-6 [&[data-unavailable]]:line-through\",\n  },\n});\n\nconst { root, header, heading, gridHeaderCell, cell, iconButton } = calendar();\n\ninterface CalendarProps<T extends DateValue>\n  extends Omit<AriaCalendarProps<T>, \"className\"> {\n  error?: string;\n  className?: string;\n}\n\nexport const Calendar = forwardRef<\n  ElementRef<typeof AriaCalendar>,\n  CalendarProps<DateValue>\n>(({ className, error, children, ...props }, ref) => (\n  <AriaCalendar ref={ref} {...props} className={root({ className })}>\n    <header className={header()}>\n      <Button className={iconButton()} slot=\"previous\">\n        <ChevronLeft className=\"h-6 w-6\" />\n      </Button>\n      <Heading className={heading()} />\n      <Button className={iconButton()} slot=\"next\">\n        <ChevronRight className=\"h-6 w-6\" />\n      </Button>\n    </header>\n    <CalendarGrid>\n      <CalendarGridHeader>\n        {(day) => (\n          <CalendarHeaderCell className={gridHeaderCell()}>\n            {day}\n          </CalendarHeaderCell>\n        )}\n      </CalendarGridHeader>\n      <CalendarGridBody>\n        {(date) => <CalendarCell className={cell()} date={date} />}\n      </CalendarGridBody>\n    </CalendarGrid>\n    {error && <Text slot=\"error\">{error}</Text>}\n  </AriaCalendar>\n));\n"
  },
  {
    component: "checkbox.tsx",
    name: "Checkbox.tsx",
    files: "import { Check } from \"lucide-react\";\nimport { ElementRef, forwardRef } from \"react\";\nimport {\n  CheckboxProps as AriaCheckBoxProps,\n  Checkbox as AriaCheckbox,\n} from \"react-aria-components\";\nimport { VariantProps, tv } from \"tailwind-variants\";\n\nexport const checkbox = tv({\n  slots: {\n    root: \"flex items-center justify-center gap-2 py-1\",\n    box: \"flex items-center justify-center rounded-lg border transition-all duration-200\",\n  },\n  variants: {\n    size: {\n      sm: { box: \"h-4 w-4 rounded-md\", root: \"text-sm\" },\n      md: { box: \"h-6 w-6 rounded-lg\", root: \"text-md\" },\n      lg: { box: \"h-8 w-8 rounded-lg\", root: \"text-lg\" },\n    },\n    selected: {\n      true: { box: \"bg-primary border-primary\" },\n    },\n  },\n  defaultVariants: {\n    size: \"md\",\n    selected: false,\n  },\n});\n\nexport type CheckboxPotionProps = VariantProps<typeof checkbox>;\n\ninterface CheckBoxProps\n  extends VariantProps<typeof checkbox>,\n    AriaCheckBoxProps {\n  className?: string | undefined;\n}\n\nexport const Checkbox = forwardRef<\n  ElementRef<typeof AriaCheckbox>,\n  CheckBoxProps\n>(({ className, size, children, ...props }, ref) => {\n  return (\n    <AriaCheckbox\n      className={checkbox({ size }).root({ className })}\n      ref={ref}\n      {...props}\n    >\n      {({ isSelected }) => (\n        <>\n          <div className={checkbox({ selected: isSelected, size }).box()}>\n            {isSelected && <Check />}\n          </div>\n          {children}\n        </>\n      )}\n    </AriaCheckbox>\n  );\n});\n"
  },
  {
    component: "checkboxGroup.tsx",
    name: "CheckboxGroup.tsx",
    files: "import { ElementRef, forwardRef } from \"react\";\nimport type { CheckboxGroupProps as AriaCheckboxGroupProps } from \"react-aria-components\";\nimport {\n  CheckboxGroup as AriaCheckboxGroup,\n  Text,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nexport const checkboxGroup = tv({\n  base: \"flex flex-col gap-2 items-start\",\n});\n\ninterface CheckboxGroupProps\n  extends Omit<AriaCheckboxGroupProps, \"className\" | \"children\"> {\n  className?: string;\n  children?: React.ReactNode;\n  label?: string;\n  description?: string;\n  error?: string;\n}\n\nexport const CheckboxGroup = forwardRef<\n  ElementRef<typeof AriaCheckboxGroup>,\n  CheckboxGroupProps\n>(({ className, label, description, error, children, ...props }, ref) => (\n  <AriaCheckboxGroup\n    ref={ref}\n    {...props}\n    className={checkboxGroup({ className })}\n  >\n    {label}\n    {children}\n    {description && (\n      <Text className=\"text-md\" slot=\"description\">\n        {description}\n      </Text>\n    )}\n    {error && (\n      <Text className=\"text-md text-critical\" slot=\"error\">\n        {error}\n      </Text>\n    )}\n  </AriaCheckboxGroup>\n));\n"
  },
  {
    component: "datePicker.tsx",
    name: "DatePicker.tsx",
    files: "import {\n  DatePicker as AriaDatePicker,\n  Button,\n  DateInput,\n  DateSegment,\n  Dialog,\n  Group,\n  Label,\n  Popover,\n} from \"react-aria-components\";\n\nimport { Calendar } from \"@/components/base/calendar\";\nimport { ChevronDown } from \"lucide-react\";\nimport { ElementRef, forwardRef } from \"react\";\nimport type {\n  DatePickerProps as AriaDatePickerProps,\n  DateValue,\n} from \"react-aria-components\";\nimport { Text } from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nexport const datePicker = tv({\n  slots: {\n    group: \"relative flex w-fit  items-center rounded-2xl bg-surface border shadow-lg\",\n    iconButton:\n      \"appearance-none border-none bg-primary p-0 align-middle text-primary-fg outline-none\",\n    input:\n      \"flex w-fit whitespace-nowrap rounded-xl border-2 border-transparent bg-transparent py-2 pl-2 pr-12 focus-within:border-secondary\",\n    inputButton:\n      \"absolute right-2 flex appearance-none items-center justify-center rounded-lg border-0 outline-none hover:bg-surface-2\",\n    dateSegment: \"pr-2 text-end focus:outline-none\",\n    popover:\n      \"overflow-auto [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut\",\n  },\n});\n\nconst { group, input, inputButton, dateSegment, popover } = datePicker();\n\ninterface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {\n  label?: string;\n  description?: string;\n  error?: string;\n}\n\nexport const DatePicker = forwardRef<\n  ElementRef<typeof AriaDatePicker>,\n  DatePickerProps<DateValue>\n>(({ className, label, description, error, children, ...props }, ref) => (\n  <AriaDatePicker ref={ref} className={className} {...props}>\n    <Label className=\"text-sm\">{label}</Label>\n    <Group className={group()}>\n      <DateInput className={input()}>\n        {(segment) => (\n          <DateSegment className={dateSegment()} segment={segment} />\n        )}\n      </DateInput>\n      <Button className={inputButton()}>\n        <ChevronDown />\n      </Button>\n    </Group>\n    {description && <Text className=\"text-sm\" slot=\"description\">{description}</Text>}\n    {error && <Text slot=\"error\">{error}</Text>}\n    <Popover className={popover()}>\n      <Dialog>\n        <Calendar />\n      </Dialog>\n    </Popover>\n  </AriaDatePicker>\n));\n"
  },
  {
    component: "dialog.tsx",
    name: "Dialog.tsx",
    files: "import { ComponentPropsWithoutRef, ElementRef, forwardRef } from \"react\";\nimport {\n  Dialog as AriaDialogContent,\n  DialogTrigger as AriaDialogTrigger,\n  Modal,\n  ModalOverlay,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nexport const dialog = tv({\n  slots: {\n    container: \"fixed inset-0 z-40 flex items-center justify-center\",\n    content: \"flex flex-col gap-6 outline-none\",\n    modal:\n      \"max-w-1/2 w-96 rounded-2xl bg-surface p-6 outline-none [&[data-entering]]:animate-zoom\",\n    overlay:\n      \"fixed left-0 top-0 z-50 flex h-[var(--visual-viewport-height)] w-screen items-center justify-center bg-slate-500/50 [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut\",\n  },\n});\n\nconst { overlay, modal, content } = dialog();\n\nexport const DialogModal = forwardRef<\n  ElementRef<typeof Modal>,\n  Omit<ComponentPropsWithoutRef<typeof Modal>, \"className\"> & {\n    className?: string;\n  }\n>(({ className, children, ...props }, ref) => (\n  <ModalOverlay isDismissable={true} className={overlay()}>\n    <Modal ref={ref} {...props} className={modal({ className })}>\n      {children}\n    </Modal>\n  </ModalOverlay>\n));\n\nexport const DialogContent = forwardRef<\n  ElementRef<typeof AriaDialogContent>,\n  ComponentPropsWithoutRef<typeof AriaDialogContent>\n>(({ className, children, ...props }, ref) => (\n  <AriaDialogContent ref={ref} {...props} className={content({ className })}>\n    {children}\n  </AriaDialogContent>\n));\n\nexport const DialogTrigger = AriaDialogTrigger;\n"
  },
  {
    component: "listBox.tsx",
    name: "ListBox.tsx",
    files: "import { Button } from \"@/components/base/button\";\nimport { Checkbox } from \"@/components/base/checkbox\";\nimport { Menu } from \"lucide-react\";\nimport { ComponentPropsWithoutRef, ElementRef, forwardRef } from \"react\";\nimport { ListBox as AriaListBox, Item } from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nexport const listBox = tv({\n  slots: {\n    root: \"flex w-72 flex-col overflow-auto rounded-xl border-2 border-surface-2 p-2 outline-none \",\n    item: \"relative my-1 flex cursor-default flex-row items-center rounded-xl p-4  outline-none  aria-selected:bg-primary aria-selected:text-primary-fg [&[data-dragging]]:opacity-50\",\n  },\n});\n\nconst { root, item } = listBox();\n\nexport const ListBox = forwardRef<\n  ElementRef<typeof AriaListBox>,\n  Omit<ComponentPropsWithoutRef<typeof AriaListBox>, \"className\"> & {\n    className?: string;\n  }\n>(({ className, children, ...props }, ref) => (\n  <AriaListBox ref={ref} {...props} className={root({ className })}>\n    {children}\n  </AriaListBox>\n));\n\nexport const ListBoxItem = forwardRef<\n  ElementRef<typeof Item>,\n  Omit<ComponentPropsWithoutRef<typeof Item>, \"className\"> & {\n    className?: string;\n  }\n>(({ className, children, ...props }, ref) => {\n  let textValue = typeof children === \"string\" ? children : undefined;\n\n  return (\n    <Item\n      textValue={textValue}\n      {...props}\n      className={item({ className })}\n      ref={ref}\n    >\n      {({ selectionMode, selectionBehavior, allowsDragging, isSelected }) => (\n        <div className=\"flex items-center gap-2\">\n          <>\n            {/* Add elements for drag and drop and selection. */}\n            {allowsDragging && (\n         \n                <Menu\n                  className={`h-4 w-4 mr-4 text-fg ${\n                    isSelected ? \"text-primary-fg\" : \"\"\n                  }`}\n                />\n           \n            )}\n            {}\n            {children}\n          </>\n        </div>\n      )}\n    </Item>\n  );\n});\n"
  },
  {
    component: "menu.tsx",
    name: "Menu.tsx",
    files: "import { ComponentPropsWithoutRef, forwardRef, type ElementRef } from \"react\";\n\nimport {\n  Menu as AriaMenu,\n  MenuTrigger as AriaMenuTrigger,\n  Item,\n  Popover,\n  type MenuTriggerProps,\n  Separator,\n  Section as AriaSection,\n  Header as AriaHeader\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\nimport { Button } from \"./button\";\n\nexport const menu = tv({\n  slots: {\n    menuPopover:\n      \"overflow-auto rounded-xl shadow-xl bg-surface border [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut \",\n    content: \"flex h-full w-56 flex-col gap-2  p-2 outline-none\",\n    item: \"relative text-fg outline-none flex justify-between hover:bg-surface-2 p-2 rounded-xl cursor-pointer\",\n    separator:\"h-[1px] bg-surface-3 mx-2 my-2\"\n  },\n});\n\nconst { menuPopover, content, item, separator } = menu();\n\nexport interface MenuButtonProps extends MenuTriggerProps {\n  className?: string | undefined;\n  label?: string;\n}\n\nexport const MenuTrigger = AriaMenuTrigger\nexport const Section = AriaSection\nexport const Header = AriaHeader\n\nexport const MenuConent = forwardRef<\n  ElementRef<typeof AriaMenu>,\n  ComponentPropsWithoutRef<typeof AriaMenu>\n>(({ className, children, ...props }, ref) => (\n  <Popover  className={menuPopover()}>\n    <AriaMenu ref={ref} {...props} className={content({ className })}>\n      {children}\n    </AriaMenu>\n  </Popover>\n));\n\nexport const MenuItem = forwardRef<\n  ElementRef<typeof Item>,\n  Omit<ComponentPropsWithoutRef<typeof Item>, \"className\"> & {\n    className?: string;\n  }\n>(({ className, children, ...props }, ref) => (\n  <Item ref={ref} {...props} className={item({ className })}>\n    {children}\n  </Item>\n));\n\nexport const MenuSeperator = forwardRef<\n  ElementRef<typeof Separator>,\n  Omit<ComponentPropsWithoutRef<typeof Separator>, \"className\"> & {\n    className?: string;\n  }\n>(({ className, ...props }, ref) => (\n  <Separator ref={ref} {...props} className={separator({ className })} />\n));\n"
  },
  {
    component: "slider.tsx",
    name: "Slider.tsx",
    files: "import { cx, styled } from \"@/lib/twc\";\n\nimport {\n  forwardRef,\n  type ComponentPropsWithoutRef,\n  type ElementRef,\n} from \"react\";\n\nimport {\n  Slider as AriaSlider,\n  SliderThumb as AriaSliderThumb,\n  SliderTrack as AriaSliderTrack,\n  Label,\n  SliderOutput,\n} from \"react-aria-components\";\n\nexport const SliderRoot = styled(\n  AriaSlider,\n  \"grid grid-cols-1  w-64 auto-cols-fr  text-gray-900 \"\n);\n\nexport const StyledSliderThumb = styled(\n  AriaSliderThumb,\n  \"bg-slateblue h-5 w-5 rounded-full bg-primary\"\n);\n\nexport const StyledSliderTrack = styled(\n  AriaSliderTrack,\n  \"relative col-start-1 col-span-2 w-full before:absolute before:top-1/2 before:h-0.5 before:w-full before:-translate-y-1/2 before:transform before:bg-gray-400\"\n);\n\nexport const SliderThumb = forwardRef<\n  ElementRef<typeof StyledSliderThumb>,\n  ComponentPropsWithoutRef<typeof StyledSliderThumb>\n>(({ children, className, ...props }, ref) => (\n  <StyledSliderTrack>\n    <StyledSliderThumb className={className} ref={ref} {...props} />\n  </StyledSliderTrack>\n));\n\nexport const SliderLabel = forwardRef<\n  ElementRef<typeof Label>,\n  ComponentPropsWithoutRef<typeof Label>\n>(({ children, className, ...props }, ref) => (\n  <div className=\"col-span-2 my-4 flex w-full justify-between\">\n    <Label className={cx(\"text-sm\", className)} ref={ref} {...props}>\n      {children}\n    </Label>\n    <SliderOutput className=\"text-sm\" />\n  </div>\n));\n"
  },
  {
    component: "switch.tsx",
    name: "Switch.tsx",
    files: "import { forwardRef, ReactNode, type ElementRef } from \"react\";\n\nimport {\n  Switch as AriaSwitch,\n  SwitchProps as AriaSwitchProps,\n} from \"react-aria-components\";\n\nimport { tv, type VariantProps } from \"tailwind-variants\";\n\nexport const switchVariants = tv({\n  slots: {\n    root: \"flex items-center gap-2 transition-none duration-200\",\n    indicator:\n      \"h-6 w-10 cursor-pointer rounded-2xl bg-surface-3 duration-200 before:mx-[2px] before:mt-[2px] before:block before:h-5 before:w-5 before:rounded-2xl before:bg-white before:transition-all\",\n    label: \"text-fg-3\",\n  },\n  variants: {\n    selected: {\n      true: { indicator: \"bg-primary before:translate-x-4\" },\n    },\n  },\n  defaultVariants: {\n    selected: false,\n  },\n});\n\nexport type SwitchVariantProps = VariantProps<typeof switchVariants>;\n\ninterface SwitchProps\n  extends VariantProps<typeof switchVariants>,\n    AriaSwitchProps {\n  children?: ReactNode;\n  className?: string | undefined;\n}\n\nexport const Switch = forwardRef<ElementRef<typeof AriaSwitch>, SwitchProps>(\n  ({ className, children, ...props }, ref) => {\n    return (\n      <AriaSwitch\n        className={switchVariants().root({ className })}\n        ref={ref}\n        {...props}\n      >\n        {({ isSelected }) => (\n          <>\n            <div\n              className={switchVariants({\n                selected: isSelected,\n              }).indicator()}\n            />\n            {children}\n          </>\n        )}\n      </AriaSwitch>\n    );\n  }\n);\n"
  },
  {
    component: "tabs.tsx",
    name: "Tabs.tsx",
    files: "import { ComponentPropsWithoutRef, forwardRef, type ElementRef } from \"react\";\nimport {\n  Tab as AriaTab,\n  TabList as AriaTabList,\n  TabPanel as AriaTabPanel,\n  Tabs as AriaTabsRoot,\n} from \"react-aria-components\";\nimport { tv } from \"tailwind-variants\";\n\nexport const tabs = tv({\n  slots: {\n    root: \"flex w-full flex-col items-center\",\n    list: \"text-muted-foreground relative inline-flex w-80 items-center justify-between rounded-xl bg-surface-2 p-1\",\n    trigger:\n      \"text-md focus-visible:ring-ring flex  h-10 appearance-none  items-center justify-center whitespace-nowrap rounded-md px-3 py-3 font-medium text-fg-5 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none  disabled:opacity-50 data-[selected]:bg-surface-2 data-[selected]:text-fg\",\n    panel:\n      \"focus-visible:ring-ring  mt-4 p-4 focus-visible:outline-none focus-visible:ring-2\",\n    tab: \"relative flex w-1/3 cursor-pointer justify-center rounded-xl p-2 outline-none transition-colors  duration-200 hover:bg-surface aria-selected:cursor-default aria-selected:bg-surface aria-selected:shadow-md\",\n  },\n});\n\nconst { list, root, panel, tab } = tabs();\n\nexport const TabsRoot = forwardRef<\n  ElementRef<typeof AriaTabsRoot>,\n  Omit<ComponentPropsWithoutRef<typeof AriaTabsRoot>, \"className\"> & {\n    className?: string;\n  }\n>(({ className, children, ...props }, ref) => (\n  <AriaTabsRoot ref={ref} {...props} className={root({ className })}>\n    {children}\n  </AriaTabsRoot>\n));\n\nTabsRoot.displayName = AriaTabsRoot.displayName;\n\nexport const TabList = forwardRef<\n  ElementRef<typeof AriaTabList>,\n  Omit<ComponentPropsWithoutRef<typeof AriaTabList>, \"className\"> & {\n    className?: string;\n  }\n>(({ className, children, ...props }, ref) => (\n  <AriaTabList ref={ref} {...props} className={list({ className })}>\n    {children}\n  </AriaTabList>\n));\n\nTabList.displayName = AriaTabList.displayName;\n\nexport const Tab = forwardRef<\n  ElementRef<typeof AriaTab>,\n  Omit<ComponentPropsWithoutRef<typeof AriaTab>, \"className\"> & {\n    className?: string;\n  }\n>(({ className, children, ...props }, ref) => (\n  <AriaTab ref={ref} {...props} className={tab({ className })}>\n    {children}\n  </AriaTab>\n));\n\nTab.displayName = AriaTab.displayName;\n\nexport const TabPanel = forwardRef<\n  ElementRef<typeof AriaTabPanel>,\n  Omit<ComponentPropsWithoutRef<typeof AriaTabPanel>, \"className\"> & {\n    className?: string;\n  }\n>(({ className, children, ...props }, ref) => (\n  <AriaTabPanel ref={ref} {...props} className={panel({ className })}>\n    {children}\n  </AriaTabPanel>\n));\n\nTabPanel.displayName = AriaTabPanel.displayName;\n"
  },
  {
    component: "toggle.tsx",
    name: "Toggle.tsx",
    files: "import { forwardRef, type ElementRef } from \"react\";\n\nimport { ToggleButton, ToggleButtonProps } from \"react-aria-components\";\n\nimport { VariantProps, tv } from \"tailwind-variants\";\n\nexport const toggle = tv({\n  base: \"ring-offset-background focus-focus inline-flex appearance-none items-center justify-center rounded-lg bg-surface-2 p-2 font-medium outline-none transition-transform  duration-100 disabled:pointer-events-none disabled:opacity-50 [&[aria-pressed=true]]:bg-primary\",\n});\n\nexport interface ToggleProps\n  extends ToggleButtonProps,\n    VariantProps<typeof toggle> {\n  className?: string | undefined;\n}\n\nexport const Toggle = forwardRef<ElementRef<typeof ToggleButton>, ToggleProps>(\n  ({ className, children, ...props }, ref) => {\n    return (\n      <ToggleButton className={toggle({ className })} ref={ref} {...props}>\n        {children}\n      </ToggleButton>\n    );\n  }\n);\n\nToggle.displayName = \"Toggle\";\n"
  }
];

export const get: APIRoute = () => {
  return {
    body: JSON.stringify(components),
  };
};