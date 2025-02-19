import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

// Middleware to connect and disconnect the Prisma client for functions
export const withPrisma = async (fn) => {
  try {
    const result = await fn(prisma);
    return result;
  } finally {
    await prisma.$disconnect();
  }
};