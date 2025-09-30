import type { Context } from "hono";

import { env as processEnv } from "hono/adapter";
import * as z from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.string(),
  LOG_LEVEL: z.string().optional(),
  PORT: z.number().optional(),
});

function env(c: Context) {
  return EnvSchema.parse({
    NODE_ENV: processEnv<{ NODE_ENV: string }>(c).NODE_ENV || "development",
    LOG_LEVEL: processEnv<{ LOG_LEVEL: string }>(c).LOG_LEVEL || "debug",
    PORT: processEnv<{ PORT: number }>(c).PORT || 3000,
  });
}

export default env;
