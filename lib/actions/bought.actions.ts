"use server"

import { db } from "@/db"

interface Props {
    ProductBoughtID: string,
    UserWhichGeneratedTheAffilaitedLink: string,
    FlatOrHouse: string,
    City: string,
    Country: string,
    PinCode: string,
    PhoneNum: string,
    Email: string
}

export const CreateAddress = async ({
    ProductBoughtID,
    UserWhichGeneratedTheAffilaitedLink,
    FlatOrHouse,
    City,
    Country,
    PinCode,
    PhoneNum,
    Email
}: Props) => {
    const Address = await db.boughtAddress.create({
        data: {
            ProductBought: ProductBoughtID,
            UserWhichGeneratedTheAffilaitedLink: UserWhichGeneratedTheAffilaitedLink,
            FlatOrHouse: FlatOrHouse,
            City: City,
            Country: Country,
            PinCode: PinCode,
            PhoneNum: PhoneNum,
            Email: Email
        }
    })
    return Address;
}