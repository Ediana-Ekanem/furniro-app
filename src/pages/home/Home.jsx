import React from "react";
import HeroSection from "../../component/home/HeroSection";
import RangeSection from "../../component/home/RangeSection";
import ProductSection from "../../component/home/ProductSection";
import CarouselSection from "../../component/home/carousel/CarouselSection";
import GallerySection from "../../component/home/GallarySection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <RangeSection />
      <ProductSection />
      <CarouselSection />
      <GallerySection />
    </>
  );
};

export default Home;
