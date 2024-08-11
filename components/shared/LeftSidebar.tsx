"use client"

import { SidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex flex-col min-h-screen   bg-zinc-950 min-w-[200px] max-w-[300px] text-white">
      <Link href="/" className="flex mx-auto pt-6 text-3xl font-mono">Retail</Link>
      <div className="flex flex-col gap-6 px-4 py-10 items-start ">
        {SidebarLinks.map((links) => {
          const isActive =
            pathname === links.route || pathname.startsWith(`/${links.route}/`);
          return (
            <div className={cn(`flex gap-x-4 p-3 w-full rounded-xl`, isActive && "bg-blue-600")} key={links.label}>
              <Image
                src={links.imgUrl}
                alt={links.label}
                width={24}
                height={24}
                className={cn(isActive ? "" : "invert")}
              />
              <Link href={links.route} className="text-xl font-mono ">
                {links.label}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSidebar;
