import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const SingleJobDetails = () => {
  const [sendingEmail, setSendingEmail] = useState(false);
  const selectedJob = JSON.parse(localStorage.getItem("selectedJob"));
  const { id, job_title, company_name, category, city, is_remote, state, html_job_description } =
    selectedJob;

  useEffect(() => {
    document.title = job_title;
  }, []);

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
          //   onClick={handleApplyBtn}
          //   isLoading={sendingEmail ? "YES" : ""}
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
