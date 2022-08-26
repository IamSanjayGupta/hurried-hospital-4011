import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchInput from "../components/SearchInput";
import FooterNormal from "../components/FooterNormal";
import FilterButton from "../components/FilterButton";
import { Container } from "@chakra-ui/react";
import { getJobsApi } from "../utils/api";
import { capitalize } from "../utils/polyfills";
import { AppContext } from "../context/AppContext";
const Jobs = () => {
  const { state, dispatch } = useContext(AppContext);

  let data = {
    name: "Remote",
    childs: ["YES", "NO"],
  };

  useEffect(() => {
    if (!state.what) return;

    getJobsApi({ what: capitalize(state.what), where: capitalize(state.where) })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
      .finally();
  }, [state.what, state.where]);

  return (
    <>
      <Navbar />
      <SearchInput />
      <Container maxW={"container.lg"}>
        <FilterButton data={data} />
      </Container>
      <FooterNormal />
    </>
  );
};

export default Jobs;
