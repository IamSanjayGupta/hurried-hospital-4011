import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const SingleJobDetails = () => {
  const { state, dispatch } = useContext(AppContext);

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
          {state.selectedJob.job_title}
        </Heading>
        <Text color={"blue"} fontSize="16px">
          {state.selectedJob.company_name}
        </Text>
        <Text fontSize="sm">
          {state.selectedJob.city}, {state.selectedJob.state}
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
        dangerouslySetInnerHTML={{ __html: state.selectedJob.html_job_description }}
      />
    </VStack>
  );
};

export default SingleJobDetails;
