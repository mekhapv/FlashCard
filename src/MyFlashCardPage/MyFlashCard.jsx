import "./MyFlashCard.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Components/Cards";

export default function MyFlashCards() {
  const dispatch = useDispatch();
  const { group } = useSelector((state) => state.infoReducer);
  const [showAll, setShowAll] = useState(false);

  const handleSeeAll = () => {
    setShowAll(!showAll);
  };

  const cardsToShow = showAll ? group : group?.slice(0, 6);
  return (
    <>
      <div className="grid gap-4 grid-cols-3 grid-rows-2">
        {cardsToShow.map((x) => (
          <Cards group={x} />
        ))}
      </div>
      <div>
        <button
          onClick={handleSeeAll}
          className="text-red-700  text-white font-bold  px-4 rounded "
          style={{ float: "inline-end", paddingTop: "30px" }}
        >
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>
    </>
  );
}
