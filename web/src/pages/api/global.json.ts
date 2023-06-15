import type { APIRoute } from "astro";
import { stylesPreset } from "src/templates/presets";

export const get: APIRoute = () => {
  return {
    body: JSON.stringify(stylesPreset),
  };
};
