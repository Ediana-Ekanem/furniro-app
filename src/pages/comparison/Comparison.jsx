import React, { useState, Suspense } from "react";
import TopSection from "../../component/reusables/top-into-header";
import Services from "../../component/common/services/Services";
import { cloudName } from "../../cloudImages/Cloud";
import { MdKeyboardArrowDown } from "react-icons/md";
import { notification, Button } from "antd";
import ComparisonTable from "../../component/comparison/comparison-table";
import { useCart } from "../../hooks/cart-context";  // Ensure this hook is correctly imported

const publicId = [
  {
    publicId: "xc0ggofmi3qrn6zlfivr",
    title: "Asguard sofa",
    desc: "Small mug",
    discount: "",
    amount: "150.000",
    tag: "new",
    rate: 3,
    sku: "SS001",
    review: 224,
    check: 4.7,
  },
  {
    publicId: "inqvuemmlmzenxzvhw0c",
    title: "Outdoor Sofa Set",
    desc: "Small mug",
    discount: "",
    amount: "150.000",
    tag: "new",
    rate: 6,
    sku: "SS001",
    review: 556,
    check: 3.5,
  },
];

const Comparison = () => {
  const [rating, setRating] = useState(0); // Initialize rating state
  const { addToCart } = useCart(); // Import addToCart function from the cart context
  const [api, contextHolder] = notification.useNotification();

  const LazyImage = React.lazy(() =>
    import("cloudinary-react").then((module) => ({ default: module.Image }))
  );

  const renderStars = (rate) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`cursor-pointer ${
            i <= rate ? "text-yellow-500" : "text-gray-400"
          }`}
          onClick={() => handleRatingClick(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating); // Update rating state based on user selection
  };

  const handleColorClick = (index) => {
    // Implement logic for handling color click if needed
  };

  const handleAddToCart = (product) => {
    const productToAdd = {
      id: product.publicId,
      title: product.title,
      amount: product.amount,
      quantity: 1,
      size: "Default", // Default size or implement size selection if needed
      color: "Default", // Default color or implement color selection if needed
    };
    addToCart(productToAdd);
    openNotification('topRight', product.title);
  };

  const openNotification = (placement, productTitle) => {
    api.info({
      message: `Product Added to Cart`,
      description: `${productTitle} has been added to your cart.`,
      placement,
    });
  };

  return (
    <div className="pt-10">
      {contextHolder}
      <TopSection theme="Product Comparison" main="Home" route="Comparison" />
      <div className="screen-max-width flex flex-col md:flex-row mt-8">
        <div className="w-full md:w-[25%] pl-1">
          <h1 className="text-md lg:text-xl lg:w-48">
            Go to Product page for more Products
          </h1>
          <p className="underline text-sm text-tertiary">View More</p>
        </div>
        <div className="flex gap-6 flex-col lg:flex-row mt-4">
          <div className="flex gap-2 md:gap-6">
            {publicId.map((product, index) => (
              <div
                key={index}
                className="flex flex-1 px-0.5 flex-col items-start"
              >
                <div
                  className={`bg-secondary md:w-48 w-full h-28 rounded-md flex items-center justify-center cursor-pointer`}
                  onClick={() => handleColorClick(index)}
                >
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyImage
                      cloudName={cloudName}
                      publicId={product.publicId}
                      alt={`img-${product.publicId}`}
                      className="w-full h-full object-cover"
                    />
                  </Suspense>
                </div>
                <p className="text-md font-semibold font-poppins mt-4">
                  {product.title}
                </p>
                <p className="text-sm text-tertiary">Rs. {product.amount}</p>
                <div className="flex flex-col lg:flex-row lg:items-center">
                  <div className="flex items-center">
                    <span className="text-black text-sm">{product.check}</span>
                    {renderStars(product.rate)}
                    <span className="ml-1 text-tertiary hidden lg:block">|</span>
                  </div>
                  <span className="text-tertiary text-xs">
                    {product.review} Customer Review
                  </span>
                </div>
                <button
                  className="mt-4 px-2 py-1 rounded-md text-sm text-white bg-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="lg:mx-16 pl-1">
            <p className="text-md font-medium">Add a Product</p>
            <button className="bg-primary text-white font-medium px-3 lg:px-6 mt-4 py-1 rounded-md flex items-center gap-1 lg:gap-3 hover:scale-95 transition-transform duration-300">
              <MdKeyboardArrowDown className="text-2xl" />
              Choose a Product
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-12 border-t border-b screen-max-width">
        <div className="relative overflow-x-auto">
          <ComparisonTable handleAddToCart={handleAddToCart} productOne={publicId[0]} productTwo={publicId[1]}/>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Comparison;
