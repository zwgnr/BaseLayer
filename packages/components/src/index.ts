// Components
export { Button } from './button/button';
export { Input } from './input/input';

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
