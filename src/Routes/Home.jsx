import React, { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PopulerSearches from "../components/PopulerSearches";
import SearchInput from "../components/SearchInput";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state);
  return (
    <div>
      <Navbar />
      <SearchInput />
      <PopulerSearches />
      <Footer />
    </div>
  );
};

export default Home;
