import CategoriesSection from "@/components/site/categoriesSection";
import { CustomCard } from "@/components/site/customCard";
import HeroHeader from "@/components/site/hero";
import ProductSection from "@/components/site/productSection";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <ProductSection limit={12} title="" />
      <CategoriesSection />
    </div>
  );
}
