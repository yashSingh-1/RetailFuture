"use server";

import { db } from "@/db";

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
      userId: userId,
    },
  });
  // console.log("All products", allProducts)
  return allProducts;
};

export const PopulateProductForAll = async () => {
  const allProductsLiterally = await db.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      commissionRate: true,
      image: true,
      description: true,
      user: true
    },
  });
  // console.log("Lit all pro", allProductsLiterally);
  return allProductsLiterally;
};

export const getProductById = async (id: string) => {
  const product = await db.product.findUnique({
    where: {
      id: id
    }
  })
  return product;
}

export const FetchProductById = async (id: string) => {
  const product = await db.product.findUnique({
    where: {
      id: id
    },
    include: {
      reviews: true
    }
  })
  return product;
}

// export const DeleteProduct = async (id: string) => {
//   const deleteProduct = await db.product.deleteMany({
//     where: {
//       id: id
//     }
//   })
//   return deleteProduct;
// }