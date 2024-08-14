"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

enum TypesOfCustomer {
  typeOfUserHere = "AffilateUser",
  otherType = "SalesMan",
}

export const createUser = async ({
  typeOfCustomer,
  email,
  name,
  userClerkId,
  image
}: {
  typeOfCustomer: TypesOfCustomer;
  email: string;
  name: string;
  userClerkId: string;
  image: string;
}) => {
  const userPresent = await db.user.findFirst({
    where: {
      userIdClerk: userClerkId,
    },
  });

  if (userPresent) {
    redirect("/");
  }

  if (!userPresent) {
    const userCreate = await db.user.create({
      data: {
        email: email,
        name: name,
        typeOfCustomer: typeOfCustomer,
        userIdClerk: userClerkId,
        image: image
      },
    });
    console.log("Created user", userCreate);
    if (userCreate) {
      redirect("/");
    }
  }
};

export const findUserInDB = async (userClerkId :string) => {
    const foundUser = await db.user.findFirst({
        where: {
            userIdClerk: userClerkId
        },
        select: {
          id: true
        }
    })
    return foundUser;
}

export const createProduct = () => {};
