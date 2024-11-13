import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { setGroupArr } from "./InfoSlice";

export default function AllContent() {
  const dispatch = useDispatch();
  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("cards"));
    console.log(cards);
    if (cards?.length) {
      dispatch(setGroupArr(cards));
    }
  });
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
