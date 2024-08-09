"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div className="bg-zinc-900 flex md:hidden w-full justify-between p-3">
      <Link href="/" className="text-white text-2xl font-mono ">
        Retail
      </Link>

      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/OpenOptions.svg"
            alt="Options"
            width={34}
            height={34}
            className="invert"
          />
        </SheetTrigger>
        <SheetContent className="bg-zinc-900 text-white " >

            <Link
              href="/"
              className="flex mx-auto pt-6 text-3xl font-mono mb-4"
            >
              Retail
            </Link>

            {SidebarLinks.map((links) => {
              const isActive =
                pathname === links.route ||
                pathname.startsWith(`/${links.route}/`);
              return (
                <div
                  className={cn(
                    `flex gap-x-4 p-3 w-full rounded-xl`,
                    isActive && "bg-blue-300"
                  )}
                  key={links.label}
                >
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

        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
