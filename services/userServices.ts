"use server";

import { prisma } from "@/db/db";
import { redirect } from "next/navigation";

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

export const updateUser = async (formData: FormData) => {
  try {
    const userJob = formData.get("userJob") as string;
    const userDescription = formData.get("userDescription") as string;
    const userWebsite = formData.get("userWebsite") as string;
    const userLinkedin = formData.get("userLinkedin") as string;
    const userTwitter = formData.get("userTwitter") as string;
    const id = formData.get("id") as string;

    if (id !== null) {
      await prisma.user.update({
        where: { id },
        data: {
          userJob: userJob,
          userDescription: userDescription,
          userWebsite: userWebsite,
          userLinkedin: userLinkedin,
          userTwitter: userTwitter,
        },
      });
    }
  } catch (error) {
    console.error("An error occurred when modifying the user", error);
  } finally {
    redirect("/dashboard/home");
  }
};

export const getAllUsers = async () => {
  const allUsers = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allUsers;
};
