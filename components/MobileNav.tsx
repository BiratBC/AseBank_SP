"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <>
      <section className="w-full max-w-[264px]">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/icons/hamburger.svg"
              alt="menu"
              height={30}
              width={30}
              className="cursor-pointer"
            ></Image>
          </SheetTrigger>
          <SheetContent side="left" className="border-none bg-white">
            <Link href="/" className="curson-pointer items-center gap-2">
              <Image
                src="/icons/ase_logo.png"
                width={34}
                height={34}
                alt="AseBank"
              />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                AseBank
              </h1>
            </Link>
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                  {sidebarLinks.map((item) => {
                    const isActive =
                      pathname === item.route ||
                      pathname.startsWith(`${item.route}/`);
                    return (
                      <SheetClose asChild key={item.route}>
                        <Link
                          href={item.route}
                          key={item.label}
                          className={cn("mobilenav-sheet_close w-full", {
                            "bg-bank-gradient": isActive,
                          })}
                        >
                          <div className="relative size-6">
                            <Image
                              src={item.imgURL}
                              alt={item.label}
                              width={20}
                              height={20}
                              className={cn({
                                "brightness-[3] invert-0": isActive,
                              })}
                            ></Image>
                          </div>
                          <p
                            className={cn("text-16 font-semibold text-black-2", {
                              "text-white": isActive,
                            })}
                          >
                            {item.label}
                          </p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
};

export default MobileNav;
