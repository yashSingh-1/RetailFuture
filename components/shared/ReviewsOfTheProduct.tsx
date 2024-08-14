interface Props {
  ReviewStory: string;
  Stars: number;
  UserThatReviewed: string;
}

const ReviewsOfTheProduct = ({
  ReviewStory,
  Stars,
  UserThatReviewed,
}: Props) => {
  return (
    <div className="flex flex-col border-2 p-4 rounded-lg border-zinc-500 font-mono w-[400px] md:w-[600px] text-center">
      <div className="text-2xl ">{ReviewStory}</div>
      <div className="text-lg ">Stars: {Stars} out of 5</div>
      <div className="text-sm text-slate-500">{UserThatReviewed}</div>
    </div>
  );
};

export default ReviewsOfTheProduct;
