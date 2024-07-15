"use server";

import { prisma } from "@/db/db";

export const addUser = async (
  clerkUserId: string,
  userName: string,
  userEmail: string,
  userImage: string
) => {
  try {
    const user = await prisma.user.upsert({
      where: { clerkUserId },
      update: {
        userName,
        userEmail,
        userImage,
      },
      create: {
        clerkUserId,
        userName,
        userEmail,
        userImage,
      },
    });
    return user;
  } catch (error) {
    console.error("An error occurred when adding the user", error);
    throw error;
  }
};

export const getUser = async (clerkUserId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { clerkUserId },
    });
    return user;
  } catch (error) {
    console.error("An error occurred when trying to retrieve the user", error);
    throw error;
  }
};
