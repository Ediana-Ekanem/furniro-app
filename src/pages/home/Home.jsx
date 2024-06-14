import React from "react";
import { Cloudinary } from "cloudinary-core";
import { Image as CloudinaryImage } from "cloudinary-react";
import {
  HomeImages,
  ProductImages,
  RangeImages,
  cloudName,
} from "../../cloudImages/Cloud";
import Button from "../../component/common/button/Button";
import Container from "../../component/container/Container";

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

            <Button text="Buy Now" />
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
        <section>
          <h3 className=" text-[22px] md:text-[40px] font-[700] leading-[48px] text-center">
            Our Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
            {ProductImages.map((product) => (
              <div className="bg-[#F4F5F7] h-[436px] w-[285px] ">
                <div key={product.publicId}>
                  <div className="relative">
                    <CloudinaryImage
                      cloudName={cloudName}
                      publicId={product.publicId}
                      alt={product.publicId}
                      className="w-full h-auto object-cover"
                    />

                    {product.tag === "new" && (
                      <div className="absolute top-5 right-5 rounded-full  bg-[#2EC1AC] text-white w-[48px] h-[48px] flex items-center justify-center">
                        New
                      </div>
                    )}
                    {product.tag === "-30%" && (
                      <div className="absolute top-5 right-5 rounded-full  bg-[#E97171] text-white w-[48px] h-[48px] flex items-center justify-center">
                        -30%
                      </div>
                    )}
                    {product.tag === "-50%" && (
                      <div className="absolute top-5 right-5 rounded-full  bg-[#E97171] text-white w-[48px] h-[48px] flex items-center justify-center">
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
                      <p className="font-[600]  text-lg">Rp{product.amount}</p>
                      {product.discout && (
                        <p className="line-through text-[#B0B0B0] text-[16px] leading-[24px]">
                          Rp{product.discout}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Section  */}
      </Container>
    </>
  );
};

export default Home;
