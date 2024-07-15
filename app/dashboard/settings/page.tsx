import { getUser } from "@/services/userServices";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function PageSettings() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const data = await getUser(userId);

  return <div>page</div>;
}
