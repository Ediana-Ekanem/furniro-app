import React, { useMemo } from "react";
import { Cloudinary } from "cloudinary-core";
import LazyLoad from "react-lazyload";
import Button from "../../component/common/button/Button";
import { HomeImages, cloudName } from "../../cloudImages/Cloud";
import { useNavigate } from "react-router-dom";

// Move Cloudinary instance creation outside of the component
const cld = new Cloudinary({ cloud_name: cloudName });

const HeroSection = React.memo(() => {
  const navigate = useNavigate();

  const bgImageUrl = useMemo(() => {
    return cld.url(HomeImages.heroImg, {
      fetch_format: "auto",
      quality: "auto",
    });
  }, []);

  return (
    <section>
      <LazyLoad height={200} offset={100}>
        <div
          className="hero-section bg-cover bg-center h-[500px]  md:h-screen relative z-10 mt-10"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        >
          <div className="hero-content hidden md:block absolute left-[739px] top-[180px] w-[610px] h-[420px] bg-[#FFF3E3] p-10 rounded-lg">
            <p className="hero-new-arrival font-semibold text-[16px] leading-[24px] tracking-wider">
              New Arrival
            </p>
            <h1 className="hero-title text-[#B88E2F] text-[52px] font-bold leading-[65px] w-[400px] pt-1 pb-5">
              Discover Our New Collection
            </h1>
            <p className="hero-description font-medium text-[18px] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <Button
              backgroundColor="#b88e2f"
              textColor="white"
              padding="25px 72px"
              onClick={() => navigate("/shop")}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </LazyLoad>
    </section>
  );
});

export default HeroSection;
