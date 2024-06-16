import React from "react";
import LazyLoad from "react-lazyload";
import { Image as CloudinaryImage } from "cloudinary-react";
import { RangeImages, cloudName } from "../../cloudImages/Cloud";
import Container from "../../component/container/Container";

const RangeSection = React.memo(() => (
  <Container>
    <section className="font-Poppins text-center">
      <div className="pt-5 md:py-10">
        <h3 className="text-[25px] md:text-[32px] font-[700] leading-[48px]">
          Browse The Range
        </h3>
        <p className="text-[#666666] text-[15px] md:text-[20px] md:leading-[30px] font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="md:flex justify-center space-y-5 md:space-y-0 md:space-x-5 pt-5 md:py-10 ms-5 md:ms-0">
        {RangeImages.map((image) => (
          <div
            key={image.publicId}
            className="w-[282px] md:w-[382px] rounded-lg"
          >
            <LazyLoad height={200} offset={100}>
              <CloudinaryImage
                cloudName={cloudName}
                publicId={image.publicId}
                className="w-full rounded-lg"
                alt={image.name}
              />
            </LazyLoad>
            <h3 className="font-[600] mt-5 text-[18px] md:text-[24px]">
              {image.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  </Container>
));

export default RangeSection;
