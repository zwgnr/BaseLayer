// Components
export { Button } from './button/button';
export { Input } from './input/input';
export { Badge } from './badge/badge';
export { ComboBox, ComboBoxItem } from './combobox/combobox';

// Registry
export {
  COMPONENTS,
  getComponent,
  getComponentsByCategory,
  getComponentsByStatus,
  searchComponents,
  manifest,
} from './registry';

export type {
  ComponentId,
  ComponentManifestEntry,
  ComponentMeta,
  ComponentManifest,
} from './schema';
