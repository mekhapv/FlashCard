import React, { useState } from "react";
import "./MyFlashCardPage/MyFlashCard.css";

const Carousel = ({ termArr }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? termArr.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === termArr.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden"

    >
      <div
        className="carousel flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {termArr.map((xy, index) => (
          <div className="carousel-item flex-none w-full  flex items-center justify-center ">
            <div>
              <img src={xy.image} className="px-5 py-10 object-left-top"
                style={{ height: "225px", width: "200px" }}
              />
            </div>
            <div className="basis-1/2">
              <p className="pl-5 desctextcard" >

                {xy.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-stretch "
        style={{ paddingTop: "40px", paddingLeft: "235px" }}>

        <button
          onClick={prevSlide}
          className=" top-1/2 left-4 transform rounded-full p-2"
        >
          &#10094;
        </button>
        <p style={{ marginLeft: "10px", marginRight: "10px", marginTop: "8px" }}>{currentIndex + 1}/{termArr.length}</p>
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
