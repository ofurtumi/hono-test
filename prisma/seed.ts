import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  let riddles = await prisma.riddles.createMany({ data: [
    { question: "What has to be broken before you can use it?", answer: "An egg" },
      { question: "I'm tall when I'm young, and I'm short when I'm old. What am I?", answer: "A candle" },
      { question: "What month of the year has 28 days?", answer: "All of them" },
      { question: "What is full of holes but still holds water?", answer: "A sponge" },
      { question: "What question can you never answer yes to?", answer: "Are you asleep yet?" },
      { question: "What is always in front of you but can't be seen?", answer: "The future" },
  ] });

  console.log(riddles)
};


main()
.then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })