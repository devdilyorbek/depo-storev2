import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomImage from "./customImage";
import Link from "next/link";
import { describe } from "node:test";

export function CustomCard({
  thumbnail,
  title,
  price,
  description,
  brand,
  stock,
  category,

  discountPercentage,
  id,
}: {
  id: number;
  thumbnail: string;
  title: string;
  price: string;
  brand: string;
  stock: string;
  category: string;
  description: string;
  discountPercentage: string;
}) {
  return (
    <Link href={"/products/" + id}>
      <Card className="max-w-[320px] w-full p-1">
        <CustomImage
          img={thumbnail}
          classname="w-full  object-cover h-52"
          alt={title}
        />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description.slice(0, 50)}...</CardDescription>

          <p className="text-foreground uppercase font-bold bg-primary/50 px-2 py-1 rounded-full">
            {category}
          </p>
          <div className="flex w-full justify-between items-center">
            <p>${price}</p>
            <p>-{discountPercentage}%</p>
          </div>
        </CardHeader>

        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            className="hover:bg-background border-0 text-start"
          >
            {stock} in stock
          </Button>
          <Button>{brand.split(" ")[0]}</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
