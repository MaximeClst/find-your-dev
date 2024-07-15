import { getUser } from "@/services/userServices";
import Link from "next/link";
import Image from "next/image";
import { MdArticle, MdOutlineWork } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";

interface Params {
  id: string;
  userName: string;
  userDescription: string;
  userImage: string;
  userWebsite: string;
  userInstagram: string;
  userYoutube: string;
}

interface UpdatePageProps {
  params: Params;
}

export default async function PageProfil({ params }: UpdatePageProps) {
  const user = await getUser(params.id);

  if (!user) {
    return <p>User Not Found</p>;
  }
  return (
    <section className="h-screen max-w-[1000px] mx-auto w-full pt-10 relative">
      <Link href="/dashboard/home">
        <button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-1 rounded-md p-2">
          <IoChevronBack />
          <span>Back</span>
        </button>
      </Link>
      <div className="flex flex-col gap-2 border border-gray-300 rounded-md p-5 mt-5 relative">
        <Image
          src={user?.userImage as string}
          width={100}
          height={100}
          alt={`Profil picture ${user?.userName}`}
          className="rounded-full"
        />
      </div>
    </section>
  );
}
