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
        {group && group.length > 0 ? (
          cardsToShow.map((x, i) => <Cards index={i} group={x} />)
        ) : (
            <p>No cards available</p>
          )}
      </div>
      {group && group.length > 6 && (
        <div>
          <button
            onClick={handleSeeAll}
            className="show text-red-700 font-bold px-4 rounded "

          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </>
  );
}

