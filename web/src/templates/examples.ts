export const examples = [
  {
    name: "Badge",
    files:
      'import { Badge } from "@/components/base/badge";\n\nexport const BadgeExample = () => <Badge>Badge</Badge>;\n',
  },
  {
    name: "Breadcrumbs",
    files:
      'import {\n  BreadCrumbsItem,\n  BreadCrumbsLink,\n  Breadcrumbs,\n} from "@/components/base/breadcrumbs";\n\nimport { ChevronRight } from "lucide-react";\n\nexport const BreadcrumbsExample = () => {\n  return (\n    <Breadcrumbs>\n      <BreadCrumbsItem>\n        <BreadCrumbsLink>\n          <a href="/">Home</a>\n        </BreadCrumbsLink>\n        <ChevronRight className="h-4 w-4" />\n      </BreadCrumbsItem>\n      <BreadCrumbsItem>\n        <BreadCrumbsLink>\n          <a href="/docs">Docs</a>\n        </BreadCrumbsLink>\n        <ChevronRight className="h-4 w-4" />\n      </BreadCrumbsItem>\n      <BreadCrumbsItem>\n        <BreadCrumbsLink>Breadcrumbs</BreadCrumbsLink>\n      </BreadCrumbsItem>\n    </Breadcrumbs>\n  );\n};\n',
  },
  {
    name: "Button",
    files:
      'import { Button } from "@/components/base/button";\n\nexport const ButtonExample = () => <Button>Button</Button>;\n',
  },
  {
    name: "ButtonIcon",
    files:
      'import { Button } from "@/components/base/button";\nimport { Heart } from "lucide-react";\n\nexport const ButtonIcon = () => (\n  <Button>\n    <Heart className="mr-2" />\n    Icon Button\n  </Button>\n);\n',
  },
  {
    name: "ButtonLoader",
    files:
      'import { Button } from "@/components/base/button";\nimport { Loader } from "lucide-react";\n\nexport const ButtonLoader = () => (\n  <Button isDisabled>\n    <Loader className="mr-2 h-4 w-4 animate-spin" />\n    Loading\n  </Button>\n);\n',
  },
  {
    name: "Calendar",
    files:
      'import { Calendar } from "@/components/base/calendar";\n\nexport const CalendarExample = () => <Calendar />;\n',
  },
  {
    name: "Checkbox",
    files:
      'import { Checkbox } from "@/components/base/checkbox";\n\nexport const CheckboxExample = () => <Checkbox>On/Offf</Checkbox>;\n',
  },
  {
    name: "CheckboxGroup",
    files:
      'import { Checkbox } from "@/components/base/checkbox";\nimport { CheckboxGroup } from "@/components/base/checkboxGroup";\n\nexport const CheckboxGroupExample = () => {\n  return (\n    <CheckboxGroup label="Notifications">\n      <Checkbox value="push"> Push </Checkbox>\n      <Checkbox value="email"> Email </Checkbox>\n      <Checkbox value="text"> Text </Checkbox>\n    </CheckboxGroup>\n  );\n};\n',
  },
  {
    name: "ComboBox",
    files:
      'import { ComboBox, ComboBoxItem } from "@/components/base/combobox";\n\nexport const ComboBoxExample = () => {\n  return (\n    <ComboBox label="Project">\n      <ComboBoxItem>Health Dashboard</ComboBoxItem>\n      <ComboBoxItem>To-Do App</ComboBoxItem>\n      <ComboBoxItem>UI Kit</ComboBoxItem>\n      <ComboBoxItem>Portfolio Site</ComboBoxItem>\n    </ComboBox>\n  );\n};\n',
  },
  {
    name: "DateField",
    files:
      'import { DateField } from "@/components/base/dateField";\n\nexport const DateFieldExample = () => {\n  return <DateField label="Deploy Date" />;\n};\n',
  },
  {
    name: "DatePicker",
    files:
      'import { DatePicker } from "@/components/base/datePicker";\n\nexport const DatePickerExample = () => <DatePicker label="Check In" />;\n',
  },
  {
    name: "DateRangePicker",
    files:
      'import { DateRangePicker } from "@/components/base/dateRangePicker";\n\nexport const DateRangePickerExample = () => <DateRangePicker />;\n',
  },
  {
    name: "Dialog",
    files:
      'import { Button } from "@/components/base/button";\nimport {\n  DialogContent,\n  DialogModal,\n  DialogTrigger,\n} from "@/components/base/dialog";\nimport { Check } from "lucide-react";\nimport { Heading } from "react-aria-components";\n\nexport const Dialog = () => {\n  return (\n    <DialogTrigger>\n      <Button>Checkout</Button>\n      <DialogModal>\n        <DialogContent>\n          {({ close }) => (\n            <>\n              <Check className="h-8 w-8 text-green-500" />\n              <Heading className="text-lg font-bold">\n                Payment Successfull\n              </Heading>\n              <p className="text-sm text-fg-3">\n                Your order has been placed. Check your email for order details!\n              </p>\n              <Button intent="secondary" onPress={close}>\n                Back to Dashboard\n              </Button>\n            </>\n          )}\n        </DialogContent>\n      </DialogModal>\n    </DialogTrigger>\n  );\n};\n',
  },
  {
    name: "ListBox",
    files:
      'import { ListBox, ListBoxItem } from "@/components/base/listBox";\n\nexport const ListBoxExample = () => {\n  return (\n    <ListBox aria-label="Member" selectionMode="multiple">\n      <ListBoxItem>Matt</ListBoxItem>\n      <ListBoxItem>Sarah</ListBoxItem>\n      <ListBoxItem>James</ListBoxItem>\n      <ListBoxItem>Kim</ListBoxItem>\n    </ListBox>\n  );\n};\n',
  },
  {
    name: "ListBoxReorderable",
    files:
      'import { ListBox, ListBoxItem } from "@/components/base/listBox";\nimport { useDragAndDrop } from "react-aria-components";\nimport { useListData } from "react-stately";\n\nexport const ListBoxReorderable = () => {\n  let list = useListData({\n    initialItems: [\n      { id: 1, name: "Adobe Photoshop" },\n      { id: 2, name: "Adobe XD" },\n      { id: 3, name: "Adobe Dreamweaver" },\n      { id: 4, name: "Adobe InDesign" },\n      { id: 5, name: "Adobe Connect" },\n    ],\n  });\n\n  let { dragAndDropHooks } = useDragAndDrop({\n    getItems: (keys) =>\n      [...keys].map((key) => ({ "text/plain": list.getItem(key).name })),\n    onReorder(e) {\n      if (e.target.dropPosition === "before") {\n        list.moveBefore(e.target.key, e.keys);\n      } else if (e.target.dropPosition === "after") {\n        list.moveAfter(e.target.key, e.keys);\n      }\n    },\n  });\n\n  return (\n    <ListBox\n      aria-label="Reorderable list"\n      selectionMode="multiple"\n      items={list.items}\n      dragAndDropHooks={dragAndDropHooks}\n    >\n      {(item: any) => <ListBoxItem>{item.name}</ListBoxItem>}\n    </ListBox>\n  );\n};\n',
  },
  {
    name: "Menu",
    files:
      'import { Button } from "@/components/base/button";\n\nimport {\n  MenuConent,\n  MenuHeader,\n  MenuItem,\n  MenuSeperator,\n  MenuTrigger,\n  Section,\n} from "@/components/base/menu";\n\nimport {\n  CreditCard,\n  HelpCircle,\n  LogOut,\n  Plus,\n  Settings,\n  User,\n} from "lucide-react";\n\nexport const Menu = () => {\n  return (\n    <MenuTrigger>\n      <Button\n        intent="secondary"\n        className="h-full rounded-full p-4 text-xl"\n        state="outline"\n      >\n        Me\n      </Button>\n      <MenuConent>\n        <Section>\n          <MenuHeader className="text-fg-4">me@hello.com</MenuHeader>\n        </Section>\n        <MenuSeperator className="mt-0" />\n        <MenuItem>\n          Account Settings\n          <Settings />\n        </MenuItem>\n        <MenuItem>\n          Billing\n          <CreditCard />\n        </MenuItem>\n        <MenuItem>\n          Create a Team\n          <Plus />\n        </MenuItem>\n        <MenuItem>\n          Invite Member\n          <User />\n        </MenuItem>\n        <MenuSeperator />\n        <MenuItem>\n          Support\n          <HelpCircle />\n        </MenuItem>\n        <MenuItem>\n          Logout\n          <LogOut />\n        </MenuItem>\n      </MenuConent>\n    </MenuTrigger>\n  );\n};\n',
  },
  {
    name: "MenuSimple",
    files:
      'import { Button } from "@/components/base/button";\nimport { MenuConent, MenuItem, MenuTrigger } from "@/components/base/menu";\n\nexport const MenuSimple = () => {\n  return (\n    <MenuTrigger>\n      <Button intent="secondary">Edit</Button>\n      <MenuConent>\n        <MenuItem>Cut</MenuItem>\n        <MenuItem>Copy</MenuItem>\n        <MenuItem>Paste</MenuItem>\n      </MenuConent>\n    </MenuTrigger>\n  );\n};\n',
  },
  {
    name: "Meter",
    files:
      'import { Meter } from "@/components/base/meter";\n\nexport const MeterExample = () => <Meter label="Storage Space" value={80} />;\n',
  },
  {
    name: "Modal",
    files:
      'import { Button } from "@/components/base/button";\nimport { Modal, ModalContent, ModalTrigger } from "@/components/base/modal";\nimport { AlertTriangle } from "lucide-react";\nimport { Heading } from "react-aria-components";\n\nexport const ModalExample = () => {\n  return (\n    <ModalTrigger>\n      <Button className="bg-critical hover:bg-critical/70">\n        Delete Project\n      </Button>\n      <Modal>\n        <ModalContent>\n          {({ close }) => (\n            <>\n              <AlertTriangle className="h-8 w-8 text-critical" />\n              <Heading className="text-lg font-bold">Warning</Heading>\n              <p className="text-sm text-fg-3">\n                Your data will be permenantly deleted, proceed?\n              </p>\n              <div className="flex justify-center gap-4">\n                <Button state="outline" intent="secondary" onPress={close}>\n                  Cancel\n                </Button>\n                <Button\n                  className="bg-critical hover:bg-critical/70"\n                  onPress={close}\n                >\n                  Delete\n                </Button>\n              </div>\n            </>\n          )}\n        </ModalContent>\n      </Modal>\n    </ModalTrigger>\n  );\n};\n',
  },
  {
    name: "Popover",
    files:
      'import { Button } from "@/components/base/button";\nimport { Popover, PopoverTrigger } from "@/components/base/popover";\nimport { MoreHorizontal } from "lucide-react";\n\nexport const PopoverExample = () => {\n  return (\n    <PopoverTrigger>\n      <Button intent="secondary">\n        <MoreHorizontal />\n      </Button>\n      <Popover>\n        <button className="rounded-md p-2 hover:bg-surface-2">Download</button>\n      </Popover>\n    </PopoverTrigger>\n  );\n};\n',
  },
  {
    name: "RadioGroup",
    files:
      'import { Radio, RadioGroup } from "@/components/base/radioGroup";\n\nexport const RadioGroupExample = () => (\n  <RadioGroup label="Notifications">\n    <Radio value="bug">Push</Radio>\n    <Radio value="copy">Text</Radio>\n    <Radio value="deploy">Email</Radio>\n  </RadioGroup>\n);\n',
  },
  {
    name: "RangeCalendar",
    files:
      'import { RangeCalendar } from "@/components/base/rangeCalendar";\n\nexport const RangeCalendarExample = () => <RangeCalendar />;\n',
  },
  {
    name: "SearchField",
    files:
      'import { SearchField } from "@/components/base/searchField";\n\nexport const SearchFieldExample = () => <SearchField />;\n',
  },
  {
    name: "Select",
    files:
      'import { Select, SelectItem } from "@/components/base/select";\n\nexport const SelectExample = () => {\n  return (\n    <Select label="New Project">\n      <SelectItem>React</SelectItem>\n      <SelectItem>Vue</SelectItem>\n      <SelectItem>Svelte</SelectItem>\n      <SelectItem>Solid</SelectItem>\n    </Select>\n  );\n};\n',
  },
  {
    name: "Slider",
    files:
      'import { SliderLabel, SliderRoot, SliderThumb } from "@/components/base/slider";\n\nexport const Slider = () => {\n  return (\n    <SliderRoot defaultValue={30}>\n      <SliderLabel>Opacity</SliderLabel>\n      <SliderThumb />\n    </SliderRoot>\n  );\n};\n',
  },
  {
    name: "Switch",
    files:
      'import { Switch } from "@/components/base/switch";\n\nexport const SwitchExample = () => {\n  return <Switch>On/Off</Switch>;\n};\n',
  },
  {
    name: "Table",
    files:
      'import {\n  Column,\n  Table,\n  TableBody,\n  TableCell,\n  TableHeader,\n  TableRow,\n} from "@/components/base/table";\n\nexport const TableExample = () => {\n  return (\n    <Table aria-label="Tokens" selectionMode="multiple">\n      <TableHeader>\n        <Column isRowHeader>Name</Column>\n        <Column>Token</Column>\n        <Column>Env</Column>\n        <Column></Column>\n      </TableHeader>\n      <TableBody>\n        <TableRow>\n          <TableCell>Dev</TableCell>\n          <TableCell>****1822</TableCell>\n          <TableCell>preview</TableCell>\n        </TableRow>\n\n        <TableRow>\n          <TableCell>Production</TableCell>\n          <TableCell>****3345</TableCell>\n          <TableCell>prod</TableCell>\n        </TableRow>\n        <TableRow>\n          <TableCell>beta</TableCell>\n          <TableCell>****6431</TableCell>\n          <TableCell>preview</TableCell>\n        </TableRow>\n      </TableBody>\n    </Table>\n  );\n};\n',
  },
  {
    name: "TableReorderable",
    files:
      'import {\n  Column,\n  Table,\n  TableBody,\n  TableCell,\n  TableHeader,\n  TableRow,\n} from "@/components/base/table";\nimport { useDragAndDrop } from "react-aria-components";\nimport { useListData } from "react-stately";\n\nexport function TableReorderable() {\n  let list = useListData({\n    initialItems: [\n      { id: 1, name: "Dev", token: "****1822", env: "prod" },\n      { id: 2, name: "Production", token: "****3345", env: "preview" },\n      { id: 3, name: "beta", token: "****6431", env: "preview" },\n    ],\n  });\n\n  let { dragAndDropHooks } = useDragAndDrop({\n    getItems: (keys) =>\n      [...keys].map((key) => ({\n        "text/plain": list.getItem(key).name,\n      })),\n    onReorder(e) {\n      if (e.target.dropPosition === "before") {\n        list.moveBefore(e.target.key, e.keys);\n      } else if (e.target.dropPosition === "after") {\n        list.moveAfter(e.target.key, e.keys);\n      }\n    },\n  });\n\n  return (\n    <Table\n      aria-label="Tokens"\n      selectionMode="multiple"\n      dragAndDropHooks={dragAndDropHooks}\n    >\n      <TableHeader>\n        <Column isRowHeader>Name</Column>\n        <Column>Token</Column>\n        <Column>Env</Column>\n      </TableHeader>\n      <TableBody items={list.items}>\n        {(item) => (\n          <TableRow>\n            <TableCell>{item.name}</TableCell>\n            <TableCell>{item.token}</TableCell>\n            <TableCell>{item.env}</TableCell>\n          </TableRow>\n        )}\n      </TableBody>\n    </Table>\n  );\n}\n',
  },
  {
    name: "TableSortable",
    files:
      'import {\n  Column,\n  Table,\n  TableBody,\n  TableCell,\n  TableHeader,\n  TableRow,\n} from "@/components/base/table";\nimport { useAsyncList } from "@react-stately/data";\n\ninterface Invoice {\n  [key: string]: any;\n  title: string;\n  price: number;\n  brand: string;\n}\n\nexport function TableSortable() {\n  let list = useAsyncList<Invoice>({\n    async load({ signal }) {\n      let res = await fetch(`https://dummyjson.com/products?limit=10`, {\n        signal,\n      });\n      let json = await res.json();\n      return {\n        items: json.products,\n      };\n    },\n    async sort({ items, sortDescriptor }) {\n      return {\n        items: items.sort((a, b) => {\n          if (!sortDescriptor.column) {\n            return 0;\n          }\n          let first = a[sortDescriptor.column];\n          let second = b[sortDescriptor.column];\n          let cmp =\n            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;\n          if (sortDescriptor.direction === "descending") {\n            cmp *= -1;\n          }\n          return cmp;\n        }),\n      };\n    },\n  });\n\n  return (\n    <Table\n      aria-label="Example table with client side sorting"\n      sortDescriptor={list.sortDescriptor}\n      onSortChange={list.sort}\n    >\n      <TableHeader>\n        <Column id="item" isRowHeader allowsSorting>\n          Name\n        </Column>\n        <Column id="price" allowsSorting>\n          Price\n        </Column>\n        <Column id="brand" allowsSorting>\n          Brand\n        </Column>\n      </TableHeader>\n      <TableBody items={list.items}>\n        {(item) => (\n          <TableRow id={item.title}>\n            <TableCell>{item.title}</TableCell>\n            <TableCell>{item.price}</TableCell>\n            <TableCell>{item.brand}</TableCell>\n          </TableRow>\n        )}\n      </TableBody>\n    </Table>\n  );\n}\n',
  },
  {
    name: "Tabs",
    files:
      'import { Tab, TabList, TabPanel, TabsRoot } from "@/components/base/tabs";\n\nexport const Tabs = () => (\n  <TabsRoot>\n    <TabList aria-label="Dashbord Panels">\n      <Tab id="overview">Overview</Tab>\n      <Tab id="usage">Usage</Tab>\n      <Tab id="settings">Settings</Tab>\n    </TabList>\n    <TabPanel id="overview">Overview Content</TabPanel>\n    <TabPanel id="usage">Usage Content</TabPanel>\n    <TabPanel id="settings">Settings Content</TabPanel>\n  </TabsRoot>\n);\n',
  },
  {
    name: "TagGroup",
    files:
      'import { Tag, TagGroupRoot } from "@/components/base/tagGroup";\n\nexport const TagGroupExample = () => {\n  return (\n    <TagGroupRoot label="Priority" selectionMode="single">\n      <Tag>High</Tag>\n      <Tag>Med</Tag>\n      <Tag>Low</Tag>\n    </TagGroupRoot>\n  );\n};\n',
  },
  {
    name: "TextField",
    files:
      'import { TextField } from "@/components/base/textField";\n\nexport const TextFieldExample = () => <TextField label="Name" />;\n',
  },
  {
    name: "TimeField",
    files:
      'import { TimeField } from "@/components/base/timeField";\n\nexport const TimeFieldExample = () => <TimeField label="Meeting Time" />;\n',
  },
  {
    name: "Toggle",
    files:
      'import { Toggle } from "@/components/base/toggle";\n\nexport const ToggleExample = () => <Toggle>Mode</Toggle>;\n',
  },
  {
    name: "Tooltip",
    files:
      'import { Button } from "@/components/base/button";\nimport { Tooltip, TooltipTrigger } from "@/components/base/tooltip";\nimport { Save } from "lucide-react";\n\nexport const TooltipExample = () => {\n  return (\n    <TooltipTrigger>\n      <Button intent="secondary">\n        <Save />\n      </Button>\n      <Tooltip>Save</Tooltip>\n    </TooltipTrigger>\n  );\n};\n',
  },
];
