import { FetchProductById } from "@/lib/actions/product.actions";
import GenerateAffliliateLink from "./GenerateAffliliateLink";
import { GenerateLink } from "@/lib/generateLink";
import { Button } from "../ui/button";

interface Props {
  ReviewStory: string;
  reviewerName: string;
  StarsGiven: number;
  ParentProductId: string;
  userIdThatSubmitted: string
}

const ReviewCard = async ({
  ReviewStory,
  reviewerName,
  StarsGiven,
  ParentProductId,
  userIdThatSubmitted
}: Props) => {
  const productThatIsReviewed = await FetchProductById(ParentProductId);

  const YourLink = GenerateLink({ParentProductId:ParentProductId, userID:userIdThatSubmitted})

  return (
    <div className="flex flex-col md:grid grid-cols-4 border-b border-slate-700 space-y-1 mb-8 p-4">
      <div className="text-white flex flex-col col-span-3 me-2">
        <div>
          <div className="font-mono text-xl">{ReviewStory}</div>
          <div className="font-mono">Stars: {StarsGiven} / 5</div>
          <div className="font-mono text-sm text-slate-600">{reviewerName}</div>
            {
                YourLink ? 
                <div className="p-2 border-2 rounded-lg border-slate-700 mt-2  w-full flex justify-between">
                    <span className="my-auto">
                    {YourLink.slice(0,30)}
                    </span>
                    <div>
                        <Button className="bg-blue-600">Copy</Button>
                    </div>
                </div> : null
            }
          <div className="mt-2">
            <GenerateAffliliateLink ParentProductId={ParentProductId} userID={userIdThatSubmitted} />
          </div>
        </div>
      </div>
      <div className="col-span-1 text-white border-l border-slate-700 p-4 flex flex-col mt-4 border-r">
            <span className="text-lg font-mono">
            ReviewedProduct: "{productThatIsReviewed?.title}"
            </span>            
            <span className="text-sm font-mono text-slate-500">
                Description: {productThatIsReviewed?.description}
            </span>
        </div>
    </div>
  );
};

export default ReviewCard;
