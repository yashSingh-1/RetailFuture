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
  stars: z.number({
    required_error: "Stars is required",
    invalid_type_error: "Number of Stars must be a positive number"
  }).min(1).max(1).nonnegative().default(0)
})