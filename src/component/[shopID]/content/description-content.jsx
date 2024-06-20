import React, { Suspense, useMemo } from "react";
import { cloudName } from "../../../cloudImages/Cloud";

const DescriptionContent = () => {
  const LazyImage = useMemo(
    () =>
      React.lazy(() =>
        import("cloudinary-react").then((module) => ({ default: module.Image }))
      ),
    []
  );
  const descriptionImage = ["xc0ggofmi3qrn6zlfivr", "inqvuemmlmzenxzvhw0c"];

  return (
    <>
      <div className="flex justify-center items-center flex-col border-b px-4 lg:px-0 pb-16 overflow-hidden">
        <div className="font-poppins text-tertiary w-full lg:w-[900px] mt-8">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="mt-8">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="lg:px-6 w-full overflow-x-auto">
          <div className="flex h-[325px] mt-8 w-full gap-6">
            {descriptionImage.map((image, index) => (
              <Suspense key={index} fallback={<div>Loading...</div>}>
                <LazyImage
                  cloudName={cloudName}
                  publicId={image}
                  alt={image}
                  className="w-full h-auto object-cover rounded-md"
                />
              </Suspense>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionContent;
