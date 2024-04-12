import { CustomCard } from "@/components/site/customCard";
import NotFound from "@/components/site/not-found";
import ProductSection from "@/components/site/productSection";
import Link from "next/link";
import React from "react";

export default async function QuerySearch({
  params,
}: {
  params: {
    query: string;
  };
}) {
  const result = await fetch(
    `https://dummyjson.com/products/search?q=${params.query}`
  ).then((d) => d.json());
  console.log(result);

  const allData: DataType[] = await result.products;

  return (
    <div className="max-w-[1440px] mx-auto flex-col  py-20  px-7 flex justify-center  gap-20 min-h-screen max-lg:flex-col items-start">
      {allData.length === 0 ? (
        ""
      ) : (
        <h1 className="text-6xl font-bold text-foreground max-[580px]:text-4xl max-[400px]:text-2xl text-start ">
          Results for
          <span className="text-primary">
            {" "}
            "{params.query.split("%20").join(" ")}"
          </span>
        </h1>
      )}

      <div
        className={
          allData.length === 0
            ? "flex items-center justify-center max-w-[1440px] mx-auto"
            : "grid grid-cols-3 px-7 mx-auto max-w-[1440px] justify-center items-center gap-10 max-lg:grid-cols-2 max-md:grid-cols-1"
        }
      >
        {allData.length == 0 ? (
          <>
            <NotFound />
          </>
        ) : (
          <>
            {allData.map((card, i) => (
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
          </>
        )}
      </div>
      {allData.length === 0 ? (
        <ProductSection limit={9} title="Explore our available products" />
      ) : (
        ""
      )}
    </div>
  );
}
