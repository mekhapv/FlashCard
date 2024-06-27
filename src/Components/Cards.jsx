import { useDispatch } from "react-redux";
import { setShowDetailsPage } from "../InfoSlice";
import { HiArrowNarrowRight } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
// import logo from "./profile.jpg"
import logo from "./pic.jpeg"


export default function Cards({ group }) {
  const dispatch = useDispatch();
  const handleViewCards = (e) => {
    dispatch(setShowDetailsPage(group));
  };
  return (
    <div
      className="relative max-w-sm rounded overflow-hidden shadow-lg bg-white"
      style={{ width: "350px", height: "300px" }}
    >
      <div className="flex justify-center mt-4   float-left ">
        <img

          src={group.image ? group.image : logo}
          class="w-20 h-20 rounded-full object-cover" style={{ marginLeft: "10px" }}
          alt=""
        />
      </div>
      <div className="px-6 py-4 " style={{ marginLeft: "90px" }}>
        <div className="font-bold text-xl mb-2 ">{group.name}</div>
        <div className="text-gray-500 mt-2">{group.term.length} cards</div>
      </div>

      <div className="text-gray-700 mt-1 text-center px-4 ">
        <p
          className="desctext"
          style={{
            paddingTop: "40px",
          }}
        >
          {group.desc}
        </p>
      </div>
      <div className="absolute bottom-20  w-full px-6 pt-4 pb-2 flex justify-center ">
        <button
          onClick={(e) => handleViewCards(e)}
          class=" bg-transparent text-red-700 font-semibold  py-2 px-4  flex justify-center"
          style={{
            position: "absolute",
            marginRight: "200px",
          }}
        >
          <span className="flex items-center">
            View Cards <HiArrowNarrowRight className="ml-2" />
          </span>
        </button>
      </div>

      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
}
