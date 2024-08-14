import OpenProduct from "@/components/shared/OpenProduct";
import ReviewsOfTheProduct from "@/components/shared/ReviewsOfTheProduct";
import { FetchProductById } from "@/lib/actions/product.actions";

const page = async ({ params }: { params: any }) => {
  // const param = params.id;
  const userID = params.id[0];
  const ProductId = params.id[1];

  const Product = await FetchProductById(ProductId);
  const Reviews = Product!.reviews;
  console.log("Reviews", Reviews);

  console.log("Product", Product);

  return (
    <div className="w-full h-full pb-4 bg-zinc-900 text-white flex flex-col">
      <div className="w-full py-4 px-10 text-2xl font-mono bg-zinc-950">
        Retail
      </div>
      <div className="text-4xl p-8 text-blue-600 font-mono">
        Presenting You!
      </div>
      <div className="flex flex-col">
        <OpenProduct
          imgOfProduct={Product!.image}
          titleOfProduct={Product!.title}
          descriptionOdProduct={Product!.description}
          priceOfProduct={Product!.price}
          userID={userID}
          productID={ProductId}
        />
        <div className="text-xl text-blue-600 m-auto font-mono mb-5">
        Reviews of the Product: 
    </div>
        <div className="m-auto md:grid grid-cols-1">
          {Reviews.map((review) => (
            <ReviewsOfTheProduct
              key={review.id}
              ReviewStory={review.ReviewStory}
              Stars={review.StarsAwarded}
              UserThatReviewed={review.NameOfReviewer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
