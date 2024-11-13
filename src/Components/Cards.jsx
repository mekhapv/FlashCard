import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteCard, setShowDetailsPage } from "../InfoSlice";
import logo from "./../assets/pic.jpeg";
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
          className="cardimage w-20 h-20 rounded-full object-cover" 
          alt=""
        />
      </div>
      <div className="container px-6 py-4" >
        <span style={{ display: "flex" }}>
          <div className="font-bold text-xl mb-2 pl-2">{group.name}</div>

        </span>
        <div className="termlength text-gray-500"
        >{group.term.length} cards</div>
      </div>

      <div className="text-gray-700 mt-1 text-center px-4">
        <p className="desctext">
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
    </div>
  </>
  );
}
