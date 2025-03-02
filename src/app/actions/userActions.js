"use server";

import prisma from "../../../prisma/client";

export async function getUsers() {
  return await prisma.user.findMany();
}

export async function createUser(email, name, avatar) {
  return await prisma.user.create({
    data: { email, name, avatar },
  });
}

export async function getUserById(id) {
  return await prisma.user.findUnique({
    where: { id },
  });
}
