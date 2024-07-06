import { useDispatch } from "react-redux";
import { setShowDetailsPage, deleteCard } from "../InfoSlice";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import logo from "./pic.jpeg"
import "./Cards.css";


export default function Cards({ group, index }) {
  const dispatch = useDispatch();
  const handleViewCards = (e) => {
    dispatch(setShowDetailsPage(group));
  };
  const handleDeleteCard = () => {
    dispatch(deleteCard(index));
  }

  return (<>

    <div
      className="relative max-w-sm rounded overflow-hidden shadow-lg bg-white"
      style={{ height: "275px" }}
    > <button className="deleteBtn" onClick={handleDeleteCard}><MdOutlineCancel /></button>
      <div className="flex justify-center mt-4 float-left">
        <img
          src={group.image ? group.image : logo}
          className="w-20 h-20 rounded-full object-cover" style={{ marginLeft: "10px" }}
          alt=""
        />
      </div>
      <div className="container px-6 py-4" >
        <span style={{ display: "flex" }}>
          <div className="font-bold text-xl mb-2 pl-2">{group.name}</div>

        </span>
        <div className="text-gray-500"
          style={{ marginLeft: "75px" }}
        >{group.term.length} cards</div>
      </div>

      <div className="text-gray-700 mt-1 text-center px-4">
        <p
          className="desctext"
          style={{
            paddingTop: "40px",
          }}
        >
          {group.desc}
        </p>
      </div>
      <div className="viewCardsBtn bg-transparent text-red-700 font-semibold">
        <button
          onClick={handleViewCards}
        >
          <span className="flex items-center">
            View Cards <HiArrowNarrowRight className="ml-2" />
          </span>
        </button>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  </>
  );
}
