import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchInput from "../components/SearchInput";
import FooterNormal from "../components/FooterNormal";
import FilterButton from "../components/FilterButton";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { getJobsApi } from "../utils/api";
import { capitalize, getJobBullets } from "../utils/polyfills";
import { AppContext } from "../context/AppContext";
import JobCards from "../components/JobCards";
import { addJob, setLoading, setSelectedJob } from "../context/AppAction";
import { ApplicationTemplate } from "../utils/email_Templates/ApplicationTemplate";
import { sendMail } from "../utils/mailer";
import Pagination from "../components/Pagination";
const Jobs = () => {
  const { state, dispatch } = useContext(AppContext);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [page, setPage] = useState(1);

  let filterBtn = [
    {
      name: "Date Posted",
      childs: [
        { key: "a", name: "Last 24 Hours" },
        { key: "a", name: "Last 3 days" },
        { key: "a", name: "Last 7 days" },
        { key: "a", name: "Last 14 days" },
      ],
    },
    {
      name: "Job Type",
      childs: [
        { key: "&job_type=Full-time", name: "Full-time" },
        { key: "&job_type=Part-time", name: "Part-time" },
        { key: "&job_type=Contract", name: "Contract" },
        { key: "&job_type=Fresher", name: "Fresher" },
        { key: "&job_type=Internship", name: "Internship" },
      ],
    },
    {
      name: "Remote",
      childs: [
        { key: "&is_remote=true", name: "YES" },
        { key: "&is_remote=false", name: "NO" },
      ],
    },
  ];

  const selectJob = (id) => {
    dispatch(setSelectedJob({ ...state.jobs.filter((job) => job.id === id)[0] }));
  };

  const handleApplyBtn = () => {
    if (!state.email) {
      alert("Please login to apply any Job");
      return;
    }

    const emailTemplate = ApplicationTemplate(state.selectedJob);
    const emailData = {
      job_title: state.selectedJob.job_title,
      message: emailTemplate,
      to: state.email,
    };
    // return;
    setSendingEmail(true);
    sendMail({ template: "email_application", data: emailData })
      .then((res) => {})
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setSendingEmail(false));
  };

  useEffect(() => {
    if (!state.what) return;
    dispatch(setLoading(true));
    getJobsApi({ what: capitalize(state.what), where: capitalize(state.where), page: page })
      .then((res) => {
        dispatch(addJob(res.data));
        dispatch(setSelectedJob({ ...res.data[0] }));
      })
      .catch((err) => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }, [page]);

  return (
    <>
      <Navbar />
      <SearchInput />
      <Container maxW={"container.lg"}>
        {filterBtn.map((btn, i) => {
          return <FilterButton key={i} data={btn} />;
        })}
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
              <Box
                w={"100%"}
                position={"sticky"}
                top={1}
                boxShadow="md"
                height={"fit-content"}
                px="5"
              >
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
                dangerouslySetInnerHTML={{ __html: state.selectedJob.html_job_description }}
              />
            </VStack>
          ) : null}
        </Flex>
      </Container>
      {state.jobs.length ? (
        <Pagination page={page} setPage={setPage} disableNext={state.jobs.length < 15} />
      ) : null}
      <FooterNormal />
    </>
  );
};

export default Jobs;
