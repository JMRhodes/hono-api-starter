import env from "./env.js";
import createApp from "./lib/create-app.js";

const app = createApp()
  .get("/env", (c) => {
    return c.json(env);
  })
  .get("/", (c) => {
    return c.text("Hello Hono!");
  });

export default app;
