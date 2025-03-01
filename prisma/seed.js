import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create multiple users
  await prisma.user.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      email: faker.internet.email(),
      name: faker.person.fullName(),
    })),
    skipDuplicates: true,
  });

  // Get all created users
  const allUsers = await prisma.user.findMany();

  // Create random posts for each user
  for (const user of allUsers) {
    await prisma.post.createMany({
      data: Array.from({ length: 3 }).map(() => ({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(2),
        authorId: user.id,
      })),
    });
  }

  console.log("Database seeded successfully! 🌱");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
