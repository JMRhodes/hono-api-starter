import { config } from "dotenv";
import { expand } from "dotenv-expand";
import * as z from "zod";

expand(config());

const EnvSchema = z.object({
  NODE_ENV: z.string().default("development"),
  LOG_LEVEL: z.string().optional().default("info"),
  PORT: z.string().min(1).optional().default("3000"),
});

export type env = z.infer<typeof EnvSchema>;

// eslint-disable-next-line import/no-mutable-exports
let env: env;

try {
  // eslint-disable-next-line node/no-process-env
  env = EnvSchema.parse(process.env);
}
catch (e) {
  const error = e as z.ZodError;
  console.error("❌ Invalid environment variables:", error.issues);
  process.exit(1);
}

export default env;
