"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Blogs", href: "/blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Dynamic Space Consulting"
            className="h-12 w-auto"
            width={48}
            height={48}
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList className="space-x-8">
            {navLinks.map((link, index) => {
              if (index === 2) {
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-sm font-semibold transition-colors hover:text-yellow-400 bg-transparent focus:bg-transparent !data-[state=open]:bg-transparent !data-[state=open]:hover:bg-transparent !data-[state=open]:hover:text-current !data-[state=open]:focus:bg-transparent",
                        pathname === link.href ? "text-yellow" : "text-gray-100"
                      )}
                      onClick={() => router.push(link.href)}
                    >
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="mt-10 !bg-[#0A3D62] !border-none flex flex-col gap-2 p-4 !w-[200px]">
                      <Link
                        href={link.href}
                        className="text-sm text-[#FAFAFA] hover:text-yellow font-inter hover:scale-110 transition-transform duration-200 origin-bottom-left"
                      >
                        Prospect Research
                      </Link>
                      <Link
                        href={link.href}
                        className="text-sm text-[#FAFAFA] hover:text-yellow font-inter hover:scale-110 transition-transform duration-200 origin-bottom-left"
                      >
                        Grants and Sponsorship
                      </Link>
                      <Link
                        href={link.href}
                        className="text-sm text-[#FAFAFA] hover:text-yellow  font-inter hover:scale-110 transition-transform duration-200 origin-bottom-left"
                      >
                        Fundraising Training
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              } else {
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-lg font-semibold transition-colors hover:text-yellow-400 hover:bg-transparent",
                          pathname === link.href
                            ? "text-yellow"
                            : "text-gray-100"
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="lg:hidden text-gray-100 hover:text-yellow-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#0A3D62] border-gray-700 px-10"
          >
            <div className="flex flex-col space-y-6 mt-6">
              {navLinks.map((link, index) => (
                <div key={link.href}>
                  {index === 2 ? (
                    <div>
                      <div
                        className="text-lg font-semibold text-gray-100 mb-3"
                        onClick={() => router.push(link.href)}
                      >
                        {link.label}
                      </div>
                      <div className="ml-4 space-y-3">
                        <Link
                          href={link.href}
                          className="block text-sm text-[#FAFAFA] hover:text-yellow font-inter transition-colors"
                        >
                          Prospect Research
                        </Link>
                        <Link
                          href={link.href}
                          className="block text-sm text-[#FAFAFA] hover:text-yellow font-inter transition-colors"
                        >
                          Grants and Sponsorship
                        </Link>
                        <Link
                          href={link.href}
                          className="block text-sm text-[#FAFAFA] hover:text-yellow font-inter transition-colors"
                        >
                          Fundraising Training
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "block text-lg font-semibold transition-colors hover:text-yellow-400",
                        pathname === link.href ? "text-yellow" : "text-gray-100"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 border-t border-gray-700">
                <Button
                  asChild
                  className="w-full bg-yellow hover:bg-yellow-600 text-primary font-semibold"
                >
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Contact Button */}
        <Button
          asChild
          className="hidden lg:inline-flex bg-yellow hover:bg-yellow-600 text-primary font-semibold"
        >
          <Link href="/contact-us">Contact Us</Link>
        </Button>
      </div>
    </nav>
  );
}
