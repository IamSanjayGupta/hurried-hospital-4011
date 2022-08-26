import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PopulerSearches from "../components/PopulerSearches";
import SearchInput from "../components/SearchInput";

const Home = () => {
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
