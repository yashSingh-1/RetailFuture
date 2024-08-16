"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ReviewSchema } from "@/lib/valifation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CreateReview } from "@/lib/actions/review.actions";
import { useRouter } from "next/navigation";

interface Props {
  imgOfProduct: string;
  productTitle: string;
  productPrice: string;
  productCommission: string;
  productDescription: string;
  productId: string;
  userId: string;
}

const ReviewProduct = ({
  imgOfProduct,
  productTitle,
  productPrice,
  productCommission,
  productDescription,
  productId,
  userId,
}: Props) => {
  const [star, setStar] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const form = useForm<z.infer<typeof ReviewSchema>>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      review: "",
      reviewerName: "",
      stars: "",
    },
  });

  const yourComm = (Number(productCommission) / 100) * Number(productPrice);

  useEffect(() => {
    const stars = Number(star);
    if (stars <= 5) {
      setStar(JSON.stringify(stars));
      console.log("Star", stars);
    } else {
      setMessage("The rating must be less than or equal to five");
    }
  }, [star]);

  async function onSubmit(values: z.infer<typeof ReviewSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const createdReview = await CreateReview({
      productId: productId,
      reviewerId: userId,
      review: values.review,
      nameOfReviewer: values.reviewerName,
      stars: Number(star),
    });
    console.log("Creatd Review", createdReview);
    if(createdReview){
        router.push("/reviews")
    }
  }

  return (
    <div className="w-full h-full">
      <div className="text-white text-2xl pt-4 ps-4 mb-4 font-mono">
        Review Product and become Affiliate of{" "}
        <span className="text-blue-500 text-xl">&quot;{productTitle}&quot;</span>
      </div>
      <div className="text-white min-w-[400px] md:min-w-[500px] h-full flex flex-col md:flex-row ">
        <div className="md:grid grid-cols-2 w-full h-full">
          <div className="m-auto p-2 rounded-lg max-w-[350px] text-center">
            <Image
              src={imgOfProduct}
              alt="Product Image"
              width={187}
              height={269}
              className="m-auto rounded-lg"
            />
            <div className="text-xl font-mono text-slate-300 mt-2">
              {productTitle.toUpperCase()}
            </div>
            <div className="text-sm text-slate-400">{productDescription}</div>
            <div className="text-lg font-mono">Your commission: ₹ {yourComm}</div>
            <div className="text-lg font-mono">
              Price of the product: ₹ {productPrice} 
            </div>
          </div>
          <div className="flex flex-col m-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 m-auto mt-10 md:mt-0 border-t md:border-0 pt-4"
              >
                <FormField
                  control={form.control}
                  name="review"
                  render={({ field }) => (
                    <FormItem className="flex flex-col m-auto">
                      <FormLabel>Review</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Your story regarding the product that may affect the user Purchase."
                          {...field}
                          className="w-[400px] text-black"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="reviewerName"
                  render={({ field }) => (
                    <FormItem className="flex flex-col m-auto">
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
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
                  name="stars"
                  render={({ field }) => (
                    <FormItem className="flex flex-col m-auto">
                      <FormLabel>Stars out of Five</FormLabel>
                      <FormControl className="text-black" {...field}>
                        <Input
                          placeholder={`How may stars out of five would you give it`}
                          onChange={(e) => {
                            setStar(e.target.value);
                          }}
                        />
                      </FormControl>

                      <FormMessage>
                        {message ? (
                          <div className=" text-sm text-red-600">{message}</div>
                        ) : null}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <Button
                  className="bg-blue-600 hover:bg-blue-500 w-full"
                  type="submit"
                >
                  Review
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewProduct;