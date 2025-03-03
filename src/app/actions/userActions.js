"use server";

import prisma from "../../../prisma/client";

export async function getUsers() {
  try {
    return await prisma.user.findMany();
  } catch (err) {
    console.log("Error fetching post", err);
    return false;
  } finally {
    prisma.$disconnect();
  }
}

export async function createUser(email, name, avatar) {
  return await prisma.user.create({
    data: { email, name, avatar },
  });
}

export async function getUserById(id) {
  try {
    return await prisma.user.findUnique({
      where: { id },
      include: { posts: { select: { createdAt: true } } },
    });
  } catch (err) {
    console.log("Error fetching post", err);
    return false;
  } finally {
    prisma.$disconnect();
  }
}
