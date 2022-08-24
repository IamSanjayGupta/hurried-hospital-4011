import {
  Center,
  Flex,
  VStack,
  Link,
  Text,
  Container,
  Image,
  Heading,
  Icon,
  color,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { BiMinus } from "react-icons/bi";
import { FaYoutube, FaFacebookSquare, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const iconArr = [FaYoutube, FaFacebookSquare, FaTwitter, FaInstagramSquare];
const icons = iconArr.map((ic) => {
  return <Icon key={ic} as={ic} w={9} h={9} cursor={"pointer"} _hover={{ color: "blue.200" }} />;
});
const Footer = () => {
  return (
    <Container maxW={"100vw"} bgColor={"blackAlpha.800"} color={"white"} py={10}>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        m={5}
        gap={7}
      >
        <Center w="25%">
          <Image
            w={"200px"}
            src={"https://www.pngkit.com/png/full/1009-10092379_indeed-logo-white-indeed-logo.png"}
          />
        </Center>
        <Box w={{ base: "100%", md: "50%" }}>
          <VStack>
            <Heading>Explorer Indeed</Heading>
            <Flex justifyContent={"space-evenly"} width={"100%"}>
              <VStack align="stretch">
                <Link>Career Explorer</Link>
                <Link>Career Advice</Link>
                <Link>Brouse Jobs</Link>
              </VStack>
              <VStack align="stretch">
                <Link>Browse Companies</Link>
                <Link>Salaries</Link>
                <Link>Indeed Events</Link>
              </VStack>
              <VStack align="stretch">
                <Link>Work at Indeed</Link>
                <Link>Countries</Link>
                <Link>About</Link>
              </VStack>
            </Flex>
          </VStack>
        </Box>
        <Center w="25%">
          <VStack>
            <Heading as={"h2"} size="xl">
              Follow Us
            </Heading>
            <Flex justifyContent={"space-between"} gap={5}>
              {icons}
            </Flex>
          </VStack>
        </Center>
      </Flex>
      <Flex alignItems={"center"} gap={1}>
        <Text>© 2021 Indeed</Text>
        <BiMinus />
        <Link>Accessibility at Indeed </Link>
        <BiMinus />
        <Link>Privacy Center</Link>
        <BiMinus />
        <Link>Cookies</Link>
        <BiMinus />
        <Link>Privacy</Link>
      </Flex>
    </Container>
  );
};

export default Footer;
