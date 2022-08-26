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
import { setWhat, setWhere } from "../context/AppAction";
import { AppContext } from "../context/AppContext";
let id = 0;
const SearchInput = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const debouncing = (e, func, delay) => {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      dispatch(func(e.target.value));
    }, delay);
  };
  return (
    <Container maxW={"container.lg"}>
      <form action="">
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
              onChange={(e) => debouncing(e, setWhat, 1000)}
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
              onChange={(e) => debouncing(e, setWhere, 1000)}
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
            onClick={() => navigate("/jobs")}
          >
            Find Jobs
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

export default SearchInput;
