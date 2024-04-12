import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

export default async function Categories() {
  const cte = await fetch("https://dummyjson.com/products/categories").then(
    (r) => r.json()
  );
  console.log(cte);

  return (
    <div className="w-full">
      <div className="wu-max flex-center flex-col gap-10">
        {/* <div className="w-80 h-1 rounded-full bg-primary" /> */}
        <Marquee className="py-7">
          {cte.map((c: string) => (
            <Link
              key={c}
              className="flex items-center gap-3 text-base uppercase hover:scale-125 transition-all mx-16"
              href={"/category/" + c}
            >
              {c}
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
