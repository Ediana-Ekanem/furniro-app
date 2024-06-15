import React from "react";
import { Image as CloudinaryImage } from "cloudinary-react";
import { GallaryImages, cloudName } from "../../cloudImages/Cloud";

const GallerySection = () => (
  <section className=" mt-10 pb-40 md:flex flex-col items-center hidden">
    <div className="text-center">
      <p className="text-[#616161] md:text-[20px] md:leading-[30px] font-medium">
        Share your setup with
      </p>
      <h3 className="text-[22px] md:text-[32px] font-[700] leading-[48px] text-[#3A3A3A]">
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
      <div key={GallaryImages[1].id} className="w-[451px] h-[312px] mt-[70px]">
        <CloudinaryImage
          cloudName={cloudName}
          publicId={GallaryImages[1].publicId}
          alt={`Gallery image ${GallaryImages[1].id}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div key={GallaryImages[2].id} className="w-[295px] h-[392px] mt-[200px]">
        <CloudinaryImage
          cloudName={cloudName}
          publicId={GallaryImages[2].publicId}
          alt={`Gallery image ${GallaryImages[2].id}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div key={GallaryImages[3].id} className="w-[290px] h-[348px] mt-[120px]">
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
        className="w-[360px] h-[242px] absolute top-[400px] left-[210px]"
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
        className="w-[178px] h-[242px] absolute top-[480px] left-[885px]"
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
        className="w-[258px] h-[196px] absolute top-[480px] left-[1075px]"
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
);

export default GallerySection;
