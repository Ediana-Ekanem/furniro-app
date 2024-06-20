import React, { Suspense, useContext } from "react";
import { shopCatalogue, cloudName, ProductImages } from "../../cloudImages/Cloud";
import Button from "../../component/common/button/Button";
import compareIcon from "/assets/icons/hover-icon/compare-logo.svg";
import heartIcon from "/assets/icons/hover-icon/Heart-logo.svg";
import shareIcon from "/assets/icons/hover-icon/share-logo.svg";
import ShowMore from "../../component/common/button/ShowMore";
import Container from "../../component/container/Container";
import useCart from "../../hooks/useCart";
import { useNavigate, useParams } from "react-router-dom";

const LazyImage = React.lazy(() =>
  import("cloudinary-react").then((module) => ({ default: module.Image }))
);

const Shop = () => {
  const { addToCart } = useCart();
  const { shopID } = useParams();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <Container>
      <div className="flex flex-col justify-center items-center w-full py-10 h-fit">
        <h1 className="text-center text-violet-500"></h1>
        <div className="grid grid-cols-1 border border-red-500 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 mt-5 md:mt-10">
          {ProductImages.map((product) => (
            <div
              className="bg-[#F4F5F7] h-[420px] w-[275px] relative group ms-5 md:ms-0"
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
                <h3 className="font-[600] text-xl md:text-2xl">
                  {product.title}
                </h3>
                <p className="text-[#898989] text-[16px] leading-[24px] font-[500]">
                  {product.desc}
                </p>
                <div className="flex gap-5">
                  <p className="font-[600] text-md md:text-lg">
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
    </Container>
  );
};

export default Shop;
