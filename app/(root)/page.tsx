import LeftSidebar from "@/components/shared/LeftSidebar";
import ProductCard from "@/components/shared/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-800 w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2">
      <ProductCard />

      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

    </div>
  );
}
