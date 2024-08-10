import { z } from "zod"
 
enum TypesOfCustomer {
  typeOfUserHere = "AffilateUser" ,
  otherType = "SalesMan"
}

export const UserSchema = z.object({
  name: z.string().min(2).max(50),
  typeOfCustomer: z.nativeEnum(TypesOfCustomer),
  email: z.string().email()
})
