import ProductView from "@/components/site/productView";
import React from "react";

export default function DetailPage({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return (
    <div>
      <ProductView id={params.productId} />
    </div>
  );
}
