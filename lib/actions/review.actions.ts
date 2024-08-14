"use server";

import { db } from "@/db";

interface Props {
  reviewerId: string;
  productId: string;
  review: string;
  nameOfReviewer: string;
  stars: number;
}

export const CreateReview = async ({
  reviewerId,
  productId,
  review,
  nameOfReviewer,
  stars,
}: Props) => {
  const createdReview = await db.review.create({
    data: {
      parentProductId: productId,
      UserReviewerId: reviewerId,
      ReviewStory: review,
      NameOfReviewer: nameOfReviewer,
      StarsAwarded: stars,
    },
  });
  return createdReview;
};

export const FetchReviewsOfAProduct = async (UserId : string) => {
    const review = await db.review.findMany({
        where: {
            UserReviewerId: UserId
        }
    })
    console.log("Review from actions", review)
    return review;
}