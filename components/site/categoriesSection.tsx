import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default async function CategoriesSection() {
  const cte = await fetch("https://dummyjson.com/products/categories").then(
    (r) => r.json()
  );
  console.log(cte);
  return (
    <section className="text-foreground/70 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-primary/80">
            Choose any product of your choice
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
        </div>
        <div className="flex flex-wrap -m-4">
          {cte.map((c: string) => (
            <Link
              href={"/category/" + c}
              className="xl:w-1/3 md:w-1/2 p-4"
              key={c}
            >
              <div className="border border-foreground/80 p-6 rounded-lg">
                <h2 className="text-lg text-foreground uppercase font-medium title-font mb-2">
                  {c}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      
      </div>
    </section>
  );
}
