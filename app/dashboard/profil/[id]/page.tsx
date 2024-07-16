import { getUser } from "@/services/userServices";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";
import { MdArticle, MdOutlineWork } from "react-icons/md";

interface Params {
  id: string;
  userName: string;
  userDescription: string;
  userImage: string;
  userWebsite: string;
  userTwitter: string;
  userLinkedin: string;
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
        <h2 className="text-4xl font-black uppercase mt-4">{user?.userName}</h2>
        <p className="text-lg text-muted-foreground">
          Member since{" "}
          {new Intl.DateTimeFormat("fr-FR").format(new Date(user.createdAt))}
        </p>
        <div className="text-muted-foreground flex items-center gap-1">
          <div className="my-2 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <MdOutlineWork />
          </div>
          <span className="font-bold">Job : </span>
        </div>
        <p className="">{user.userJob}</p>
        <div className="text-muted-foreground flex items-center gap-1">
          <div className="my-2 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <MdArticle />
          </div>
          <span className="font-bold">Description : </span>
        </div>
        <p className="">{user.userDescription}</p>
        <h4 className="uppercase font-bold text-blue-500">Social Media</h4>
        <ul className="flex items-center gap-2">
          <li>
            <Link href={user.userWebsite as string}>
              <button className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <FaGlobe />
              </button>
            </Link>
          </li>
          <li>
            <Link href={user.userTwitter as string}>
              <button className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <FaSquareXTwitter />
              </button>
            </Link>
          </li>
          <li>
            <Link href={user.userLinkedin as string}>
              <button className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <FaLinkedin />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
