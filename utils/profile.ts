import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";

export async function fetchProfileImage() {
  const user = await currentUser();

  if (!user) return null;

  const profile = await prisma.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });

  return profile?.profileImage ?? null;
}
