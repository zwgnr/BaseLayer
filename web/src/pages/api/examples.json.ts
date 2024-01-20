import type { APIRoute } from "astro";
import { examples } from "../../templates/examples";

export const GET: APIRoute = async () =>
  new Response(
    JSON.stringify({
      body: examples,
    })
  );
