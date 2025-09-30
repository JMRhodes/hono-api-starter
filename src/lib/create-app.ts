import { Hono } from "hono";
import { pinoLogger } from "hono-pino";

type Env = {
  Variables: {
    logger: typeof pinoLogger;
  };
};

export function createFactory() {
  return new Hono<Env>();
}

export default function createApp() {
  return createFactory()
    .use(pinoLogger());
}
