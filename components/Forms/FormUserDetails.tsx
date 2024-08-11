"use client";

import { UserSchema } from "@/lib/valifation";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createUser } from "@/lib/actions/user.actions";


enum TypesOfCustomer {
  typeOfUserHere = "AffilateUser" ,
  otherType = "SalesMan"
}

const FormUserDetails = ({ name, email, userClerkId, img }: { name: string; email: string; userClerkId: string; img: string }) => {
  const [typeOfUser, setTypeOfUser ] = useState<TypesOfCustomer>(TypesOfCustomer.typeOfUserHere)

  // 1. Define your form.
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: name,
      email: email,
      typeOfCustomer: typeOfUser,
      image: img
    },
  });

  // const userType = JSON.stringify(typeOfUser)

  // console.log("Type of user", typeOfUser);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof UserSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
   
    const onboarded = await createUser({
      typeOfCustomer: typeOfUser,
      email: email,
      name: name,
      userClerkId:  userClerkId,
      image: img
    });
      
    console.log("Is this nigs onboarded", onboarded)
    console.log("values ",values);
  }

  return (
    <div className="flex flex-col h-screen m-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 m-auto"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="max-w-[300px]">
                <FormLabel className="text-white">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription className="text-slate-400">
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="max-w-[300px]">
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="typeOfCustomer"
            render={({ field }) => (
              <FormItem className="max-w-[400px]">
                <FormLabel className="text-white">
                  Choose what you prefer
                </FormLabel>
                <FormControl>
                  <RadioGroup defaultValue="option-one" >
                    <div className="flex items-center space-x-2" onClick={() => setTypeOfUser(TypesOfCustomer.typeOfUserHere)}>
                      <RadioGroupItem value="option-one" id="option-one" color="white" />
                      <Label htmlFor="option-one" className="text-white">I am an Affiliate</Label>
                    </div>
                    <div className="flex items-center space-x-2" onClick={() => setTypeOfUser(TypesOfCustomer.otherType)}>
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two" className="text-white">I am a Sales Person with a active business.</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-[300px] bg-blue-600">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormUserDetails;
