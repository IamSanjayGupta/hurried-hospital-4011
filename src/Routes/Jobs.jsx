import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchInput from "../components/SearchInput";
import FooterNormal from "../components/FooterNormal";
import FilterButton from "../components/FilterButton";
import { Box, Container, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import { getJobsApi } from "../utils/api";
import { capitalize, getJobBullets } from "../utils/polyfills";
import { AppContext } from "../context/AppContext";
import JobCards from "../components/JobCards";
import { addJob } from "../context/AppAction";
const Jobs = () => {
  const { state, dispatch } = useContext(AppContext);

  let data = {
    name: "Remote",
    childs: ["YES", "NO"],
  };

  useEffect(() => {
    if (!state.what) return;
    getJobsApi({ what: capitalize(state.what), where: capitalize(state.where) })
      .then((res) => {
        dispatch(addJob(res.data));
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
              return <JobCards key={job.id} props={job} />;
            })}
          </VStack>
          <VStack
            w={"50%"}
            rounded="md"
            display={{ base: "none", md: "block" }}
            position="sticky"
            top={5}
            height={"fit-content"}
            boxShadow="rgba(0, 0, 0, 0.82) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
            p="3"
          >
            <Text>
              Roles and Responsibilities: Build efficient, testable, and reusable PHP modules and
              plugins Integration of user-facing elements developed by back-end developers Solve
              complex performance problems and architectural challenges Ensure to resolve identified
              issues related to PHP development to different customers varying from senior managers
              to varied technical personnel. Maintain and manage clear plus complete documentation.
              Write all clean object-oriented PHP as well as efficient SQL. Develop and deploy new
              features, modules and write bug-free code for web-based applications. Key Skills:
              Proficiency in PHP programming with OOPS, MySQL, JavaScript, and jQuery. Understanding
              of MVC design patterns Hands-on experience in designing complex database queries with
              a multi DB/table structure Hands-on experience in back-end technologies, such as HTML
              and CSS Understanding of Browser compatibilities and standard Compliances Good
              knowledge of open-source CMS such as WordPress, Laravel, Magento, etc will be an added
              advantage. Experience in core php: 3 years to 6 years Job Types: Full-time, Walk-In
              Salary: ₹40,000.00 - ₹70,000.00 per month Benefits: Paid sick time Schedule: Day shift
              Monday to Friday Supplemental Pay: Performance bonus Work Remotely: No", "job_type":
              "Full-time",
            </Text>
          </VStack>
        </Flex>
      </Container>

      <FooterNormal />
    </>
  );
};

export default Jobs;
