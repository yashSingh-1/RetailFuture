import { findUserInDB } from "@/lib/actions/user.actions";
import Image from "next/image";
import React from "react";

const CurrentUser = async ({ id }: { id: string }) => {
  const foundUser = await findUserInDB(id);

  return (
    <div className="flex flex-col text-white p-5">
      <div className="text-4xl p-2">
        Hello, <span className="text-blue-700">{foundUser?.name}</span>
      </div>
      <div className="text-lg px-2">
        Earn an income using efficient Affiliate
      </div>
      <div className="flex">
        <div>
          {foundUser?.image && (
            <Image
              src={foundUser!.image!}
              alt="User Image"
              width={100}
              height={100}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentUser;
