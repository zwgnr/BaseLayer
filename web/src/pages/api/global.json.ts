import { stylesPreset } from "@/templates/presets";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () =>
  new Response(
    JSON.stringify({
      body: stylesPreset,
    })
  );
