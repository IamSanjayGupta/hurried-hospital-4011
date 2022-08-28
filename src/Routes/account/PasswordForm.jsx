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
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import logo from "../../assets/Icons/Logo.svg";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import FooterNormal from "../../components/FooterNormal";
import { checkEmailApi, checkEmailPassApi } from "../../utils/api";
import { decrypt } from "../../utils/ecryptDecrypt";
import { AppContext } from "../../context/AppContext";
import { setAuth, setEmail, setLoading } from "../../context/AppAction";

const PasswordForm = () => {
  const [accountErr, setAccountErr] = useState(false);
  const [password, setPassword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const email = searchParams.get("email") || null;
  if (!email) return <Navigate to={"/login"} />;

  if (accountErr) setTimeout(() => setAccountErr(false), 4000);

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    checkEmailApi({ email: email.toLowerCase() })
      .then((res) => {
        if (decrypt(res.data[0].password) === password) {
          dispatch(setAuth(true));
          dispatch(setEmail(email));
          navigate("/");
        } else {
          setPassword("");
          setAccountErr(true);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => dispatch(setLoading(false)));
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
          <Heading fontSize={22}>Welcome Back</Heading>
          <Text>
            Signing in as <b>{email} </b>
            <Link to="/singup" style={{ color: "blue" }}>
              (not you?)
            </Link>
          </Text>
          <div></div>

          {accountErr ? (
            <Alert status="error">
              <AlertIcon />
              <Box>
                <AlertTitle>Wrong Email ID or Password!</AlertTitle>
              </Box>
            </Alert>
          ) : null}

          <form onSubmit={handleForm}>
            <Text>
              <b>
                Password <StarIcon w="2" mt={-3} color="red.500" />
              </b>
            </Text>
            <Input
              size="md"
              placeholder="Enter password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              type={"password"}
              _focus={{
                borderColor: "rgb(37, 87, 167)",
                boxShadow: "rgb(37 87 167) 0px -3px 0px 0px inset",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Text fontSize={"sm"} my="2">
              <Highlight
                query={["Terms", "Cookie", "Privacy"]}
                styles={{ color: "blue", cursor: "pointer" }}
              >
                By signing in to your account, you agree to Indeed's Terms, Cookie and Privacy
                policies.
              </Highlight>
            </Text>
            <Button
              w="100%"
              my="5"
              type="submit"
              colorScheme="facebook"
              fontWeight={"bold"}
              isLoading={state.isLoading ? "YES" : ""}
              loadingText="Signing In..."
            >
              Sign In
            </Button>
          </form>
          <Button colorScheme="facebook" fontWeight={"bold"} variant={"ghost"}>
            Forget Password?
          </Button>
        </VStack>
      </Container>
      <FooterNormal />
    </>
  );
};

export default PasswordForm;
