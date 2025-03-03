"use server";

import { PrismaClient } from "@prisma/client";

// import prisma from "../../../prisma/client";

const prisma = new PrismaClient();

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: { name: true, avatar: true },
        },
      },
    });

    return { success: true, data: posts };
  } catch (err) {
    console.log("Error fetching post", err);
    return false;
  } finally {
    prisma.$disconnect();
  }
}

export async function createPost({ title, content, image, authorId }) {
  return await prisma.post.create({
    data: { title, content, image, authorId },
  });
}

export async function getPostById(id) {
  try {
    return await prisma.post.findUnique({
      where: { id },
    });
  } catch (err) {
    console.log("Error fetching post", err);
    return false;
  } finally {
    prisma.$disconnect();
  }
}
