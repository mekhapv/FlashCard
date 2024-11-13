import React, { useEffect, useState } from "react";
import "./MyFlashCardPage/MyFlashCard.css";
import logo from "./noimage.jpg";

const Carousel = ({termArr,currentIndex}) => {
  // const [currentIndex, setCurrentIndex] = useState(0);
   const [internalIndex, setInternalIndex] = useState(currentIndex); 
  useEffect(() => {
    setInternalIndex(currentIndex);
  }, [currentIndex]);

  const prevSlide = () => {
    setInternalIndex((prevIndex) =>
      prevIndex === 0 ? termArr.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setInternalIndex((prevIndex) =>
      prevIndex === termArr.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      <div
        className="carousel flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {termArr?.map((data, index) => (
          <div className="carousel-item flex-none w-full  flex items-center justify-center"  key={index}>
            <div>
              <img
                src={data.image ? data.image : logo}
                className="px-5 py-10 object-left-top" alt="image"
                style={{ width: "auto", height: "225px" }}
              />
            </div>
            <div className="basis-1/2">
              <p className="pl-5 desctextcard" >

                {data.desc}
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
