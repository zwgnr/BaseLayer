import type { APIRoute } from "astro";
import { components } from '../../templates/components'

export const get: APIRoute = () => {
  return {
    body: JSON.stringify(components),
  };
};
