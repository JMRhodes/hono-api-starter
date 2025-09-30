import type { PinoLogger } from "hono-pino";

import { Hono } from "hono";

import { pinoLogger } from "../middlewares/logger.js";

type Env = {
  Variables: {
    logger: PinoLogger;
  };
};

export function createFactory() {
  return new Hono<Env>();
}

export default function createApp() {
  return createFactory()
    .use(pinoLogger());
}
