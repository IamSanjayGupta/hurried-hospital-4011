import {
  Button,
  Container,
  FormControl,
  Heading,
  Highlight,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/Icons/Logo.svg";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { sendEmail } from "../../utils/backendmailer";
import FooterNormal from "../../components/FooterNormal";
const SetPasswordForm = ({ email = "Sanjay.g.258@gmail.com" }) => {
  // sendEmail({ to: email, subject: "HELLL", body: "JJJJJJJ" });
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
          <Heading fontSize={22}>Set Your Password</Heading>
          <Text>
            Email: <b> {email} </b>
          </Text>
          <div></div>
          <FormControl>
            <Text>
              <b>
                Password <StarIcon w="2" mt={-3} color="red.500" />
              </b>
            </Text>
            <Input
              placeholder="Enter password"
              size="md"
              type={"password"}
              _focus={{
                borderColor: "rgb(37, 87, 167)",
                boxShadow: "rgb(37 87 167) 0px -3px 0px 0px inset",
              }}
            />
          </FormControl>
          <FormControl>
            <Text>
              <b>
                Confirm Password <StarIcon w="2" mt={-3} color="red.500" />
              </b>
            </Text>
            <Input
              placeholder="Enter password again"
              size="md"
              type={"password"}
              _focus={{
                borderColor: "rgb(37, 87, 167)",
                boxShadow: "rgb(37 87 167) 0px -3px 0px 0px inset",
              }}
            />
          </FormControl>

          <Button colorScheme="facebook" fontWeight={"bold"}>
            Submit
          </Button>
          <Text fontSize={"sm"}>
            <Highlight
              query={["Terms", "Cookie", "Privacy"]}
              styles={{ color: "blue", cursor: "pointer" }}
            >
              By signing in to your account, you agree to Indeed's Terms, Cookie and Privacy
              policies.
            </Highlight>
          </Text>
        </VStack>
      </Container>
      <FooterNormal />
    </>
  );
};

export default SetPasswordForm;
