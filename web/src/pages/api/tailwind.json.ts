import type { APIRoute } from "astro";
import { tailwindPreset } from "@/templates/presets";

export const get: APIRoute = () => {
  return {
    body: JSON.stringify(tailwindPreset),
  };
};
