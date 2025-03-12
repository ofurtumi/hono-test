import { Hono } from "hono";
import { questionApi } from "./questions.routes.js";
import { imageApi } from "./images.routes.js";

export const api = new Hono();

const routes = [
  {
    href: "/",
    methods: ["GET"],
  },
];

api.get("/", (c) => c.json(routes));
api.route("/questions", questionApi);
api.route("/images", imageApi);
