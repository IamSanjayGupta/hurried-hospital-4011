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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { getJobsApi } from "../utils/api";
import { capitalize, getJobBullets } from "../utils/polyfills";
import { AppContext } from "../context/AppContext";
import JobCards from "../components/JobCards";
import {
  addJob,
  setDatePosted,
  setJobType,
  setLoading,
  setRemote,
  setSelectedJob,
} from "../context/AppAction";
import { ApplicationTemplate } from "../utils/email_Templates/ApplicationTemplate";
import { sendMail } from "../utils/mailer";
import Pagination from "../components/Pagination";
const Jobs = () => {
  const { state, dispatch } = useContext(AppContext);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [page, setPage] = useState(1);
  const toast = useToast();
  const [flag, setflag] = useState(false);

  let filterBtn = [
    {
      name: "Date Posted",
      childs: [
        { key: 1, name: "Last 24 Hours" },
        { key: 3, name: "Last 3 days" },
        { key: 7, name: "Last 7 days" },
        { key: 14, name: "Last 14 days" },
      ],
    },
    {
      name: "Job Type",
      childs: [
        { key: "Full-time", name: "Full-time" },
        { key: "Part-time", name: "Part-time" },
        { key: "Contract", name: "Contract" },
        { key: "Fresher", name: "Fresher" },
        { key: "Internship", name: "Internship" },
      ],
    },
    {
      name: "Remote",
      childs: [
        { key: "true", name: "YES" },
        { key: "false", name: "NO" },
      ],
    },
  ];

  const selectJob = (id) => {
    console.log(screen.width);
    dispatch(setSelectedJob({ ...state.jobs.filter((job) => job.id === id)[0] }));
  };

  const handleApplyBtn = () => {
    if (!state.email) {
      toast({
        title: "Please login to apply any Job.",
        // description: "Please login to apply any Job.",
        status: "error",
        duration: 2000,
        position: "top-right",
        isClosable: true,
      });
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

  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  // console.log(new Date().addDays(-14).toISOString().slice(0, 10));

  const handleItemClick = (name, key) => {
    // console.log(name, key);
    if (name === "Remote") {
      dispatch(setRemote(`&is_remote=${key}`));
    } else if (name === "Date Posted") {
      dispatch(
        setDatePosted(`&post_date_gte=${new Date().addDays(-key).toISOString().slice(0, 10)}`)
      );
    } else if (name === "Job Type") {
      dispatch(setJobType(`&job_type=${key}`));
    }
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

  useEffect(() => {
    if (!state.what) return;
    if (flag) {
      dispatch(setLoading(true));
      getJobsApi({
        what: capitalize(state.what),
        where: capitalize(state.where),
        filter: state.remote + state.datePosted + state.jobType,
      })
        .then((res) => {
          dispatch(addJob(res.data));
          dispatch(setSelectedJob({ ...res.data[0] }));
        })
        .catch((err) => console.error(err))
        .finally(() => dispatch(setLoading(false)));
    }
    setflag(true);
  }, [state.remote, state.datePosted, state.jobType]);

  return (
    <>
      <Navbar />
      <SearchInput />
      <Container maxW={"container.lg"}>
        {filterBtn.map((btn, i) => {
          return <FilterButton key={i} data={btn} handleItemClick={handleItemClick} />;
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
