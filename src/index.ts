import { serve } from "@hono/node-server";
import { Hono } from "hono";

import { api } from "./routes/index.routes.js";
import { env } from "process";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/", api);

const port = env.port ? Number(env.port) : 3000;

serve(
  {
    fetch: app.fetch,
    port: port,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
