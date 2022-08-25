import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  Heading,
  Highlight,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/Icons/Logo.svg";
import { Link } from "react-router-dom";

const SignupForm = ({ email = "Sanjay.g.258@gmail.com" }) => {
  return (
    <Container my="7vh" centerContent>
      <Image src={logo} height="10" width="80" my="30px" />
      <VStack
        bg={"white"}
        w={"100%"}
        py="8"
        px="5"
        rounded="md"
        align={"left"}
        boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}
      >
        <Heading fontSize={22}>Create your account</Heading>
        <Text fontSize={18}>Keep your account safe.</Text>
        <div></div>
        <Text>
          Continue as <b>{email} </b>
          <Link to="/singup" style={{ color: "blue" }}>
            (not you?)
          </Link>
        </Text>
        <Alert status="success">
          <AlertIcon />
          <Box>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              We have sent your an email for email address varification.
            </AlertDescription>
          </Box>
        </Alert>
        <Button colorScheme="facebook" fontWeight={"bold"}>
          Create an account
        </Button>
        <Link to="/singup" style={{ color: "blue" }}>
          Return to login page
        </Link>
        <Text fontSize={"sm"}>
          <Highlight
            query={["Terms", "Cookie", "Privacy policy"]}
            styles={{ color: "blue", cursor: "pointer" }}
          >
            We only use your information as described in our privacy policy. Google may ask for your
            permission to share details with Indeed like your name, profile picture, public profile
            information, and email address.
          </Highlight>
        </Text>
      </VStack>
    </Container>
  );
};

export default SignupForm;
