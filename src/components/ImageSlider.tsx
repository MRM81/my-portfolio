import { useState } from "react";

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "the-cheetah.png",
    "ivy-mae.png",
    "vita-fun.png",
  ];

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-slider flex-center-row">
      <button className="previous" onClick={goToPrevious}>Previous</button>
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      <button className="next" onClick={goToNext}>Next</button>
    </div>
  );
};

export default ImageSlider;
