import { serve } from "@hono/node-server";
import { Hono } from "hono";

import { api } from "./routes/index.routes.js";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/", api);

serve(
  {
    fetch: app.fetch,
    port: 10000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
