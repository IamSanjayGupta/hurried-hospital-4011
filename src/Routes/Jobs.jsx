import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchInput from "../components/SearchInput";
import FooterNormal from "../components/FooterNormal";
import FilterButton from "../components/FilterButton";
import { Box, Button, Container, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { getJobsApi } from "../utils/api";
import { capitalize, getJobBullets } from "../utils/polyfills";
import { AppContext } from "../context/AppContext";
import JobCards from "../components/JobCards";
import { addJob, setSelectedJob } from "../context/AppAction";
const Jobs = () => {
  const { state, dispatch } = useContext(AppContext);

  let data = {
    name: "Remote",
    childs: ["YES", "NO"],
  };

  const selectJob = (id) => {
    dispatch(setSelectedJob({ ...state.jobs.filter((job) => job.id === id)[0] }));
  };

  useEffect(() => {
    if (!state.what) return;
    getJobsApi({ what: capitalize(state.what), where: capitalize(state.where) })
      .then((res) => {
        dispatch(addJob(res.data));
        dispatch(setSelectedJob({ ...res.data[0] }));
      })
      .catch((err) => console.error(err))
      .finally();
  }, []);

  return (
    <>
      <Navbar />
      <SearchInput />
      <Container maxW={"container.lg"}>
        <FilterButton data={data} />
      </Container>
      <Divider bg={"gray.300"} my="5" />
      <Container maxW={"container.lg"} position="relative">
        <Flex gap={5}>
          <VStack w={{ base: "100%", md: "50%" }}>
            {state.jobs?.map((job) => {
              return <JobCards key={job.id} props={job} selectJob={selectJob} />;
            })}
          </VStack>
          {state.selectedJob.id ? (
            <VStack
              w={"50%"}
              rounded="md"
              display={{ base: "none", md: "block" }}
              position="sticky"
              top={1}
              height={"98vh"}
              overflowY="hidden"
              boxShadow="rgba(0, 0, 0, 0.82) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
            >
              <Box w={"100%"} position={"sticky"} top={1} boxShadow="md" height={"20%"} px="5">
                <Heading as="h2" size="sm" color={"blackAlpha.800"}>
                  {state.selectedJob.job_title}
                </Heading>
                <Text color={"blue"} fontSize="md">
                  {state.selectedJob.company_name}
                </Text>
                <Text fontSize="sm">
                  {state.selectedJob.city}, {state.selectedJob.state}
                </Text>
                <Button colorScheme="blue" bg="#2557a7" variant="solid" my="1">
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
          ) : null}
        </Flex>
      </Container>

      <FooterNormal />
    </>
  );
};

export default Jobs;
