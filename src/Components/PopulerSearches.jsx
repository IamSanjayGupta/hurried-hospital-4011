import { SearchIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setWhat } from "../context/AppAction";
import { AppContext } from "../context/AppContext";

let tags = [
  "Java Developer",
  "Work From Home",
  "Driver",
  "HR Fresher",
  "Software Testing",
  "Sales Executive",
  "Business Analyst",
  "Receptionist",
  "Data Analyst",
  "Seo Executive",
];
const PopulerSearches = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <Container maxW="container.lg" my={5}>
      <VStack>
        <Heading fontSize={20}>Popupler Searches</Heading>
        <Flex flexWrap={"wrap"} justifyContent="center" gap={4} p={5}>
          {tags.map((tag) => {
            return (
              <Button
                key={tag}
                leftIcon={<SearchIcon />}
                colorScheme="gray"
                fontSize={"0.9rem"}
                fontWeight={400}
                _focus={{
                  boxShadow: "0 0 0 2px #fff, 0 0 0 4px #085ff7",
                }}
                onClick={() => {
                  dispatch(setWhat(tag));
                  navigate("/jobs");
                }}
              >
                {tag}
              </Button>
            );
          })}
        </Flex>
      </VStack>
    </Container>
  );
};

export default PopulerSearches;
