"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import { ThemeChanger } from "./theme-changer";
import { SearchBar } from "./searchBar";

const links = [
  { title: "Products", href: "/products" },
  { title: "Categories", href: "/category" },
];
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full bg-background  ">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto  h-16 py-10 px-7">
        <Link aria-label={"Home Page"} href="/" className="flex ">
          <Logo />
        </Link>
        <Button
          id="menu"
          role="none"
          area-label={"Menu"}
          onClick={() => setToggle(!toggle)}
          variant={"outline"}
          className="hidden max-lg:block"
        >
          <Menu />
        </Button>
        <div
          className={
            toggle
              ? "flex fixed w-full h-screen items-center justify-center top-0 left-0 flex-col bg-primary-foreground gap-16 z-50"
              : "flex items-center justify-between gap-16 max-lg:hidden"
          }
        >
          <div
            className={
              toggle
                ? "flex flex-col items-center justify-center gap-16 font-bold text-primary"
                : "flex items-center justify-center gap-16 font-bold text-primary"
            }
          >
            {links.map((link) => (
              <Link
                aria-label={"Nav Link"}
                href={link.href}
                onClick={() => setToggle(false)}
                key={link.title}
                className="text-foreground"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <Button
            id="login"
            role="none"
            area-label={"Login"}
            variant={"outline"}
          >
            Login
          </Button>
          <Button
            id="Register"
            role="none"
            area-label={"Register"}
            variant={"default"}
            className="bg-primary"
          >
            Register
          </Button>
          <ThemeChanger />
          <div
            className={
              toggle
                ? "flex absolute top-5 justify-between  px-7 w-full left-0"
                : "hidden"
            }
          >
            <Link aria-label={"Home Page"} href="/" className="flex ">
              <Logo />
            </Link>
            <Button
              id="close"
              role="none"
              area-label={"Close"}
              onClick={() => setToggle(!toggle)}
              variant={"outline"}
              className={toggle ? "hidden max-lg:block " : "hidden"}
            >
              <X />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
