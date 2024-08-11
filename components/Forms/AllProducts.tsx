import Image from "next/image";
import React from "react";

const AllProducts = () => {
  return (
    <div className="flex bg-zinc-800 border-t-2 border-b-2 border-black text-white p-2 m-2 rounded-lg">
      <div className="grid grid-cols-5 items-center">
        <div className="flex col-span-1 items-center justify-center ">
          <Image
            src="/img/man.jpg"
            alt="small Product image"
            width={35}
            height={30}
            className="rounded-full p-1 border-2 border-black bg-white col-span-1"
          />

          <span className="ml-2">Product name with 5 </span>
        </div>
        <div className="flex justify-center">
             3000 Rs
        </div>
        <div className="flex justify-center">
            Commission: 20%
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
  );
};

export default AllProducts;
