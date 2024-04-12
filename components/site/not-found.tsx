import { PackageOpen } from "lucide-react";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col h-[50vh] gap-10 items-center justify-center w-full">
      <PackageOpen size={100} />
      <h2 className="text-6xl font-bold text-foreground max-[580px]:text-4xl max-[400px]:text-2xl text-start">
        No item found
      </h2>
    </div>
  );
}
