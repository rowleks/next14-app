import prisma from "../../../prisma/client";

export async function getPosts() {
  return await prisma.post.findMany({
    include: { author: true },
  });
}

export async function createPost({ title, content, image, authorId }) {
  return await prisma.post.create({
    data: { title, content, image, authorId },
  });
}

export async function getPostById(id) {
  return await prisma.post.findUnique({
    where: { id },
  });
}
