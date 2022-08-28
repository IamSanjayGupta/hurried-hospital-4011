import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { setAuth, setEmail, setLoading } from "../context/AppAction";
import { AppContext } from "../context/AppContext";
import { checkEmailApi } from "../utils/api";

const Settings = () => {
  const { state, dispatch } = useContext(AppContext);
  const [data, setData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const signOut = () => {
    dispatch(setAuth(false));
    dispatch(setEmail(""));
  };

  const deleteAccount = () => [];

  useEffect(() => {
    dispatch(setLoading(true));
    checkEmailApi({ email: state.email.toLowerCase() })
      .then((res) => {
        // console.log(res.data[0]);
        setData(res.data[0]);
      })
      .catch((err) => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }, []);
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
                  <Text>{data.account_type}</Text>
                </Box>
                <Button size="md" colorScheme="blue" variant="outline">
                  Change Account Type
                </Button>
              </HStack>
              <Divider />
              <HStack justifyContent={"space-between"} w="100%" my="2">
                <Box>
                  <Heading size="md">Name</Heading>
                  <Text>{data.name ? data.name : "Not available"}</Text>
                </Box>
                <Button size="md" colorScheme="blue" variant="outline">
                  Update Name
                </Button>
              </HStack>
              <Divider />
              <HStack justifyContent={"space-between"} w="100%" my="2">
                <Box>
                  <Heading size="md">Email</Heading>
                  <Text>{data.email}</Text>
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
                  <Text>{data.contact ? data.contact : "Not availble"}</Text>
                </Box>
                <Button size="md" colorScheme="blue" variant="outline">
                  Update Mobile No
                </Button>
              </HStack>
              <Divider />
              <HStack justifyContent={"space-between"} w="100%" my="2">
                <Heading size="md">Sanjay.g.258@gmail.com</Heading>
                <Button size="md" colorScheme="blue" variant="outline" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </HStack>
              <Divider />
              <HStack justifyContent={"space-between"} w="100%" my="2">
                <Button size="md" colorScheme="red" variant="outline" onClick={onOpen}>
                  Close my account
                </Button>
              </HStack>
              <Divider />
            </VStack>
          </VStack>
        </Flex>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete account</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                When you close your account, your email address will no longer receive marketing
                emails from Indeed. You will, however, continue to receive communication from
                employers you have been in contact with prior to closing your account. After closing
                your account, if you apply for any jobs, you will receive communication from those
                employers as well. If you create a new account, your email preferences will be reset
                so that you receive all emails from Indeed.
              </Text>
              <HStack justifyContent={"space-evenly"}>
                <Button colorScheme={"red"} my="2" onClick={deleteAccount}>
                  Yes. Close my account
                </Button>
                <Button onClick={onClose} px="10" colorScheme={"blue"}>
                  No. Go back
                </Button>
              </HStack>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
      <Footer />
    </>
  );
};

export default Settings;
