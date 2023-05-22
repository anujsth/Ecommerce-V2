import {
  ShimmerThumbnail,
  ShimmerTitle,
  ShimmerText,
  ShimmerCircularImage,
} from "react-shimmer-effects";

const CardShimmer = () => {
  return (
    <div className="h-[28rem] w-[23rem]">
      <ShimmerThumbnail height={300} />
      <ShimmerTitle line={1} center />
      <div className="flex justify-between">
        <div className="w-[30%] flex flex-col">
          <ShimmerText line={1} />
          <ShimmerText line={1} />
        </div>
        <div className="w-25% mr-4">
          <ShimmerCircularImage size={40} />
        </div>
      </div>
    </div>
  );
};

export default CardShimmer;
