import { GetAllProducts } from "@/lib/actions/product.actions";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const AllProducts = async ({ id }: { id: string }) => {
  const allProducts = await GetAllProducts(id);

  return (
    <div>
      {
        allProducts.length > 0 ? 
        allProducts.map((product) => (
          <div key={product.id} className="flex flex-col md:flex-row font-mono bg-zinc-800 border-t-2 border-b-2 border-black text-white p-2 mx-4 my-2 rounded-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex items-center justify-center p-2 m-2 ">
                <Image
                  src={product.image}
                  alt="small Product image"
                  width={100}
                  height={80}
                  className="rounded-full p-1 border-2 border-black bg-white mx-2  "
                />
  
                <span className="ml-2 font-bold w-[250px]">{product.title}</span>
              </div>
              <div className="flex flex-col md:flex-row w-full">
              <div className="flex justify-center w-full">{product.price} Rs</div>
              <div className="flex justify-center w-full me-5">
                Commission: {product.commissionRate}%
              </div>
              </div>
              <div className="flex  w-full justify-center md:justify-end text-slate-400">
                Open for: Affiliate and Reviews
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
