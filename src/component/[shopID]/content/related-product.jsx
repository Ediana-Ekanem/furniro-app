import React, { Suspense, useMemo } from "react";
import { cloudName, relatedProductImage } from "../../../cloudImages/Cloud";
import compareIcon from "/assets/icons/hover-icon/compare-logo.svg";
import heartIcon from "/assets/icons/hover-icon/Heart-logo.svg";
import shareIcon from "/assets/icons/hover-icon/share-logo.svg";
import Button from "../../common/button/Button";

const RelatedProduct = () => {
  const LazyImage = useMemo(
    () =>
      React.lazy(() =>
        import("cloudinary-react").then((module) => ({ default: module.Image }))
      ),
    []
  );
  return (
    <div className="py-2 screen-max-width px-2 md:px-0 overflow-hidden">
  <div>
    <h1 className="text-center font-semibold text-xl">Related Products</h1>
  </div>
  <div className=" overflow-x-auto mt-12">
   <div className="flex justify-between w-fit lg:w-full">
   {relatedProductImage.map((product) => (
      <div
        className="bg-[#F4F5F7] h-[410px] w-[275px] relative group ms-5 md:ms-0"
        key={product.publicId}
      >
            <div className="relative">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyImage
                  cloudName={cloudName}
                  publicId={product.publicId}
                  alt={product.publicId}
                  className="w-full h-auto object-cover"
                />
              </Suspense>
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
              <h3 className="font-[600] text-lg">
                {product.title}
              </h3>
              <p className="text-[#898989] text-sm  font-[500]">
                {product.desc}
              </p>
              <div className="flex gap-5">
                <p className="font-[600] text-lg">
                  Rp{product.amount}
                </p>
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
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </Button>
              <div className="flex space-x-5 items-center mt-5">
                <div className="flex space-x-1 items-center">
                  <img src={shareIcon} alt="shareIcon" />
                  <h3 className="text-white font-bold">Share</h3>
                </div>
                <div
                  className="flex space-x-1 items-center cursor-pointer"
                  onClick={() => {
                    navigate(`/shop/${product.publicId}`);
                  }}
                >
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
      </div>
    </div>
  );
};

export default RelatedProduct;
