import { default as React, useState } from "react";
import { HiOutlinePrinter } from "react-icons/hi";
import { IoDownloadOutline } from "react-icons/io5";
import { VscArrowLeft } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../Carousel";
import { hideDetailsPage } from "../InfoSlice";
import SharePopUp from "../SharePopUp/SharePopUp";
import "./index.css";

const DetailPage = () => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { showDetailsPage } = useSelector((state) => state.infoReducer);

  const handleBackClick = () => {
    dispatch(hideDetailsPage()); // dispatch the action creator
  };

  const handleTermClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      <div key={showDetailsPage.id}>
        {/* 1st line */}

        <div>
          <span className="flex">
            <button
              className="bottom-1.5 position: relative"
              onClick={handleBackClick}
            >
              <VscArrowLeft />
            </button>

            <div className="detailpage-name font-bold mb-4">
              {showDetailsPage.name}
            </div>
          </span>
        </div>
        {/* 2nd line */}
        <p className="detailpage-desc text-gray-700 mb-4 ">
          {showDetailsPage.desc}
        </p>
        <div>
          {/* Flashcard Content */}

          <div className="flex space-x-6 flex flex-row">
            {/* Sidebar */}
            <div className=" bg-gray-50 p-4 rounded-lg shadow-inner basis-1/4">
              <h3 className="text-gray-500 font-semibold mb-4">Flashcards</h3>
              <hr className="h-px my-4  border-0 dark:bg-gray-700"></hr>

              <ul className="space-y-2">
                {showDetailsPage.term?.map((t, index) => (
                  <li key={t.id}>
                    <button
                      // changing the colour of selected text
                      className={`${
                        currentIndex === index
                          ? "border-2 border-red-500 text-red-500" // styles for selected term
                          : "text-gray-700" // Default color
                      } p-2 w-full text-left rounded-md hover:bg-gray-100 focus:outline-none`}
                      onClick={() => handleTermClick(index)} // Set index on click
                    >
                      {t.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* carousel */}
            <div className="carouselsection bg-gray-50 rounded-lg shadow-inner basis-1/2">
              <Carousel
                termArr={showDetailsPage.term}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            </div>
            {/* share */}

            <div className="sharebutton items-center basis-1/4 ">
              <SharePopUp />
              <button className="downloadbutton text-black py-2 px-4 rounded shadow">
                <IoDownloadOutline />

                <span className="text"> Download</span>
              </button>
              <button className="printbutton text-whiteblack py-2 px-4 rounded shadow">
                <HiOutlinePrinter />

                <span className="text"> Print</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
