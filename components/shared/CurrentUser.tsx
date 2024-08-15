import { findUserInDB } from "@/lib/actions/user.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const CurrentUser = async ({ id }: { id: string }) => {
  const foundUser = await findUserInDB(id);

  return (
    <div className="flex flex-col text-white p-5">
      <div className="text-4xl p-2">
        Hello, <span className="text-blue-700">{foundUser?.name}</span>
      </div>
      <div className="text-lg px-2 mb-10">
        Earn an income using efficient Affiliate
      </div>
      <div className="flex flex-col">
        <div>
          <div className="flex">
          {foundUser?.image && (
            <Image
              src={foundUser!.image!}
              alt="User Image"
              width={100}
              height={100}
              className="p-2 m-2 border-2 rounded-full"
            /> 
          )}
          <span className=" my-auto pr-2 w-fit ps-5 text-2xl">
              {foundUser?.name}
            </span>
          </div>
          <div className="text-xl mx-2 h-fit gap-x-4 border-t border-b py-4 my-4">
            
            <span className="flex">
            {foundUser?.email}
            </span>
          </div>
        </div>
        <div className="mx-2 my-4 grid grid-cols-2 gap-x-4">
          <Link href="/products" className="w-full">
            <Button className="bg-blue-600  w-full"> Check Products</Button>
          </Link>
          <Link href="/reviews" className="w-full">
            <Button className="bg-blue-600 w-full "> Check your Reviews </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CurrentUser;
