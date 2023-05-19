import React from "react";

const LandingPage = ({ scrollFunc }) => {
  return (
    <div className="mt-[10rem] flex justify-between items-start">
      <div className="flex flex-col text-white w-[40%] pl-[1rem] md:pl-[9rem]">
        <p className="text-3xl max-[1200px]:mt-[14rem] xl:text-6xl ">
          A gentleman is simply a patient wolf
        </p>
        <p className="mt-[3rem] max-[1200px]:hidden">
          Suits are best when they are custom-made. Ready-made suits are for
          suckers. Anyone who wears one knows that.
        </p>
        <button
          className="border border-white bg-transparent w-[8rem] xl:w-[30%] mt-12 h-[2.5rem] hover:bg-white hover:text-black transition-all"
          onClick={() => scrollFunc()}
        >
          SHOP NOW
        </button>
      </div>
      <div className="mr-[16rem] max-[1200px]:hidden">
        <div className="border-b-2 border-gray-400 pb-8 w-[18rem] flex justify-center">
          <p className="text-white text-5xl ">01</p>
        </div>
        <p className="mt-8 text-white text-2xl ml-5">CONQUER WITH STYLE</p>
      </div>
    </div>
  );
};

export default LandingPage;
