import React from "react";
import { Image as CloudinaryImage } from "cloudinary-react";
import { ProductImages, cloudName } from "../../cloudImages/Cloud";
import Button from "../../component/common/button/Button";
import compareIcon from "/assets/icons/hover-icon/compare-logo.svg";
import heartIcon from "/assets/icons/hover-icon/Heart-logo.svg";
import shareIcon from "/assets/icons/hover-icon/share-logo.svg";
import ShowMore from "../../component/common/button/ShowMore";
import Container from "../container/Container";

const ProductSection = () => (
  <Container>
    <section className="py-10">
      <h3 className="text-[22px] md:text-[40px] font-[700] leading-[48px] text-center">
        Our Products
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {ProductImages.map((product) => (
          <div
            className="bg-[#F4F5F7] h-[436px] w-[285px] relative group"
            key={product.publicId}
          >
            <div className="relative">
              <CloudinaryImage
                cloudName={cloudName}
                publicId={product.publicId}
                alt={product.publicId}
                className="w-full h-auto object-cover"
              />
              {product.tag === "new" && (
                <div className="absolute top-5 right-5 rounded-full bg-[#2EC1AC] text-white w-[48px] h-[48px] flex items-center justify-center">
                  New
                </div>
              )}
              {product.tag === "-30%" && (
                <div className="absolute top-5 right-5 rounded-full bg-[#E97171] text-white w-[48px] h-[48px] flex items-center justify-center">
                  -30%
                </div>
              )}
              {product.tag === "-50%" && (
                <div className="absolute top-5 right-5 rounded-full bg-[#E97171] text-white w-[48px] h-[48px] flex items-center justify-center">
                  -50%
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-[600] text-2xl">{product.title}</h3>
              <p className="text-[#898989] text-[16px] leading-[24px] font-[500]">
                {product.desc}
              </p>
              <div className="flex gap-5">
                <p className="font-[600] text-lg">Rp{product.amount}</p>
                {product.discount && (
                  <p className="line-through text-[#B0B0B0] text-[16px] leading-[24px]">
                    Rp{product.discount}
                  </p>
                )}
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
              <Button
                backgroundColor="white"
                textColor="#B88E2F"
                padding="10px 60px"
              >
                Add to cart
              </Button>
              <div className="flex space-x-5 items-center mt-5">
                <div className="flex space-x-1 items-center">
                  <img src={shareIcon} alt="shareIcon" />
                  <h3 className="text-white font-bold">Share</h3>
                </div>
                <div className="flex space-x-1 items-center">
                  <img src={compareIcon} alt="compareIcon" />
                  <h3 className="text-white font-bold">Compare</h3>
                </div>
                <div className="flex space-x-1 items-center">
                  <img src={heartIcon} alt="heartIcon" />
                  <h3 className="text-white font-bold">Like</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <ShowMore />
      </div>
    </section>
  </Container>
);

export default ProductSection;