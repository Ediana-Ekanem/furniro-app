import React, { Suspense, useMemo, useState } from "react";
import { ConfigProvider, Pagination, notification } from "antd";
import { cloudName, shopImages } from "../../cloudImages/Cloud";
import Button from "../../component/common/button/Button";
import compareIcon from "/assets/icons/hover-icon/compare-logo.svg";
import heartIcon from "/assets/icons/hover-icon/Heart-logo.svg";
import shareIcon from "/assets/icons/hover-icon/share-logo.svg";
import ShowMore from "../../component/common/button/ShowMore";
import Container from "../../component/container/Container";
import useCart from "../../hooks/useCart";
import { useNavigate, useParams } from "react-router-dom";
import Services from "../../component/common/services/Services";
import { usePagination } from "../../hooks/usePagination";

const LazyImage = React.lazy(() =>
  import("cloudinary-react").then((module) => ({ default: module.Image }))
);

const Shop = () => {
  const { addToCart } = useCart();
  const { shopID } = useParams();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const { activePage, nextPage, previousPage, totalPages, totalItems, items } =
    usePagination(shopImages, 1, 16);

  // Determine the range of page numbers to display
  let startPage = Math.max(activePage - 1, 1);
  let endPage = Math.min(startPage + 2, totalPages);

  if (endPage - startPage < 2) {
    startPage = Math.max(endPage - 2, 1);
  }

  const handleAddToCart = (product) => {
    const productToAdd = {
      id: product.publicId,
      title: product.title,
      amount: product.amount,
      quantity: 1,
      size: "Default", // Default size or implement size selection if needed
      color: "Default", // Default color or implement color selection if needed
    };
    console.log("Adding to cart:", productToAdd); // Debug log
    addToCart(productToAdd);
    openNotification("topRight", product.title);
  };

  const openNotification = (placement, productTitle) => {
    api.info({
      message: `Product Added to Cart`,
      description: `${productTitle} has been added to your cart.`,
      placement,
    });
  };

  return (
    <>
      <Container>
        {contextHolder}
        <div className="flex flex-col justify-center items-center w-full py-10 h-fit">
          <h1 className="text-center text-violet-500">Shop</h1>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 mt-5 md:mt-10">
            {items.map((product) => (
              <div
                className="bg-[#F4F5F7] h-fit w-[275px] relative group ms-5 md:ms-0"
                key={product.publicId}
              >
                <div className="relative">
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyImage
                      cloudName={cloudName}
                      publicId={product.publicId}
                      alt={product.publicId}
                      className="w-full h-[230px] object-cover"
                    />
                  </Suspense>
                  {product.tag === "new" && (
                    <div className="absolute top-5 right-5 rounded-full bg-[#2EC1AC] text-white w-10 h-10 text-xs font-medium flex items-center justify-center">
                      New
                    </div>
                  )}
                  {product.tag === "-30%" && (
                    <div className="absolute top-5 right-5 rounded-full bg-[#E97171] text-white w-10 h-10 text-xs font-medium flex items-center justify-center">
                      -30%
                    </div>
                  )}
                  {product.tag === "-50%" && (
                    <div className="absolute top-5 right-5 rounded-full bg-[#E97171] text-white w-10 h-10 text-xs font-medium flex items-center justify-center">
                      -50%
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-[600] text-lg">{product.title}</h3>
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
          {/* Custom Pagination */}
          <div className="mt-24 flex justify-center items-center">
            <button
              className={`px-3 py-1 rounded-md mr-2 ${
                activePage <= 1
                  ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                  : "bg-secondary text-black"
              }`}
              onClick={previousPage}
              disabled={activePage <= 1}
            >
              Previous
            </button>
            {[...Array(endPage - startPage + 1).keys()].map((index) => (
              <button
                key={startPage + index}
                className={`px-3 py-1 text-white rounded-md ${
                  startPage + index === activePage
                    ? "bg-primary"
                    : "bg-secondary text-black"
                } mx-1`}
                onClick={() => goToPage(startPage + index)}
              >
                {startPage + index}
              </button>
            ))}
            <button
              className={`px-3 py-1 rounded-md ml-2 ${
                activePage >= totalPages
                  ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                  : "bg-secondary text-black"
              }`}
              onClick={nextPage}
              disabled={activePage >= totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </Container>
      <Services />
    </>
  );
};

export default Shop;
