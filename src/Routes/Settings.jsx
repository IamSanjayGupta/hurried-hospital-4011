import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Settings = () => {
  return (
    <>
      <Navbar />
      <Container maxW={"100vw"}>
        <Flex>
          <VStack w={"25%"} bg={"gray.100"}>
            <Heading size={"2xl"} my="8">
              Settings
            </Heading>
            <Flex
              bg={"white"}
              w={"100%"}
              p="4"
              alignItems={"center"}
              gap="2"
              borderLeft={"6px solid #2557a7"}
              _hover={{ borderBottom: "2px solid #2557a7" }}
            >
              <Icon as={FaUserAlt} w={5} h={5} />
              <Box>
                <Heading size="md">Account Settings </Heading>
                <Text>Contact Information and Passowrd </Text>
              </Box>
            </Flex>
            <Flex
              w={"100%"}
              p="4"
              alignItems={"center"}
              gap="2"
              _hover={{ borderBottom: "2px solid #2557a7" }}
            >
              <Icon as={RiGitRepositoryPrivateFill} w={5} h={5} />
              <Box>
                <Heading size="md">Privacy Settings</Heading>
                <Text>Information about Indeed privacy settings </Text>
              </Box>
            </Flex>
          </VStack>
          <VStack w={"75%"} align={"flex-start"} p="10%">
            <Heading size={"2xl"}>Account settings</Heading>
            <Divider />
            <VStack w="100%" gap={5}>
              <HStack justifyContent={"space-between"} w="100%" my="2">
                <Box>
                  <Heading size="md">Account Type</Heading>
                  <Text>Job Seeker</Text>
                </Box>
                <Button size="md" colorScheme="blue" variant="outline">
                  Change Account Type
                </Button>
              </HStack>
              <Divider />
              <HStack justifyContent={"space-between"} w="100%" my="2">
                <Box>
                  <Heading size="md">Name</Heading>
                  <Text>Sanjay Gupta</Text>
                </Box>
                <Button size="md" colorScheme="blue" variant="outline">
                  Update Name
                </Button>
              </HStack>
              <Divider />
              <HStack justifyContent={"space-between"} w="100%" my="2">
                <Box>
                  <Heading size="md">Email</Heading>
                  <Text>sanjay.g.258@gmail.com</Text>
                </Box>
                <Button size="md" colorScheme="blue" variant="outline">
                  Change Email
                </Button>
              </HStack>
              <Divider />
              <HStack justifyContent={"space-between"} w="100%" my="2">
                <Box>
                  <Heading size="md">Password</Heading>
                  <Text>**********</Text>
                </Box>
                <Button size="md" colorScheme="blue" variant="outline">
                  Change Password
                </Button>
              </HStack>
              <Divider />
              <HStack justifyContent={"space-between"} w="100%" my="2">
                <Box>
                  <Heading size="md">Phone No</Heading>
                  <Text>8237202186</Text>
                </Box>
                <Button size="md" colorScheme="blue" variant="outline">
                  Update Mobile No
                </Button>
              </HStack>
              <Divider />
              <HStack justifyContent={"space-between"} w="100%" my="2">
                <Heading size="md">Sanjay.g.258@gmail.com</Heading>
                <Button size="md" colorScheme="blue" variant="outline">
                  Sign Out
                </Button>
              </HStack>
              <Divider />
              <HStack justifyContent={"space-between"} w="100%" my="2">
                <Button size="md" colorScheme="red" variant="outline">
                  Close my account
                </Button>
              </HStack>
              <Divider />
            </VStack>
          </VStack>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default Settings;
