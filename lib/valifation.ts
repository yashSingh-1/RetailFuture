import { z } from "zod"
 
enum TypesOfCustomer {
  typeOfUserHere = "AffilateUser" ,
  otherType = "SalesMan"
}

export const UserSchema = z.object({
  name: z.string().min(2).max(50),
  typeOfCustomer: z.nativeEnum(TypesOfCustomer),
  email: z.string().email(),
  image: z.string().optional()
})


export const ProductSchema = z.object({
  title: z.string().min(5).max(60),
  description: z.string(),
  price: z.string().min(1).max(5, {
    message: "The price must be less than a Lakh"
  }),
  commission: z.string(),
  image: z.string()
})

export const ReviewSchema = z.object({
  review: z.string(),
  reviewerName: z.string(),
  stars: z.string().min(1).max(1)
})

export const AddressSchema = z.object({
  FlatOrHouse: z.string().max(50),
  City: z.string().max(40),
  Country: z.string().max(20),
  PinCode: z.number().max(10),
  PhoneNum: z.number().max(12),
  Email: z.string().email()
})