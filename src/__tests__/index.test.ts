// index.test.ts
import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest"; // Or your preferred test runner

import appInstance from "../app.js";

describe("Env endpoint", () => {
  // Create the test client from the app instance with proper typing
  const client = testClient<typeof appInstance>(appInstance);

  it("should return env variables", async () => {
    // Call the endpoint using the typed client
    const res = await client.env.$get({});

    // Assertions
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      NODE_ENV: "test",
      LOG_LEVEL: "debug",
      PORT: "3000",
    });
  });
});
