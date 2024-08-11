"use client";

import { useForm } from "react-hook-form";
import { ProductSchema } from "@/lib/valifation";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { CreateProductForUser } from "@/lib/actions/product.actions";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const CreateProduct = ({id}: {id: string}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setLoading] = useState(false)
  const router = useRouter()
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      commission: "",
      image: "",
    },
  });

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";

        fieldChange(imageDataUrl);
      };
      fileReader.readAsDataURL(file);
    }
  };

  async function onSubmit(values: z.infer<typeof ProductSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
        setLoading(true);
        const createdProduct = await CreateProductForUser({
            userId: id,
            title: values.title,
            description: values.description,
            price: values.price,
            commission: values.commission,
            image: values.image
        })
        console.log("Created Product", createdProduct);
        console.log(values);

        if(createdProduct){
            setLoading(false)
            router.push("/products")
        }
        
    } catch (error) {
        console.log("Error", error)
    }
  }

  return (
    <div className="text-white p-4 max-w-[400px] md:max-w-[600px] flex flex-col justify-center m-auto h-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span>Choose an Image for your product</span>
                  {field.value ? (
                    <Image
                      src={field.value}
                      alt="Product Image"
                      width={300}
                      height={200}
                      className="mt-2"
                    />
                  ) : null}
                </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    placeholder="Upload a photo"
                    className="w-[120px] h-[40px]"
                    onChange={(e) => handleImage(e, field.onChange)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the name of your product"
                    {...field}
                    className="text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Description for your product"
                    {...field}
                    className="text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the Price in Rupees. Ex: 3000"
                    {...field}
                    className="text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="commission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Commission Percentage</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the commission in percentage. Ex: 20"
                    {...field}
                    className="text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500"
            disabled={isLoading}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateProduct;
