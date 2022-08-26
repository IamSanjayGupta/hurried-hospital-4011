import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Highlight,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import logo from "../../assets/Icons/Logo.svg";
import { useNavigate, useParams } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import FooterNormal from "../../components/FooterNormal";
import { addUsers, checkTokenApi, removeTokenApi } from "../../utils/api";
import { ecrypt } from "../../utils/ecryptDecrypt";

const SetPasswordForm = () => {
  const { token } = useParams();
  const [email, setEmail] = useState("");
  const [tokenErr, setTokenErr] = useState(false);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isNotMached, setIsNotMatched] = useState(false);
  const [id, setID] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return setIsNotMatched(true);
    setIsNotMatched(false);
    let data = {
      account_type: "Job Seeker",
      name: null,
      email: email.toLowerCase(),
      password: ecrypt(password),
      contact: null,
      date: new Date().toLocaleString("en-GB", { timeZone: "Asia/Kolkata" }),
    };

    addUsers({ data })
      .then((res) => {
        removeTokenApi({ id }).then((res) => {
          navigate("/login");
        });
      })
      .catch((err) => console.error(err))
      .finally();
  };

  useEffect(() => {
    checkTokenApi({ token })
      .then((res) => {
        if (res.data.length) {
          setEmail(res.data[0].email);
          setID(res.data[0].id);
        } else {
          setTokenErr(true);
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      })
      .catch((err) => console.error(err))
      .finally();
  }, []);

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
          {tokenErr ? (
            <Alert status="error">
              <AlertIcon />
              <Box>
                <AlertTitle>Token Expired!</AlertTitle>
              </Box>
            </Alert>
          ) : (
            <Text>
              Email: <b> {email} </b>
            </Text>
          )}

          <div></div>
          <form onSubmit={handleForm}>
            <FormControl>
              <Text>
                <b>
                  Password <StarIcon w="2" mt={-3} color="red.500" />
                </b>
              </Text>
              <Input
                placeholder="Enter password"
                size="md"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                type={"password"}
                _focus={{
                  borderColor: "rgb(37, 87, 167)",
                  boxShadow: "rgb(37 87 167) 0px -3px 0px 0px inset",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl isInvalid={isNotMached}>
              <Text>
                <b>
                  Confirm Password <StarIcon w="2" mt={-3} color="red.500" />
                </b>
              </Text>
              <Input
                placeholder="Enter password again"
                size="md"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                type={"password"}
                _focus={{
                  borderColor: "rgb(37, 87, 167)",
                  boxShadow: "rgb(37 87 167) 0px -3px 0px 0px inset",
                }}
                onChange={(e) => setconfirmPassword(e.target.value)}
              />

              {isNotMached ? <FormErrorMessage>Password not matching.</FormErrorMessage> : null}
            </FormControl>
            <Button type="submit" colorScheme="facebook" fontWeight={"bold"} w="100%" my="5">
              Submit
            </Button>
          </form>
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
