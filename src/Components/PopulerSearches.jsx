import { SearchIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";

let tags = [
  "Software Developer Fresher",
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
  return (
    <Container maxW="container.lg" my={5}>
      <VStack>
        <Heading fontSize={20}>Popupler Searches</Heading>
        <Flex flexWrap={"wrap"} justifyContent="center" gap={4} p={5}>
          {tags.map((tag) => {
            return (
              <Button
                leftIcon={<SearchIcon />}
                colorScheme="gray"
                fontSize={"0.9rem"}
                fontWeight={400}
                _focus={{
                  boxShadow: "0 0 1px 2px rgba(65,105,255)",
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
