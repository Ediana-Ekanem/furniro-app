import React, { Suspense } from "react";
import { Image as CloudinaryImage } from "cloudinary-react";
import { ProductImages, cloudName } from "../../cloudImages/Cloud";
import Button from "../../component/common/button/Button";
import compareIcon from "/assets/icons/hover-icon/compare-logo.svg";
import heartIcon from "/assets/icons/hover-icon/Heart-logo.svg";
import shareIcon from "/assets/icons/hover-icon/share-logo.svg";
import ShowMore from "../../component/common/button/ShowMore";
import Container from "../container/Container";
import { notification } from "antd";
import useCart from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

// Lazy load CloudinaryImage component
const LazyImage = React.lazy(() =>
  import("cloudinary-react").then((module) => ({ default: module.Image }))
);

const ProductSection = () => {
  const { addToCart, isProductInCart } = useCart();
  const [api, contextHolder] = notification.useNotification();

  const handleAddToCart = (product) => {
    if (isProductInCart(product.publicId)) {
      openNotification("topRight", product.title, true);
    } else {
      const productToAdd = {
        id: product.publicId,
        title: product.title,
        amount: product.amount,
        quantity: 1,
        size: "Default", // Default size or implement size selection if needed
        color: "Default", // Default color or implement color selection if needed
      };
      addToCart(productToAdd);
      openNotification("topRight", product.title, false);
    }
  };

  const openNotification = (placement, productTitle, alreadyAdded) => {
    api.info({
      message: alreadyAdded ? `Product Already in Cart` : `Product Added to Cart`,
      description: alreadyAdded ? `${productTitle} is already in your cart.` : `${productTitle} has been added to your cart.`,
      placement,
    });
  };

  const navigate = useNavigate();

  return (
    <Container>
      {contextHolder}
      <section className="mt-10">
        <h3 className="text-[28px] md:text-[40px] font-[700] leading-[48px] text-center">
          Our Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 mt-5 md:mt-10">
          {ProductImages.map((product) => (
            <div
              className="bg-[#F4F5F7] h-[436px] w-[285px] relative group ms-5 md:ms-0"
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
                  {isProductInCart(product.publicId) ? "Already Added" : "Add to cart"}
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
        <div className="flex justify-center my-10" onClick={() => navigate("/shop")}>
          <ShowMore />
        </div>
      </section>
    </Container>
  );
};

export default ProductSection;
