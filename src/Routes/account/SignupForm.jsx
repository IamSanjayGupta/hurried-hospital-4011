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
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/Icons/Logo.svg";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import FooterNormal from "../../components/FooterNormal";
import { sendMail } from "../../utils/mailer";
import { VarificationTemplate } from "../../utils/email_Templates/VarificationTemplate";
import { addTokenApi, checkEmailApi } from "../../utils/api";
import { setLoading } from "../../context/AppAction";
import { AppContext } from "../../context/AppContext";

const SignupForm = () => {
  const [isMailSent, setIsMailSent] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get("email") || null;
  if (!email) return <Navigate to={"/login"} />;

  const handleSendClick = () => {
    const token = Date.now() + email.length;
    const emailData = {
      body: VarificationTemplate({
        link: `${process.env.REACT_APP_BASE_URL}/setPassword/${token}`,
        to: email,
      }),
      to: email,
    };
    dispatch(setLoading(true));
    addTokenApi({ data: { email: email.toLowerCase(), token } })
      .then((res) => {
        sendVarificationEmail({ emailData });
      })
      .catch((err) => console.error(err))
      .finally();
  };

  const sendVarificationEmail = ({ emailData }) => {
    sendMail({ template: "email_varification", data: emailData })
      .then((res) => {
        setIsMailSent(true);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => dispatch(setLoading(false)));
  };

  useEffect(() => {
    checkEmailApi({ email: email.toLowerCase() })
      .then((res) => {
        if (res.data.length) {
          navigate("/login");
        }
      })
      .catch((err) => console.error(err))
      .finally();
  }, []);

  return (
    <>
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
            <Link to="/login" style={{ color: "blue" }}>
              (not you?)
            </Link>
          </Text>

          {isMailSent ? (
            <Alert status="success">
              <AlertIcon />
              <Box>
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  We have sent you an email for email address varification.
                </AlertDescription>
              </Box>
            </Alert>
          ) : null}

          <Button
            colorScheme="facebook"
            fontWeight={"bold"}
            onClick={handleSendClick}
            disabled={isMailSent}
            isLoading={state.isLoading ? "YES" : ""}
            loadingText="Sending Email.."
          >
            Create an Account
          </Button>
          <Link to="/login" style={{ color: "blue" }}>
            Return to login page
          </Link>
          <Text fontSize={"sm"}>
            <Highlight
              query={["Terms", "Cookie", "Privacy policy"]}
              styles={{ color: "blue", cursor: "pointer" }}
            >
              We only use your information as described in our privacy policy. Google may ask for
              your permission to share details with Indeed like your name, profile picture, public
              profile information, and email address.
            </Highlight>
          </Text>
        </VStack>
      </Container>
      <FooterNormal />
    </>
  );
};

export default SignupForm;
