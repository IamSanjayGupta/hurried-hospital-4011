import { StarIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  Heading,
  Highlight,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Icons/Logo.svg";
import FooterNormal from "../../components/FooterNormal";
import { checkEmailApi } from "../../utils/api";

const ForgetPassword = () => {
  const [accountErr, setAccountErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailID, setEmailID] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    checkEmailApi({ email: emailID.toLowerCase() })
      .then((res) => {
        if (res.data.length) {
          alert("Feature not yet availble. Contact Admin");
        } else {
          setAccountErr(true);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Container my="5vh" centerContent>
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
          <Heading fontSize={22}>Password Reset</Heading>
          <Text>Enter valid email address to reset password.</Text>
          <div></div>
          {accountErr ? (
            <Alert status="error">
              <AlertIcon />
              <Box>
                <AlertTitle>
                  Email ID is not registered with us. <br />
                  <Link to="/login" style={{ color: "#4971c1" }}>
                    Create new account
                  </Link>
                </AlertTitle>
              </Box>
            </Alert>
          ) : null}

          <form onSubmit={handleForm}>
            <Text>
              <b>
                Email <StarIcon w="2" mt={-3} color="red.500" />
              </b>
            </Text>
            <Input
              size="md"
              placeholder="Enter Email"
              type="email"
              _focus={{
                borderColor: "rgb(37, 87, 167)",
                boxShadow: "rgb(37 87 167) 0px -3px 0px 0px inset",
              }}
              value={emailID}
              onChange={(e) => setEmailID(e.target.value)}
              required
            />
            <Button
              w="100%"
              my="5"
              type="submit"
              colorScheme="facebook"
              fontWeight={"bold"}
              isLoading={isLoading ? "YES" : ""}
              loadingText="Verifying Email..."
            >
              Reset Password
            </Button>
          </form>
          <Link to="/login">
            <Button colorScheme="facebook" fontWeight={"bold"} variant={"ghost"} w="100%">
              Go Back
            </Button>
          </Link>
        </VStack>
      </Container>
      <FooterNormal />
    </>
  );
};

export default ForgetPassword;
