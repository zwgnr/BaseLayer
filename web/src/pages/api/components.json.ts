import type { APIRoute } from "astro";
import { components } from '../../json/components'

export const get: APIRoute = () => {
  return {
    body: JSON.stringify(components),
  };
};
