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
import React, { useState } from "react";

const SearchInput = () => {
  const [what, setWhat] = useState("");
  return (
    <Container maxW={"container.lg"}>
      <Flex my={10} justifyContent={"center"} gap={5} flexDirection={{ base: "column", md: "row" }}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" fontWeight={"700"} children="What" width={"15%"} />
          <Input
            placeholder="Job title, keywords or company"
            pl="75px"
            type={"search"}
            onChange={(e) => setWhat(e.target.value)}
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
            onChange={(e) => setWhat(e.target.value)}
          />
          <InputRightElement children={<IoLocationOutline color="gray.500" />} zIndex={-1} />
        </InputGroup>
        <Button
          colorScheme="blue"
          variant="solid"
          px={10}
          _focus={{
            boxShadow: "0 0 0 2px #fff, 0 0 0 4px #085ff7",
          }}
        >
          Find Jobs
        </Button>
      </Flex>
    </Container>
  );
};

export default SearchInput;
