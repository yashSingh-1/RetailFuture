import ReviewCard from "@/components/shared/ReviewCard";
import { FetchProductById } from "@/lib/actions/product.actions";
import { FetchReviewsOfAProduct } from "@/lib/actions/review.actions";
import { findUserInDB } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const user = await currentUser();
  const currentUserIDInDB = await findUserInDB(user!.id);
  const ReviewersReviews = await FetchReviewsOfAProduct(currentUserIDInDB!.id);
  return (
    <div className="bg-zinc-900 h-full">
      <div className="text-blue-600 text-4xl px-8 pt-6">Reviews</div>
      <div className="px-4 md:px-8 pt-6 ">
        {ReviewersReviews.map((review) => (
          <ReviewCard
            key={review.id}
            userIdThatSubmitted={currentUserIDInDB!.id}
            ReviewStory={review.ReviewStory}
            reviewerName={review.NameOfReviewer}
            StarsGiven={review.StarsAwarded}
            ParentProductId={review.parentProductId}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
