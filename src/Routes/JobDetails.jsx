import React from "react";
import FooterNormal from "../components/FooterNormal";
import Navbar from "../components/Navbar";
import SingleJobDetails from "../components/SingleJobDetails";

const JobDetails = () => {
  return (
    <>
      <Navbar />
      <SingleJobDetails />
      <FooterNormal />
    </>
  );
};

export default JobDetails;
