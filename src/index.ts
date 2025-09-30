import { serve } from "@hono/node-server";
// eslint-disable-next-line unused-imports/no-unused-imports
import { Hono } from "hono";

import env from "./env.js";
import createApp from "./lib/create-app.js";

const app = createApp()
  .get("/env", (c) => {
    return c.json(env);
  })
  .get("/", (c) => {
    return c.text("Hello Hono!");
  });

serve({
  fetch: app.fetch,
  port: Number(env.PORT),
});

export default app;
