import LeftSidebar from "@/components/shared/LeftSidebar";
import ProductCard from "@/components/shared/ProductCard";
import { PopulateProductForAll } from "@/lib/actions/product.actions";
import Image from "next/image";

export default async function Home() {
  const AllProducts = await PopulateProductForAll();
  // console.log("All Products", AllProducts);
  return (
    <div className="bg-zinc-900 w-full h-full p-4">
      <div className="text-4xl font-mono text-blue-600 mb-5">
        Products for you to Review!
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2">
      {AllProducts.map((products) => (
        <ProductCard
          key={products.id}
          id={products.id}
          title={products.title}
          price={products.price}
          commission={products.commissionRate}
          description={products.description}
          image={products.image}
          userThatCreated={products.user.name}
        />
      ))}
    </div>
    </div>
  );
}
