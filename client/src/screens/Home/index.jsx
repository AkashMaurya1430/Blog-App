import TopBar from "@/components/TopBar";
import { setActivePage } from "@/slices/appslice/appslice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActivePage("Home"));
  }, []);
  return (
    <div className="HomePage">
      <TopBar />
    </div>
  );
};

export default Home;
