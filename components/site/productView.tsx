import React from "react";
import { Button } from "../ui/button";
import CustomImage from "./customImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { title } from "process";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { BreadCrumb } from "./breadcrumb";
import ProductSection from "./productSection";
import { CustomCard } from "./customCard";

export default async function ProductView({ id }: { id: string }) {
  const data = await fetch(`https://dummyjson.com/products/${id}`).then((d) =>
    d.json()
  );

  const allData: DataType = await data;
  console.log(allData);
  const related = await fetch(
    `https://dummyjson.com/products/category/${allData.category}?limit=3&skip=0`
  ).then((d) => d.json());
  const rp: DataType[] = await related.products;

  return (
    <section className="text-foreground px-5  flex items-start flex-col justify-start py-16 body-font  max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex items-center justify-start gap-10 w-full">
        <Link href={"/products"}>
          <Button className=" top-5 left-0 flex items-center justify-between">
            <ChevronLeft /> Products
          </Button>
        </Link>
        <BreadCrumb
          current={allData.title.split(" ")[0]}
          page="Products"
          path="products"
        />
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="max-w-[1440px] mx-auto flex items-center  w-full justify-between gap-20 flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm  title-font text-foreground/50 tracking-widest">
              {allData.brand}
            </h2>
            <h1 className="text-foreground font-bold text-3xl title-font mb-4">
              {allData.title}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-primary border-b-2 border-primary py-2 text-lg px-1">
                Description
              </a>
            </div>
            <p className="leading-relaxed mb-4">{allData.description}</p>
            <div className="flex border-t border-foreground/20 py-2">
              <span className="text-foreground/50">Rating</span>
              <span className="ml-auto text-foreground">{allData.rating}</span>
            </div>
            <div className="flex border-t border-foreground/20 py-2">
              <span className="text-foreground/50">In stock </span>
              <span className="ml-auto text-foreground">
                {allData.stock} available
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-foreground/20 py-2">
              <span className="text-foreground/50">Discount</span>
              <span className="ml-auto text-foreground">
                -{allData.discountPercentage}%
              </span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-foreground">
                ${allData.price}.00
              </span>
              <Button className="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded">
                Buy {allData.title}
              </Button>
              {/* <button className="rounded-full w-10 h-10 bg-foreborder-foreground/20 p-0 border-0 inline-flex items-center justify-center text-foreground/50 ml-4"></button> */}
            </div>
          </div>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {allData.images.map((im: string) => (
                <CarouselItem key={im}>
                  <CustomImage
                    alt="ecommerce"
                    classname="w-full h-full rounded-2xl"
                    img={im}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto flex-col  py-20  flex justify-center  gap-20 min-h-screen max-lg:flex-col items-center">
        <h1 className="text-6xl font-bold text-foreground max-[580px]:text-4xl max-[400px]:text-2xl text-center">
          Related products
        </h1>
        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
          {rp.map((card, i) => (
            <CustomCard
              brand={card.brand}
              category={card.category}
              description={card.description}
              discountPercentage={card.discountPercentage.toString()}
              id={card.id}
              price={card.price.toString()}
              stock={card.stock.toString()}
              thumbnail={card.thumbnail}
              title={card.title}
              key={i}
            />
          ))}
        </div>
      </div>
      <ProductSection limit={6} title="View other products" />
    </section>
  );
}
