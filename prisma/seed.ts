import { PrismaClient } from '@prisma/client';
import { todos } from '../todos';

const prisma = new PrismaClient();

async function main() {
  for (let todo of todos) {
    await prisma.todo.create({
      data: todo,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
