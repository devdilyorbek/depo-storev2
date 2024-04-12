import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center text-xl font-bold justify-center gap-2">
      <Image
        src={"/logo.png"}
        className="flex dark:hidden"
        width={100}
        height={100}
        alt=" logo"
      />
      <Image
        src={"/logo-dark.png"}
        className="hidden dark:flex"
        width={100}
        height={100}
        alt=" logo"
      />
      <p>
        <span className="text-primary max-sm:hidden">DEPO</span>Store
      </p>
    </div>
  );
}
