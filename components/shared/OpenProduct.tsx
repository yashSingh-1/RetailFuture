"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  imgOfProduct: string;
  titleOfProduct: string;
  descriptionOdProduct: string;
  priceOfProduct: string;
  userID: string;
productID: string;
}

const OpenProduct = ({
  imgOfProduct,
  titleOfProduct,
  descriptionOdProduct,
  priceOfProduct,
  userID,
productID
}: Props) => {

  return (
    <div className="p-4 md:p-8 font-mono  mb-5">
      <div className="flex flex-col text-center">
        <div className="m-auto md:flex border-b-2 border-zinc- pb-5 ">
          <Image
            src={imgOfProduct}
            alt="Product Image"
            width={200}
            height={200}
            className="m-auto rounded-lg mb-4"
          />
          <div className="my-auto ms-5">
            <div className="text-3xl">{titleOfProduct.toUpperCase()}</div>
            <div className="text-sm text-zinc-500">{descriptionOdProduct}</div>
            <div className="font-bold">Price: {priceOfProduct}</div>
            <div className="flex gap-3 mt-4">
              <Button className="w-full bg-zinc-600">Check Reviews</Button>
              <Link href={`/affiliate/buy/${userID}/${productID}/buy`} className="w-full">
              <Button className="w-full bg-blue-600">Buy Now</Button>
              </Link>
            </div>
          </div>
        </div>
        <div id="#reviews"></div>
      </div>
    </div>
  );
};

export default OpenProduct;
