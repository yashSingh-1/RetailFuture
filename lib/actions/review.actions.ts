import { db } from "@/db"

interface Props {
    reviewerId: string,
    productId: string,
    review: string,
    nameOfReviewer: string,
    stars: number
}

export const CreateReview = async ({reviewerId, productId, review, nameOfReviewer, stars}: Props) => {
    db.review.create({
        data: {
            parentProductId: productId,
            UserReviewerId: reviewerId,
            ReviewStory: review,
            NameOfReviewer: nameOfReviewer,
            StarsAwarded: stars
        }
    })
}