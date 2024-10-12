import React from "react";
import { VscArrowLeft } from "react-icons/vsc";
import { HiOutlinePrinter } from "react-icons/hi";
import { IoDownloadOutline } from "react-icons/io5";
import Carousel from "../Carousel";
import { useDispatch, useSelector } from "react-redux";
import SharePopUp from "../SharePopUp/SharePopUp";
import { hideDetailsPage } from "../InfoSlice";

const DetailPage = () => {
  const { showDetailsPage, cardsToShow } = useSelector(
    (state) => state.infoReducer
  );
  const dispatch = useDispatch();

  const handleBackClick = () => {
    dispatch(hideDetailsPage()); // dispatch the action creator
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

            <div className="font-bold mb-4" style={{ marginLeft: "15px" }}>
              {showDetailsPage.name}
            </div>
          </span>
        </div>
        {/* 2nd line */}
        <p className="text-gray-700 mb-4 " style={{ marginLeft: "30px" }}>
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
                {showDetailsPage.term?.map((t) => (
                  <li key={t.id}>{t.name}</li>
                ))}
              </ul>
            </div>

            {/* carousel */}
            <div
              className=" bg-gray-50 rounded-lg shadow-inner basis-1/2 "
              style={{
                height: "250px",
                paddingTop: "20px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "10px",
              }}
            >
              <Carousel termArr={showDetailsPage.term} />
            </div>
            {/* share */}

            <div
              className=" items-center basis-1/4 "
              style={{ display: "grid", paddingTop: "5px" }}
            >
              <SharePopUp />
              <button
                className=" text-black py-2 px-4 rounded shadow"
                style={{
                  backgroundColor: "white",
                  height: "40px",
                  display: "flex",
                }}
              >
                <IoDownloadOutline />

                <span style={{ marginLeft: "10px" }}> Download</span>
              </button>
              <button
                className=" text-whiblackte py-2 px-4 rounded shadow"
                style={{
                  backgroundColor: "white",
                  height: "40px",
                  display: "flex",
                }}
              >
                <HiOutlinePrinter />

                <span style={{ marginLeft: "10px" }}> Print</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
