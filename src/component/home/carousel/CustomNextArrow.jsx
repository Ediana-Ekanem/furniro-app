import React from "react";
import arrow from "/assets/icons/home-icon/carousel-arrow.svg";

const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer z-10"
      onClick={onClick}
    >
      <img src={arrow} alt="Next" className="w-6 h-6" />
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer z-10"
      onClick={onClick}
    >
      <img src={arrow} alt="Prev" className="w-6 h-6 transform rotate-180" />
    </div>
  );
};

export { CustomNextArrow, CustomPrevArrow };
