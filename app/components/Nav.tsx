import LogoFyd from "@/public/logo-fyd.png";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className="h-[80px] w-full border-b border-b-gray-300 flex justify-between items-center p-5">
      <Link href="/">
        <Image
          className="rounded-xl"
          src={LogoFyd}
          width={50}
          alt="Logo FindYourDev"
        ></Image>
      </Link>
      <Link href="/sign-in">
        <button className="w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full flex items-center justify-center">
          <FaUser />
        </button>
      </Link>
    </nav>
  );
}
