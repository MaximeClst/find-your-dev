import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export default function DashboardNav() {
  const menuDashboard = [
    { name: "Home", icon: FaHome, path: "/dashboard/home" },
    { name: "Settings", icon: IoMdSettings, path: "/dashboard/settings" },
  ];
  return (
    <nav>
      <ul className="mb-4">
        {menuDashboard.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className="flex items-center gap-2 p-3 hover:bg-red-800 hover:text-white rounded-md"
          >
            <item.icon />
            <p className="text-sm">{item.name}</p>
          </Link>
        ))}
      </ul>
      <SignOutButton>
        <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-md flex items-center gap-2">
          <FaSignOutAlt />
          Sign Out
        </button>
      </SignOutButton>
    </nav>
  );
}
