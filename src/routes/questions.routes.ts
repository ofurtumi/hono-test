import { PrismaClient, Prisma } from "@prisma/client";
import { Hono } from "hono";

export const questionApi = new Hono();

const prisma = new PrismaClient();

questionApi.get("/", async (c) => {
  const questions = await prisma.riddles.findMany();
  return c.json(questions);
});

questionApi.get("/random", async (c) => {
  const count = await prisma.riddles.count();
  const selectedIndex = Math.floor(Math.random() * count);
  const riddle = await prisma.riddles.findFirst({
    where: { id: selectedIndex },
  });

  return c.json(riddle);
});

questionApi.get("/:id", async (c) => {
  const id = Number(c.req.param("id"));
  if (!id) return c.json({ error: "id is required" });
  const riddle = await prisma.riddles.findFirst({ where: { id } });
  return c.json(riddle);
});

// questionApi.post("/questions/create", async (c) => {
//   const { question, answer } = c.req.query();
//
//   const res = await prisma.riddles.create({
//     data: { question: question, answer: answer },
//   });
//
//   return c.json(res);
// });

questionApi.post("/create", async (c) => {
  const { question, answer }: Prisma.riddlesCreateInput = await c.req.json();

  const result = await prisma.riddles.create({ data: { question, answer } });
  return c.json(result);
});

