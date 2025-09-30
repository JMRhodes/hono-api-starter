import { serve } from "@hono/node-server";

import app from "./app.js";
import env from "./env.js";

serve({
  fetch: app.fetch,
  port: Number(env.PORT),
});

export default app;
