import React, { useState, useEffect, Suspense, useMemo } from "react";
import { cloudName, shopCatalogue } from "../../cloudImages/Cloud";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "../../component/container/Container";
import { useCart } from "../../hooks/cart-context";
import TabData from "../../component/[shopID]/tabData";
import RelatedProduct from "../../component/[shopID]/content/related-product";
import { RiArrowRightSLine } from "react-icons/ri";

const PTags = ({ tag, value }) => {
  return (
    <div className="text-tertiary text-md flex gap-2">
      <p className=" text-md w-20  ">{tag} </p> <span>:</span>
      <span>{value}</span>
    </div>
  );
};

const ShopID = () => {
  const { shopID } = useParams();
  const { addToCart } = useCart();
  const [item, setItem] = useState(null);
  const [rating, setRating] = useState(0);
  const [selectedSize, setSelectedSize] = useState("XL");
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");
  const [foundItem, setFoundItem] = useState();

  useEffect(() => {
    let foundItem = null;
    let foundCategory = "";

    for (const categoryObj of shopCatalogue) {
      foundItem = categoryObj.item.find(
        (product) => product.publicId === shopID
      );
      setFoundItem(categoryObj);
      if (foundItem) {
        foundCategory = categoryObj.category;
        break;
      }
    }

    if (foundItem) {
      setItem(foundItem);
      setCategory(foundCategory);
      setRating(foundItem.rate);
    } else {
      setItem(null);
      setCategory("");
      setRating(0);
    }
  }, [shopID]);

  const LazyImage = useMemo(
    () =>
      React.lazy(() =>
        import("cloudinary-react").then((module) => ({ default: module.Image }))
      ),
    []
  );



  const sits = [
    "xc0ggofmi3qrn6zlfivr",
    "inqvuemmlmzenxzvhw0c",
    "ddonfbzwowcltx4xuy0v",
    "fwlusgufpsyupaqplloh",
  ].includes(shopID)
    ? [
        shopID,
        ...[
          "xc0ggofmi3qrn6zlfivr",
          "inqvuemmlmzenxzvhw0c",
          "ddonfbzwowcltx4xuy0v",
          "fwlusgufpsyupaqplloh",
        ].filter((id) => id !== shopID),
      ]
    : [
        shopID,
        "xc0ggofmi3qrn6zlfivr",
        "inqvuemmlmzenxzvhw0c",
        "ddonfbzwowcltx4xuy0v",
      ];

  const handleColorClick = (index) => {
    setSelectedColor(index);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`cursor-pointer ${
            i <= rating ? "text-yellow-500" : "text-gray-400"
          }`}
          onClick={() => handleRatingClick(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  const renderColorButtons = () => {
    const colors = ["", "#816DFA", "#000000", "#B88E2F"];

    return (
      <div className="my-2 mt-3">
        <p className="text-tertiary text-sm">Color</p>
        <div className="flex gap-3 mt-3">
          {sits.map((sit, index) => (
            <div
              key={index}
              className={`w-8 ${
                index == 0 && "hidden"
              } h-8 rounded-full cursor-pointer ${
                selectedColor === index
                  ? "border-4 border-gray-300"
                  : "border-transparent"
              }`}
              style={{ backgroundColor: colors[index] }} // Ensure correct color mapping
              onClick={() => handleColorClick(index)}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  const getCurrentPublicId = () => {
    return selectedColor !== null ? sits[selectedColor] : shopID;
  };

  const getScaleClass = () => {
    switch (selectedSize) {
      case "L":
        return "scale-100";
      case "XL":
        return "scale-150";
      case "XS":
        return "scale-75";
      default:
        return "scale-100";
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: item.publicId,
      title: item.title,
      amount: item.amount,
      quantity,
      size: selectedSize,
      color: selectedColor !== null ? sits[selectedColor] : "default color",
    };
    addToCart(productToAdd);
  };



  return (
    <section className="py-10">
      <div className="mt-10">
        <div className="bg-secondary h-12 w-full flex items-center">
          <Container>
            <nav className="flex items-center text-tertiary text-sm">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">
                <RiArrowRightSLine />
              </span>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
              <span className="mx-2">
                {" "}
                <RiArrowRightSLine />
              </span>
              <span className="mr-2">|</span>
              <span className="font-bold text-black">
                {item ? item.title : "Item not found"}
              </span>
            </nav>
          </Container>
        </div>
        {item && (
          <div className="h-fit mt-6 w-full flex gap-2 lg:gap-6  border-b screen-max-width  px-2 md:px-0">
            <div className="w-fit flex flex-col items-start">
              <div className="flex flex-col gap-4">
                {sits.map((sit, index) => (
                  <div
                    key={index}
                    className={`bg-secondary w-16 h-16 rounded-md flex items-center justify-center cursor-pointer ${
                      selectedColor === index
                        ? "border-4 border-gray-300"
                        : "border-transparent"
                    }`}
                    onClick={() => handleColorClick(index)}
                  >
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyImage
                        cloudName={cloudName}
                        publicId={sit}
                        alt={item.title}
                        className="w-1/2 h-1/2"
                      />
                    </Suspense>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex font-poppins flex-col lg:flex-row md:items-start  items-center  md:px-4">
              <div className="relative sm:max-h-[400px] w-full md:w-[445px] md:max-h-[600px] md:min-h-[200px] lg:w-[410px] lg:h-[430px]  rounded-md flex items-center justify-center bg-secondary overflow-hidden">
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyImage
                    cloudName={cloudName}
                    publicId={getCurrentPublicId()}
                    alt={shopID}
                    className={`h-72 w-full ${getScaleClass()} transition-transform duration-300`}
                  />
                </Suspense>
              </div>
              <div className="flex-1 p-4 lg:ml-16">
                <p className="text-2xl font-semibold font-poppins">
                  {item.title}
                </p>
                <p className="text-lg text-tertiary">Rs. {item.amount}</p>
                <p>Category: {category}</p> {/* Display the category */}
                <div className="mt-2 flex items-center">
                  {renderStars()}
                  <span className="mx-2 text-tertiary">|</span>
                  <span className="ml-2 text-tertiary text-sm">
                    {rating} Customer Review
                  </span>
                </div>
                <p className="mt-4">
                  {item.desc}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur magnam illum minus animi, corrupti veritatis iste
                  minima rerum, facilis cumque non dolorum enim dolor incidunt
                  unde quis numquam et eos.
                </p>
                <div className="my-2 mt-6">
                  <p className="text-tertiary text-sm">Size</p>
                  <div className="flex mt-3">
                    <SizeButton
                      size="L"
                      selected={selectedSize === "L"}
                      onSelect={handleSizeSelect}
                    />
                    <SizeButton
                      size="XL"
                      selected={selectedSize === "XL"}
                      onSelect={handleSizeSelect}
                    />
                    <SizeButton
                      size="XS"
                      selected={selectedSize === "XS"}
                      onSelect={handleSizeSelect}
                    />
                  </div>
                </div>
                {renderColorButtons()}
                <div className="mt-6 flex items-center">
                  <button className="border border-black text-black  rounded-lg py-2 px-2">
                    <span onClick={handleDecrement}>-</span>
                    <span className="mx-2">{quantity}</span>
                    <span onClick={handleIncrement}>+</span>
                  </button>
                  <button
                    className="border border-black text-dark ml-4 md:px-6 md:text-sm px-2 py-2 text-xs rounded-lg hover:bg-black hover:text-white  transition-all duration-300"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="border border-black text-dark text-xs md:text-sm ml-4 px-2 md:px-6 py-2 rounded-lg hover:bg-black hover:text-white  transition-all duration-300"
                  >
                    + Compare
                  </button>
                </div>
                <div className="mt-6 border-t py-4">
                  <PTags tag="SKU" value={item ? item.sku : ""} />
                  <PTags tag="Category" value={category} />
                  <PTags tag="Tags" value={foundItem.tags} />
                  <div className="text-tertiary text-md flex gap-2">
                    <p className=" text-md w-20  ">Share </p> <span>:</span>
                    <span>{/* icons */}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <TabData />
        <RelatedProduct />
      </div>
    </section>
  );
};

const SizeButton = ({ size, selected, onSelect }) => {
  return (
    <button
      className={`mr-2 border rounded-md  text-sm w-8 h-8  ${
        selected ? "bg-primary text-white" : "bg-gray-200 text-black"
      } hover:bg-primary hover:text-white`}
      onClick={() => onSelect(size)}
    >
      {size}
    </button>
  );
};

export default ShopID;
