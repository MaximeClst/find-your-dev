import { getUser, updateUser } from "@/services/userServices";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function PageSettings() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const data = await getUser(userId);

  return (
    <section className="w-full p-3 ">
      <p className="text-muted-foreground text-lg text-center text-blue-500">
        Your informations
      </p>
      <h2 className="text-4xl uppercase text-center font-black mb-8">Profil</h2>

      <form
        action={updateUser}
        className="w-full flex flex-col space-y-3 rounded-md p-3 "
      >
        <input type="hidden" name="id" id="id" value={data?.id} />
        <Image
          src={data?.userImage as string}
          width={100}
          height={100}
          alt=""
          className="rounded-full"
        />
        <label htmlFor="userName" className="text-sm">
          Nom :
        </label>
        <input
          disabled
          id="userName"
          name="userName"
          className="bg-gray-200 text-gray-600  h-12 p-3 rounded-md border border-gray-300"
          type="text"
          defaultValue={data?.userName}
        />
        <label htmlFor="userEmail" className="text-sm">
          Email :
        </label>
        <input
          disabled
          id="userEmail"
          name="userEmail"
          className="bg-gray-200 text-gray-600 h-12 p-3 rounded-md border border-gray-300"
          type="email"
          defaultValue={data?.userEmail}
        />
        <label htmlFor="userJob" className="text-sm">
          Job :
        </label>
        <input
          id="userJob"
          name="userJob"
          className="h-12 p-3 rounded-md border border-gray-300 text-black"
          type="text"
          defaultValue={data?.userJob as string}
        />
        <label htmlFor="userDescription" className="text-sm">
          Description :
        </label>
        <textarea
          id="userDescription"
          name="userDescription"
          className="h-24 p-3 rounded-md border border-gray-300 text-black"
          defaultValue={data?.userDescription as string}
        />
        <label htmlFor="userWebsite" className="text-sm">
          Website :
        </label>
        <input
          id="userWebsite"
          name="userWebsite"
          className="h-12 p-3 rounded-md border border-gray-300 text-black"
          type="url"
          defaultValue={data?.userWebsite as string}
        />
        <label htmlFor="userLinkedin" className="text-sm">
          Linkedin :
        </label>
        <input
          id="userLinkedin"
          name="userLinkedin"
          className="h-12 p-3 rounded-md border border-gray-300 text-black"
          type="url"
          defaultValue={data?.userLinkedin as string}
        />
        <label htmlFor="userTwitter" className="text-sm">
          Twitter :
        </label>
        <input
          id="userTwitter"
          name="userTwitter"
          className="h-12 p-3 rounded-md border border-gray-300 text-black"
          type="url"
          defaultValue={data?.userTwitter as string}
        />
        <div className="flex justify-center py-3 gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 p-3 rounded-md">
            Add
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 p-3 rounded-md">
            Modify
          </button>
        </div>
      </form>
    </section>
  );
}
