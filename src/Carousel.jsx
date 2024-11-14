import React, { useEffect, useState } from "react";
import "./MyFlashCardPage/MyFlashCard.css";
import logo from "./assets/noimage.jpg";

const Carousel = ({ termArr, currentIndex, setCurrentIndex }) => {
  const [internalIndex, setInternalIndex] = useState(currentIndex);
  useEffect(() => {
    setInternalIndex(currentIndex);
  }, [currentIndex]);

  const prevSlide = () => {
    const newIndex =
      internalIndex === 0 ? termArr.length - 1 : internalIndex - 1;
    setInternalIndex(newIndex);
    setCurrentIndex(newIndex); // Update parent state
  };

  const nextSlide = () => {
    const newIndex =
      internalIndex === termArr.length - 1 ? 0 : internalIndex + 1;
    setInternalIndex(newIndex);
    setCurrentIndex(newIndex); // Update parent state
  };
  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      <div
        className="carousel flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {termArr?.map((data, index) => (
          <div
            className="carousel-item flex-none w-full  flex items-center justify-center"
            key={index}
          >
            <div>
              <img
                src={data.image ? data.image : logo}
                className="carousel-image px-5 py-10 object-left-top"
                alt="img"
              />
            </div>
            <div className="basis-1/2">
              <p className="pl-5 desctextcard">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slidenumber-section flex items-center justify-center ">
        <button
          onClick={prevSlide}
          className=" top-1/2 left-4 transform rounded-full p-2"
        >
          &#10094;
        </button>
        <p className="slidenumbers">
          {currentIndex + 1}/{termArr.length}
        </p>
        <button
          onClick={nextSlide}
          className=" top-1/2 right-4 transform rounded-full p-2"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
