import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";

import env from "./env.js";

const app = new Hono();

app.use(logger());

app.get("/env", (c) => {
  return c.json(env(c));
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve({
  fetch: app.fetch,
  port: 3000,
});
