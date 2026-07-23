"use server";

import { auth } from "@clerk/nextjs";
import { profileSchema } from "./schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";

export const createProfileAction = async (
  prevState: any,
  formData: FormData,
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please login to create a profile");
    console.log(user);

    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);

    await prisma.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        firstName: validatedFields.firstName,
        lastName: validatedFields.lastName,
        username: validatedFields.username,
      },
    });

    const client = await clerkClient();

    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
  redirect("/");
};
