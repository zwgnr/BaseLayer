import type { APIRoute } from "astro";
import { examples } from '../../templates/examples'

export const get: APIRoute = () => {
  return {
    body: JSON.stringify(examples),
  };
};
