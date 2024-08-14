"use client"

import { AddressSchema } from "@/lib/valifation";
import { zodResolver } from "@hookform/resolvers/zod";
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
import Link from "next/link";

const BuyNowForm = () => {
  const form = useForm<z.infer<typeof AddressSchema>>({
    resolver: zodResolver(AddressSchema),
    defaultValues: {
      FlatOrHouse: "",
      City: "",
      Country: "",
      PinCode: 0,
      PhoneNum: 0,
      Email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof AddressSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex flex-col">
        <Link href="/" className="w-full bg-zinc-950 text-2xl font-mono px-4 md:px-8 py-4">
            Retail
        </Link>
        <div className="font-mono text-3xl text-blue-500 p-4 md:p-8">
            Fill In the Address
        </div>
        <div className="w-[400px] flex m-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
            control={form.control}
            name="FlatOrHouse"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Flat or House/Street Name" className="text-black" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="City"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City Name" className="text-black" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-2">
          <FormField
            control={form.control}
            name="Country"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="Country" className="text-black" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="PinCode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Pincode</FormLabel>
                <FormControl>
                  <Input placeholder="PinCode" className="text-black" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <FormField
            control={form.control}
            name="PhoneNum"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Phone Number" className="text-black" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" className="text-black" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-blue-600">Submit</Button>
        </form>
      </Form>
    </div>
    </div>
  );
};

export default BuyNowForm;
