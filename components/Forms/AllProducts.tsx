import { GetAllProducts } from "@/lib/actions/product.actions";
import Image from "next/image";
import React from "react";

const AllProducts = async ({ id }: { id: string }) => {
  const allProducts = await GetAllProducts(id);

  return (
    <div>
      {
        allProducts.length > 0 ? 
        allProducts.map((product) => (
          <div className="flex bg-zinc-800 border-t-2 border-b-2 border-black text-white p-2 mx-4 rounded-lg">
            <div className="grid grid-cols-5 items-center">
              <div className="flex col-span-1 items-center justify-center ">
                <Image
                  src={product.image}
                  alt="small Product image"
                  width={50}
                  height={40}
                  className="rounded-full p-1 border-2 border-black bg-white col-span-1"
                />
  
                <span className="ml-2">{product.title}</span>
              </div>
              <div className="flex justify-center">{product.price} Rs</div>
              <div className="flex justify-center">
                Commission: {product.commissionRate}%
              </div>
              <div className="flex  w-full justify-end">
                Open for: Affiliate and Reviews
              </div>
              <div className="flex justify-center gap-5">
                <Image
                  src="/icons/Home.svg"
                  alt="Edit"
                  width={24}
                  height={24}
                  className="invert"
                />
                <Image
                  src="/icons/Home.svg"
                  alt="Edit"
                  width={24}
                  height={24}
                  className="invert"
                />
              </div>
            </div>
          </div>
        )) : <div className="text-2xl text-white font-mono">
          No Products created by You yet!
        </div>
      }
      
    </div>
  );
};

export default AllProducts;
