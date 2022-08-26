import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const JobCards = ({ shortdesc = "jo" }) => {
  return (
    <Box
      w="100%"
      p="3"
      rounded="md"
      boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.82) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      }}
      _active={{
        boxShadow: "0 0 0 2px #fff, 0 0 0 4px #085ff7",
      }}
      boxSizing="border-box"
      cursor={"pointer"}
    >
      <Heading as="h2" size="sm" color={"blackAlpha.800"}>
        ReactJS Developer
      </Heading>
      <Text>Company Name</Text>
      <Text>Job Location</Text>
      <Text maxH={"150px"} overflow="hidden" p={2}>
        Build efficient, testable, and reusable PHP modules and plugins Integration of user-facing
        elements developed by back-end developers Solve complex performance problems and
        architectural challenges Ensure to resolve identified issues related to PHP development to
        different customers varying from senior managers to varied technical personnel. Maintain and
        manage clear plus complete documentation. Write all clean object-oriented PHP as well as
        efficient SQL.
        {/* <div dangerouslySetInnerHTML={{ __html: shortdesc }} /> */}
      </Text>
    </Box>
  );
};

export default JobCards;
