import React from "react";
import { Cloudinary } from "cloudinary-core";
import { Image as CloudinaryImage } from "cloudinary-react";
import {
  GallaryImages,
  HomeImages,
  ProductImages,
  RangeImages,
  cloudName,
} from "../../cloudImages/Cloud";
import Button from "../../component/common/button/Button";
import Container from "../../component/container/Container";
import compareIcon from "/assets/icons/hover-icon/compare-logo.svg";
import heartIcon from "/assets/icons/hover-icon/Heart-logo.svg";
import shareIcon from "/assets/icons/hover-icon/share-logo.svg";
import ShowMore from "../../component/common/button/ShowMore";

// Create a Cloudinary instance
const cld = new Cloudinary({ cloud_name: cloudName });

const Home = () => {
  // Generate the URL for the background image
  const bgImageUrl = cld.url(HomeImages.heroImg, {
    fetch_format: "auto",
    quality: "auto",
  });

  return (
    <>
      {/* Hero Section  */}
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

            <Button
              backgroundColor="#b88e2f"
              textColor="white"
              padding="25px 72px"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </section>

      {/* Range Section  */}

      <Container>
        <section className="font-Poppins text-center">
          <div className="  pt-5 md:py-10">
            <h3 className=" text-[22px] md:text-[32px] font-[700] leading-[48px]">
              Browse The Range
            </h3>
            <p className="text-[#666666] md:text-[20px] md:leading-[30px] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="md:flex justify-center space-y-5 md:space-y-0 md:space-x-5 py-10">
            {RangeImages.map((image) => (
              <div
                key={image.publicId}
                className=" w-[282px] md:w-[382px] rounded-lg"
              >
                <CloudinaryImage
                  cloudName={cloudName}
                  publicId={image.publicId}
                  className="w-full rounded-lg"
                  alt={image.name}
                />
                <h3 className="font-[600] mt-5 text-[24px]">{image.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Range Section  */}

        {/* Product Section  */}
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
                <div className="relative ">
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

        {/* Product Section  */}
      </Container>

      {/* Gallary Section  */}

      <section className=" pb-40 md:flex flex-col items-center hidden ">
        <div className=" text-center">
          <p className="text-[#616161] md:text-[20px] md:leading-[30px] font-medium">
            Share your setup with
          </p>
          <h3 className=" text-[22px] md:text-[32px] font-[700] leading-[48px] text-[#3A3A3A]">
            #FuniroFurniture
          </h3>
        </div>

        <div className="flex space-x-2 relative">
          <div key={GallaryImages[0].id} className="w-[120px] h-[382px]">
            <CloudinaryImage
              cloudName={cloudName}
              publicId={GallaryImages[0].publicId}
              alt={`Gallery image ${GallaryImages[0].id}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            key={GallaryImages[1].id}
            className="w-[451px] h-[312px] mt-[70px]"
          >
            <CloudinaryImage
              cloudName={cloudName}
              publicId={GallaryImages[1].publicId}
              alt={`Gallery image ${GallaryImages[1].id}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            key={GallaryImages[2].id}
            className="w-[295px] h-[392px] mt-[200px]"
          >
            <CloudinaryImage
              cloudName={cloudName}
              publicId={GallaryImages[2].publicId}
              alt={`Gallery image ${GallaryImages[2].id}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            key={GallaryImages[3].id}
            className="w-[290px] h-[348px] mt-[120px]"
          >
            <CloudinaryImage
              cloudName={cloudName}
              publicId={GallaryImages[3].publicId}
              alt={`Gallery image ${GallaryImages[3].id}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div key={GallaryImages[4].id} className="w-[325px] h-[466px]">
            <CloudinaryImage
              cloudName={cloudName}
              publicId={GallaryImages[4].publicId}
              alt={`Gallery image ${GallaryImages[4].id}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            key={GallaryImages[5].id}
            className="w-[200px] h-[323px] absolute top-[400px]"
          >
            <CloudinaryImage
              cloudName={cloudName}
              publicId={GallaryImages[5].publicId}
              alt={`Gallery image ${GallaryImages[5].id}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            key={GallaryImages[6].id}
            className="w-[354px] h-[242px] absolute top-[400px] left-[217px] "
          >
            <CloudinaryImage
              cloudName={cloudName}
              publicId={GallaryImages[6].publicId}
              alt={`Gallery image ${GallaryImages[6].id}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            key={GallaryImages[7].id}
            className="w-[178px] h-[242px] absolute top-[480px] left-[885px] "
          >
            <CloudinaryImage
              cloudName={cloudName}
              publicId={GallaryImages[7].publicId}
              alt={`Gallery image ${GallaryImages[7].id}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            key={GallaryImages[8].id}
            className="w-[258px] h-[196px]  absolute top-[480px] left-[1080px]"
          >
            <CloudinaryImage
              cloudName={cloudName}
              publicId={GallaryImages[8].publicId}
              alt={`Gallery image ${GallaryImages[8].id}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* Gallary Section  */}
    </>
  );
};

export default Home;
