import { homePageGallery } from "@/utils/data";
import { useState, useEffect } from "react";

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const galleryId = setInterval(() => {
      if (currentImage === homePageGallery.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(galleryId);
  }, [currentImage]);

  return (
    <section className="container mx-auto flex max-w-[1330px] md:-mt-5">
      <img
        src={homePageGallery[currentImage]}
        alt=""
        className="h-[500px] w-full object-bottom object-cover"
      />
      {currentImage}
    </section>
  );
}
export default Hero;
