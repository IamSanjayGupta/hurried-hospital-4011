import { CheckIcon, SearchIcon } from "@chakra-ui/icons";
import { IoLocationOutline } from "react-icons/io5";
import {
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useStatStyles,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addJob, setLoading, setSelectedJob, setWhat, setWhere } from "../context/AppAction";
import { AppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";
import { getJobsApi } from "../utils/api";
import { capitalize } from "../utils/polyfills";
let id = 0;
const SearchInput = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  // const debouncing = (e, func, delay) => {
  //   if (id) clearTimeout(id);
  //   id = setTimeout(() => {
  //     dispatch(func(e.target.value));
  //   }, delay);
  // };

  const handleForm = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      navigate("/jobs");
    } else {
      if (!state.what) return;
      dispatch(setLoading(true));
      getJobsApi({ what: capitalize(state.what), where: capitalize(state.where) })
        .then((res) => {
          dispatch(addJob(res.data));
          dispatch(setSelectedJob({ ...res.data[0] }));
        })
        .catch((err) => console.error(err))
        .finally(() => dispatch(setLoading(false)));
    }
  };

  return (
    <Container maxW={"container.lg"}>
      <form onSubmit={handleForm}>
        <Flex
          my={10}
          justifyContent={"center"}
          gap={5}
          flexDirection={{ base: "column", md: "row" }}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontWeight={"700"}
              children="What"
              width={"15%"}
            />
            <Input
              placeholder="Job title, keywords or company"
              pl="75px"
              type={"search"}
              onChange={(e) => dispatch(setWhat(e.target.value))}
              required
            />
            <InputRightElement children={<SearchIcon color="gray.500" />} zIndex={-1} />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontWeight={"700"}
              children="Where"
              width={"16%"}
            />
            <Input
              placeholder="City, State or pin code"
              pl="75px"
              type={"search"}
              onChange={(e) => dispatch(setWhere(e.target.value))}
              value={state.where}
            />
            <InputRightElement children={<IoLocationOutline color="gray.500" />} zIndex={-1} />
          </InputGroup>
          <Button
            type="submit"
            colorScheme="blue"
            variant="solid"
            px={10}
            _focus={{
              boxShadow: "0 0 0 2px #fff, 0 0 0 4px #085ff7",
            }}
            isLoading={state.isLoading ? "YES" : ""}
            loadingText="Finding Jobs"
          >
            Find Jobs
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

export default SearchInput;
