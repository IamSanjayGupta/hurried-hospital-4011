import {
  Button,
  Container,
  FormControl,
  Heading,
  Highlight,
  Icon,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import logo from "../../assets/Icons/Logo.svg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { ImArrowRight2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
import FooterNormal from "../../components/FooterNormal";
import { checkEmailApi } from "../../utils/api";
import { AppContext } from "../../context/AppContext";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  let navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);

  if (state.isAuth) {
    navigate("/");
  }

  const handleForm = (e) => {
    e.preventDefault();
    checkEmailApi({ email: email.toLowerCase() })
      .then((res) => {
        if (res.data.length) {
          navigate({
            pathname: "/password",
            search: `?email=${email}`,
          });
        } else {
          navigate({
            pathname: "/signup",
            search: `?email=${email}`,
          });
        }
      })
      .catch((err) => console.error(err))
      .finally();
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
          <Heading fontSize={22}>Ready to take the next step?</Heading>
          <Text>Create an account or sign in.</Text>
          <div></div>
          <Text fontSize={"xs"}>
            <Highlight
              query={["Terms", "Cookie", "Privacy"]}
              styles={{ color: "blue", cursor: "pointer" }}
            >
              By creating an account or logging in, you understand and agree to Indeed's Terms. You
              also acknowledge our Cookie and Privacy policies. You will receive marketing messages
              from Indeed and may opt out at any time by following the unsubscribe link in our
              messages, or as detailed in our terms.
            </Highlight>
          </Text>
          <Button
            leftIcon={<FcGoogle />}
            fontWeight={"600"}
            variant={"outline"}
            justifyContent="space-between"
            rightIcon={<div />}
          >
            Continue with Google
          </Button>
          <Button
            leftIcon={<BsApple />}
            fontWeight={"600"}
            variant={"outline"}
            justifyContent="space-between"
            rightIcon={<div />}
          >
            Continue with Apple
          </Button>
          <Button
            leftIcon={<BsFacebook color="rgb(24 119 242)" />}
            fontWeight={"600"}
            variant={"outline"}
            justifyContent="space-between"
            rightIcon={<div />}
          >
            Continue with Facebook
          </Button>
          <form onSubmit={handleForm}>
            <FormControl>
              <Text>
                <b>
                  Email address <StarIcon w="2" mt={-3} color="red.500" />
                </b>
              </Text>
              <Input
                placeholder="Enter email address"
                size="md"
                type={"email"}
                _focus={{
                  borderColor: "rgb(37, 87, 167)",
                  boxShadow: "rgb(37 87 167) 0px -3px 0px 0px inset",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>

            <Button
              w="100%"
              my="5"
              type="submit"
              colorScheme="facebook"
              fontWeight={"bold"}
              rightIcon={<ImArrowRight2 />}
            >
              Continue
            </Button>
          </form>
        </VStack>
      </Container>
      <FooterNormal />
    </>
  );
};

export default LoginForm;
