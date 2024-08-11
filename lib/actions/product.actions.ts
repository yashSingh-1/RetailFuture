"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

interface Props {
  userId: string;
  title: string;
  description: string;
  price: string;
  commission: string;
  image: string;
}

export const CreateProductForUser = async ({
  userId,
  title,
  description,
  price,
  commission,
  image,
}: Props) => {
  const productcreation = await db.product.create({
    data: {
      userId: userId,
      title: title,
      description: description,
      price: price,
      commissionRate: commission,
      image: image,
    },
  });
  console.log("Created Product", productcreation);

  if (productcreation) {
    return { productcreation: true };
  }
};

export const GetAllProducts = async (userId: string) => {
    const allProducts = await db.product.findMany({
        where: {
            userId: userId
        }
    })
    // console.log("All products", allProducts)
    return allProducts;
}


