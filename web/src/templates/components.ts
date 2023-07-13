export const components = [
  {
    "name": "Badge",
    "files": "import { Badge } from \"@/components/base/badge\";\n\nexport const BadgeExample = () => <Badge>Badge</Badge>;\n"
  },
  {
    "name": "Button",
    "files": "import { Button } from \"@/components/base/button\";\n\n<Button>Button</Button>;\n"
  },
  {
    "name": "ButtonIcon",
    "files": "import { Button } from \"@/components/button\";\nimport { Heart } from \"lucide-react\";\n\n<Button>\n  <Heart className=\"mr-2\" />\n  Icon Button\n</Button>;\n"
  },
  {
    "name": "ButtonLoader",
    "files": "import { Button } from \"@/components/button\";\nimport { Loader } from \"lucide-react\";\n\n<Button disabled>\n  <Loader className=\"mr-2 h-4 w-4 animate-spin\" />\n  Loading\n</Button>;\n"
  },
  {
    "name": "Dialog",
    "files": "import { Button } from \"@/components/base/button\";\nimport {\n  DialogContent,\n  DialogModal,\n  DialogTrigger,\n} from \"@/components/base/dialog\";\nimport { Check } from \"lucide-react\";\nimport { Heading } from \"react-aria-components\";\n\nexport const Dialog = () => {\n  return (\n    <DialogTrigger>\n      <Button>Checkout</Button>\n      <DialogModal>\n        <DialogContent>\n          {({ close }) => (\n            <>\n              <Check className=\"h-8 w-8 text-green-500\" />\n              <Heading className=\"text-lg font-bold\">\n                Payment Successfull\n              </Heading>\n              <p className=\"text-sm text-fg-3\">\n                Your order has been placed. Check your email for order details!\n              </p>\n              <Button intent=\"secondary\" onPress={close}>\n                Back to Dashboard\n              </Button>\n            </>\n          )}\n        </DialogContent>\n      </DialogModal>\n    </DialogTrigger>\n  );\n};\n"
  },
  {
    "name": "ListBox",
    "files": "import { ListBox, ListBoxItem } from \"@/components/base/listBox\";\n\nexport const ListBoxExample = () => {\n  return (\n    <ListBox aria-label=\"Ice cream flavors\" selectionMode=\"multiple\">\n      <ListBoxItem>Chocolate</ListBoxItem>\n      <ListBoxItem>Mint</ListBoxItem>\n      <ListBoxItem>Strawberry</ListBoxItem>\n      <ListBoxItem>Vanilla</ListBoxItem>\n    </ListBox>\n  );\n};\n"
  },
  {
    "name": "ListBoxReorderable",
    "files": "import { ListBox, ListBoxItem } from \"@/components/base/listBox\";\nimport { useDragAndDrop } from \"react-aria-components\";\nimport { useListData } from \"react-stately\";\n\nexport const ListBoxReorderable = () => {\n  let list = useListData({\n    initialItems: [\n      { id: 1, name: \"Adobe Photoshop\" },\n      { id: 2, name: \"Adobe XD\" },\n      { id: 3, name: \"Adobe Dreamweaver\" },\n      { id: 4, name: \"Adobe InDesign\" },\n      { id: 5, name: \"Adobe Connect\" },\n    ],\n  });\n\n  let { dragAndDropHooks } = useDragAndDrop({\n    getItems: (keys) =>\n      [...keys].map((key) => ({ \"text/plain\": list.getItem(key).name })),\n    onReorder(e) {\n      if (e.target.dropPosition === \"before\") {\n        list.moveBefore(e.target.key, e.keys);\n      } else if (e.target.dropPosition === \"after\") {\n        list.moveAfter(e.target.key, e.keys);\n      }\n    },\n  });\n\n  return (\n    <ListBox\n      aria-label=\"Reorderable list\"\n      selectionMode=\"multiple\"\n      items={list.items}\n      dragAndDropHooks={dragAndDropHooks}\n    >\n      {(item: any) => <ListBoxItem>{item.name}</ListBoxItem>}\n    </ListBox>\n  );\n};\n"
  },
  {
    "name": "Menu",
    "files": "import { Button } from \"@/components/base/button\";\n\nimport {\n  MenuConent,\n  MenuHeader,\n  MenuItem,\n  MenuSeperator,\n  MenuTrigger,\n  Section,\n} from \"@/components/base/menu\";\n\nimport {\n  CreditCard,\n  HelpCircle,\n  LogOut,\n  Plus,\n  Settings,\n  User,\n} from \"lucide-react\";\n\nexport const Menu = () => {\n  return (\n    <MenuTrigger>\n      <Button className=\"h-full rounded-full p-4 text-xl\" state=\"outline\">\n        Me\n      </Button>\n      <MenuConent>\n        <Section>\n          <MenuHeader className=\"text-fg-4\">me@hello.com</MenuHeader>\n        </Section>\n        <MenuSeperator className=\"mt-0\" />\n        <MenuItem>\n          Account Settings\n          <Settings />\n        </MenuItem>\n        <MenuItem>\n          Billing\n          <CreditCard />\n        </MenuItem>\n        <MenuSeperator />\n        <MenuItem>\n          Create a Team\n          <Plus />\n        </MenuItem>\n        <MenuItem>\n          Invite Member\n          <User />\n        </MenuItem>\n        <MenuSeperator />\n        <MenuItem>\n          Support\n          <HelpCircle />\n        </MenuItem>\n        <MenuSeperator />\n        <MenuItem>\n          Logout\n          <LogOut />\n        </MenuItem>\n      </MenuConent>\n    </MenuTrigger>\n  );\n};\n"
  },
  {
    "name": "MenuSimple",
    "files": "import { Button } from \"@/components/base/button\";\nimport { MenuConent, MenuItem, MenuTrigger } from \"@/components/base/menu\";\n\nexport const MenuSimple = () => {\n  return (\n    <MenuTrigger>\n      <Button intent=\"secondary\">Edit</Button>\n      <MenuConent>\n        <MenuItem>Cut</MenuItem>\n        <MenuItem>Copy</MenuItem>\n        <MenuItem>Paste</MenuItem>\n      </MenuConent>\n    </MenuTrigger>\n  );\n};\n"
  },
  {
    "name": "PinInput",
    "files": "import { pinInputPotion } from \"@/components/base/pinInputPotion\";\nimport {\n  PinInputControl,\n  PinInputField,\n  PinInputLabel,\n  PinInput as PinInputRoot,\n} from \"@ark-ui/react\";\n\nconst { root, field, control, label } = pinInputPotion();\n\nexport const PinInput = () => (\n  <PinInputRoot\n    className={root()}\n    placeholder=\"0\"\n    onComplete={(e) => alert(e.valueAsString)}\n  >\n    <PinInputLabel className={label()}>Enter Pin:</PinInputLabel>\n    <PinInputControl className={control()}>\n      {[0, 1, 2, 3].map((id, index) => (\n        <PinInputField className={field()} key={id} index={index} />\n      ))}\n    </PinInputControl>\n  </PinInputRoot>\n);\n"
  },
  {
    "name": "Tabs",
    "files": "import { Tab, TabList, TabPanel, TabsRoot } from \"@/components/base/tabs\";\n\nconst items = [\n  { value: \"react\", name: \"React\" },\n  { value: \"solid\", name: \"Solid\" },\n  { value: \"vue\", name: \"Vue\" },\n];\n\nexport const Tabs = () => (\n  <TabsRoot>\n    <TabList aria-label=\"Dashbord Panels\">\n      <Tab id=\"FoR\">Overview</Tab>\n      <Tab id=\"MaR\">Activity</Tab>\n      <Tab id=\"Emp\">Usage</Tab>\n    </TabList>\n    <TabPanel id=\"FoR\">\n      Arma virumque cano, Troiae qui primus ab\n      oris.fffffffffffffffffffffffffffffffffffff\n    </TabPanel>\n    <TabPanel id=\"MaR\">Senatus Populusque Romanus.</TabPanel>\n    <TabPanel id=\"Emp\">Alea jacta est.</TabPanel>\n  </TabsRoot>\n);\n"
  },
  {
    "name": "tooltip",
    "files": "import { tooltipPotion } from \"@/components/base/tooltipPotion\";\nimport {\n  TooltipArrow,\n  TooltipArrowTip,\n  TooltipContent,\n  TooltipPositioner,\n  Tooltip as TooltipRoot,\n  TooltipTrigger,\n  type TooltipProps as ArkToolTipProps,\n} from \"@ark-ui/react\";\n\nexport type TooltipProps = Partial<ArkToolTipProps> & {\n  placement?: NonNullable<ArkToolTipProps[\"positioning\"]>[\"placement\"];\n};\nconst { positioner, content } = tooltipPotion();\n\nexport const Tooltip = (props: TooltipProps) => {\n  const { placement = \"top\", ...tooltipProps } = props;\n  return (\n    <TooltipRoot\n      openDelay={0}\n      closeDelay={200}\n      positioning={{ placement }}\n      {...tooltipProps}\n    >\n      <TooltipTrigger asChild>\n        <span>Hover me</span>\n      </TooltipTrigger>\n      <TooltipPositioner className={positioner()}>\n        <TooltipArrow>\n          <TooltipArrowTip />\n        </TooltipArrow>\n        <TooltipContent className={content()}>My Tooltip</TooltipContent>\n      </TooltipPositioner>\n    </TooltipRoot>\n  );\n};\n"
  },
  {
    "name": "Slider",
    "files": "import { SliderLabel, SliderRoot, SliderThumb } from \"@/components/base/slider\";\n\nexport const Slider = () => {\n  return (\n    <SliderRoot defaultValue={30}>\n      <SliderLabel>Opacity</SliderLabel>\n      <SliderThumb />\n    </SliderRoot>\n  );\n};\n"
  },
  {
    "name": "Switch",
    "files": "import { Switch } from \"@/components/base/switch\";\n\nexport const SwitchExample = () => {\n  return <Switch>On/Off</Switch>;\n};\n"
  },
  {
    "name": "Table",
    "files": "import {\n  Column,\n  Table,\n  TableBody,\n  TableCell,\n  TableHeader,\n  TableRow,\n} from \"@/components/base/table\";\n\nexport const TableExample = () => {\n  return (\n    <Table aria-label=\"Files\" selectionMode=\"multiple\">\n      <TableHeader>\n        <Column isRowHeader>Name</Column>\n        <Column>Type</Column>\n        <Column>Date Modified</Column>\n      </TableHeader>\n      <TableBody>\n        <TableRow>\n          <TableCell>Games</TableCell>\n          <TableCell>File folder</TableCell>\n          <TableCell>6/7/2020</TableCell>\n        </TableRow>\n        <TableRow>\n          <TableCell>Program Files</TableCell>\n          <TableCell>File folder</TableCell>\n          <TableCell>4/7/2021</TableCell>\n        </TableRow>\n        <TableRow>\n          <TableCell>bootmgr</TableCell>\n          <TableCell>System file</TableCell>\n          <TableCell>11/20/2010</TableCell>\n        </TableRow>\n      </TableBody>\n    </Table>\n  );\n};\n"
  },
  {
    "name": "TableReorderable",
    "files": "import {\n  Column,\n  Table,\n  TableBody,\n  TableCell,\n  TableHeader,\n  TableRow,\n} from \"@/components/base/table\";\nimport { useDragAndDrop } from \"react-aria-components\";\nimport { useListData } from \"react-stately\";\n\nexport function TableReorderable() {\n  let list = useListData({\n    initialItems: [\n      { id: 1, name: \"Games\", date: \"6/7/2020\", type: \"File folder\" },\n      { id: 2, name: \"Program Files\", date: \"4/7/2021\", type: \"File folder\" },\n      { id: 3, name: \"bootmgr\", date: \"11/20/2010\", type: \"System file\" },\n      { id: 4, name: \"log.txt\", date: \"1/18/2016\", type: \"Text Document\" },\n    ],\n  });\n\n  let { dragAndDropHooks } = useDragAndDrop({\n    getItems: (keys) =>\n      [...keys].map((key) => ({\n        \"text/plain\": list.getItem(key).name,\n      })),\n    onReorder(e) {\n      if (e.target.dropPosition === \"before\") {\n        list.moveBefore(e.target.key, e.keys);\n      } else if (e.target.dropPosition === \"after\") {\n        list.moveAfter(e.target.key, e.keys);\n      }\n    },\n  });\n\n  return (\n    <Table\n      aria-label=\"Files\"\n      selectionMode=\"multiple\"\n      dragAndDropHooks={dragAndDropHooks}\n    >\n      <TableHeader>\n        <Column isRowHeader>Name</Column>\n        <Column>Type</Column>\n        <Column>Date Modified</Column>\n      </TableHeader>\n      <TableBody items={list.items}>\n        {(item) => (\n          <TableRow>\n            <TableCell>{item.name}</TableCell>\n            <TableCell>{item.type}</TableCell>\n            <TableCell>{item.date}</TableCell>\n          </TableRow>\n        )}\n      </TableBody>\n    </Table>\n  );\n}\n"
  },
  {
    "name": "TableSortable",
    "files": "import {\n  Column,\n  Table,\n  TableBody,\n  TableCell,\n  TableHeader,\n  TableRow,\n} from \"@/components/base/table\";\nimport { useAsyncList } from \"@react-stately/data\";\n\ninterface Character {\n  name: string;\n  height: number;\n  mass: number;\n  birth_year: number;\n}\n\nexport function TableSortable() {\n  let list = useAsyncList<Character>({\n    async load({ signal }) {\n      let res = await fetch(`https://swapi.py4e.com/api/people/?search`, {\n        signal,\n      });\n      let json = await res.json();\n      return {\n        items: json.results,\n      };\n    },\n    async sort({ items, sortDescriptor }) {\n      return {\n        items: items.sort((a, b) => {\n          let first = a[sortDescriptor.column];\n          let second = b[sortDescriptor.column];\n          let cmp =\n            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;\n          if (sortDescriptor.direction === \"descending\") {\n            cmp *= -1;\n          }\n          return cmp;\n        }),\n      };\n    },\n  });\n\n  return (\n    <Table\n      aria-label=\"Example table with client side sorting\"\n      sortDescriptor={list.sortDescriptor}\n      onSortChange={list.sort}\n    >\n      <TableHeader>\n        <Column id=\"name\" isRowHeader allowsSorting>\n          Name\n        </Column>\n        <Column id=\"height\" allowsSorting>\n          Height\n        </Column>\n        <Column id=\"mass\" allowsSorting>\n          Mass\n        </Column>\n        <Column id=\"birth_year\" allowsSorting>\n          Birth Year\n        </Column>\n      </TableHeader>\n      <TableBody items={list.items}>\n        {(item) => (\n          <TableRow id={item.name}>\n            <TableCell>{item.name}</TableCell>\n            <TableCell>{item.height}</TableCell>\n            <TableCell>{item.mass}</TableCell>\n            <TableCell>{item.birth_year}</TableCell>\n          </TableRow>\n        )}\n      </TableBody>\n    </Table>\n  );\n}\n"
  },
  {
    "name": "TagGroup",
    "files": "import { Tag, TagGroupRoot } from \"@/components/base/tagGroup\";\n\nexport const TagGroupExample = () => {\n  return (\n    <TagGroupRoot label=\"Ice cream flavor\" selectionMode=\"single\">\n      <Tag>Chocolate</Tag>\n      <Tag>Mint</Tag>\n      <Tag>Strawberry</Tag>\n      <Tag>Vanilla</Tag>\n    </TagGroupRoot>\n  );\n};\n"
  },
  {
    "name": "Toggle",
    "files": "import { Toggle } from \"@/components/base/toggle\";\n\nexport const ToggleExample = () => {\n  return <Toggle>Mode</Toggle>;\n};\n"
  }
];