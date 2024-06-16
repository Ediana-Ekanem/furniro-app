import React from "react";
import Container from "../../container/Container";
import Button from "../../common/button/Button";
import { Image as CloudinaryImage } from "cloudinary-react";
import {
  CarouselImage,
  CarouselImages,
  cloudName,
} from "../../../cloudImages/Cloud";
import line from "/assets/icons/home-icon/line.svg";
import arrow from "/assets/icons/home-icon/Right-arrow.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "../carousel/CustomNextArrow";

const CarouselSection = () => {
  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <>
      <section className="bg-[#FCF8F3] py-10">
        <Container>
          <div className="md:flex  items-center   font-poppins">
            <div>
              <h3 className="font-[700] text-center md:text-start text-[25px] mb-10 md:mb-0 md:text-[40px] md:leading-[48px]  md:w-[400px]">
                50+ Beautiful rooms inspiration
              </h3>
              <p className="text-[#616161] font-[500] text-[16px] leading-[24px] md:w-[370px] mt-5 hidden md:block">
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>

              <div className="hidden md:block">
                <Button
                  backgroundColor="#b88e2f"
                  textColor="white"
                  padding="12px 52px"
                >
                  Explore More
                </Button>
              </div>
            </div>
            <div className=" hidden md:block md:w-[404px] h-[582px] relative">
              <CloudinaryImage
                cloudName={cloudName}
                publicId={CarouselImage.publicId}
                className="w-full h-full object-cover"
              ></CloudinaryImage>

              <div className="absolute left-5 bottom-5 font-poppins ">
                <div className=" flex">
                  <div
                    className="w-[217px] h-[130px] flex  flex-col justify-center items-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                  >
                    <div className="flex items-center space-x-4 text-[#616161]">
                      <p>01 </p>
                      <img src={line} alt="line" />
                      <p>Bed Room</p>
                    </div>

                    <h3 className="font-[600] text-[28px] leading-[33.6px] text-[#3A3A3A] mt-2">
                      Inner Peace
                    </h3>
                  </div>
                  <div className="flex justify-end items-end">
                    <div className="bg-[#B88E2F] flex justify-center items-center h-10 w-10">
                      <img src={arrow} alt="arrow-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[300px] md:w-[372px] h-[400px] md:h-full  md:ms-10  ms-5  ">
              <Slider {...settings}>
                {CarouselImages.map((item) => (
                  <div key={item.id}>
                    <div className="w-[300px] md:w-[372px] h-[400px] md:h-[559px]">
                      <CloudinaryImage
                        cloudName={cloudName}
                        publicId={item.publicId}
                        className="w-full h-full object-cover"
                      ></CloudinaryImage>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CarouselSection;
