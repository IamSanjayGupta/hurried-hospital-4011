import { Container, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const links = [
  "Career Explorer",
  "Career Advice",
  "Browse Jobs",
  "Browse Companies",
  "Salaries",
  "Indeed Events",
  "Work at Indeed",
  "Countries",
  "About",
];
const link2 = ["Accessibility at Indeed", "Privacy Center", "Cookies", "Privacy"];

const FooterNormal = () => {
  return (
    <Container maxW={"100vw"} my="5" borderTop="2px solid gainsboro" fontSize={"0.9rem"}>
      <Flex alignItems={"center"} m="3" maxW={"1400px"} flexWrap={"wrap"} gap={4}>
        {links.map((link) => {
          return <Link key={link}>{link}</Link>;
        })}
      </Flex>
      <Flex alignItems={"center"} m="3" maxW={"800px"} flexWrap={"wrap"} gap={4}>
        <Text>© 2021 Indeed</Text>
        {link2.map((link) => {
          return <Link key={link}>{link}</Link>;
        })}
      </Flex>
    </Container>
  );
};

export default FooterNormal;
