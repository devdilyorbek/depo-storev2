import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { heroHeader } from "@/config/contents";
import CustomImage from "./customImage";

export default  function HeroHeader() {
 

  return (
    <section className="container flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
      <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold lg:text-5xl">
            {heroHeader.header}
          </h1>
          <h2 className="text-sm font-light text-foreground/70 lg:text-xl">
            {heroHeader.subheader}
          </h2>
        </div>
        <Link
          href="https://github.com/redpangilinan/next-shadcn-landing"
          target="_blank"
          className={`w-[10rem] ${cn(buttonVariants({ size: "lg" }))}`}
        >
          Get started
        </Link>
      </div>
      {heroHeader.image !== "" ? (
        <div className="flex flex-1 justify-center lg:justify-end">
          <CustomImage
            img="https://domogeek.net/wp-content/uploads/2023/03/iphone-15-ultra-concept-1.jpg"
            classname="max-w-full w-[800px]"
            alt="Header image"
          />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
