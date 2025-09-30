import { Hono } from "hono";

import * as handlers from "./tasks.handler.js";

const tasks = new Hono()
  .get("/", handlers.index);

export default tasks;
