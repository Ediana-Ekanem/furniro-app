import React from "react";
import { Cloudinary } from "cloudinary-core";
import Button from "../../component/common/button/Button";
import { HomeImages, cloudName } from "../../cloudImages/Cloud";

const cld = new Cloudinary({ cloud_name: cloudName });
const bgImageUrl = cld.url(HomeImages.heroImg, {
  fetch_format: "auto",
  quality: "auto",
});

const HeroSection = () => (
  <section>
    <div
      className="bg-cover bg-center h-screen relative z-10 mt-10"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className=" hidden md:block absolute left-[739px] top-[180px] w-[610px] h-[420px] bg-[#FFF3E3] p-10 rounded-lg">
        <p className="font-semibold text-[16px] leading-[24px] tracking-wider">
          New Arrival
        </p>
        <h1 className="text-[#B88E2F] text-[52px] font-bold leading-[65px]  w-[400px] pt-1 pb-5">
          Discover Our New Collection
        </h1>
        <p className="font-medium text-[18px] leading-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>

        <Button backgroundColor="#b88e2f" textColor="white" padding="25px 72px">
          Buy Now
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
