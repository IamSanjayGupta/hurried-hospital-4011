import { Box, Button, Heading, Text, useToast, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ApplicationTemplate } from "../utils/email_Templates/ApplicationTemplate";
import { sendMail } from "../utils/mailer";

const SingleJobDetails = () => {
  const [sendingEmail, setSendingEmail] = useState(false);
  const [applyDisable, setApplyDisble] = useState(false);
  const toast = useToast();

  const selectedJob = JSON.parse(localStorage.getItem("selectedJob"));
  const {
    id,
    job_title,
    company_name,
    category,
    city,
    is_remote,
    state,
    html_job_description,
    email,
  } = selectedJob;

  useEffect(() => {
    document.title = job_title;
  }, []);

  const handleApplyBtn = () => {
    if (!email) {
      toast({
        title: "Please login to apply any Job.",
        status: "error",
        duration: 2000,
        position: "top-right",
        isClosable: true,
      });
      return;
    }

    const emailTemplate = ApplicationTemplate(selectedJob);
    const emailData = {
      job_title: job_title,
      message: emailTemplate,
      to: email,
    };

    setSendingEmail(true);
    sendMail({ template: "email_application", data: emailData })
      .then((res) => {
        setApplyDisble(true);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setSendingEmail(false);
      });
  };

  return (
    <VStack
      w={"96%"}
      rounded="md"
      m="auto"
      my={5}
      height={"85vh"}
      overflowY="hidden"
      boxShadow="rgba(0, 0, 0, 0.82) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
    >
      <Box w={"100%"} position={"sticky"} top={1} boxShadow="md" height={"fit-content"} px="5">
        <Heading as="h2" size="sm" color={"blackAlpha.800"}>
          {job_title}
        </Heading>
        <Text color={"blue"} fontSize="16px">
          {company_name}
        </Text>
        <Text fontSize="sm">
          {city}, {state}
        </Text>
        <Button
          colorScheme="blue"
          bg="#2557a7"
          variant="solid"
          my="2"
          disabled={applyDisable}
          onClick={handleApplyBtn}
          isLoading={sendingEmail ? "YES" : ""}
          loadingText="Sending your application.."
        >
          Apply Now
        </Button>
      </Box>

      <Box
        pl="10"
        height={"78%"}
        overflowX="hidden"
        overflowY="auto"
        dangerouslySetInnerHTML={{ __html: html_job_description }}
      />
    </VStack>
  );
};

export default SingleJobDetails;
