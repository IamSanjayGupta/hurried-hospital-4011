import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchInput from "../components/SearchInput";
import FooterNormal from "../components/FooterNormal";
import FilterButton from "../components/FilterButton";
import { Box, Container, Divider, Flex, VStack } from "@chakra-ui/react";
import { getJobsApi } from "../utils/api";
import { capitalize, getJobBullets } from "../utils/polyfills";
import { AppContext } from "../context/AppContext";
import JobCards from "../components/JobCards";
const Jobs = () => {
  const { state, dispatch } = useContext(AppContext);

  let data = {
    name: "Remote",
    childs: ["YES", "NO"],
  };
  let tt = getJobBullets(
    `<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\" \"http://www.w3.org/TR/REC-html40/loose.dtd\">\n<html><body>\n<div id=\"jobDescriptionText\" class=\"jobsearch-jobDescriptionText\"> <p><b>Roles and Responsibilities: </b></p> <ul> <li>Build efficient, testable, and reusable PHP modules and plugins</li> <li>Integration of user-facing elements developed by back-end developers</li> <li>Solve complex performance problems and architectural challenges</li> <li>Ensure to resolve identified issues related to PHP development to different customers varying from senior managers to varied technical personnel.</li> <li>Maintain and manage clear plus complete documentation.</li> <li>Write all clean object-oriented PHP as well as efficient SQL.</li> <li>Develop and deploy new features, modules and write bug-free code for web-based applications.</li> </ul> <p><b>Key Skills: </b></p> <ul> <li>Proficiency in PHP programming with OOPS, MySQL, JavaScript, and jQuery.</li> <li>Understanding of MVC design patterns</li> <li>Hands-on experience in designing complex database queries with a multi DB/table structure</li> <li>Hands-on experience in back-end technologies, such as HTML and CSS</li> <li>Understanding of Browser compatibilities and standard Compliances</li> <li>Good knowledge of open-source CMS such as WordPress, Laravel, Magento, etc will be an added advantage.</li> </ul> <p>Experience in core php: 3 years to 6 years</p> <p>Job Types: Full-time, Walk-In</p> <p>Salary: ₹40,000.00 - ₹70,000.00 per month</p> <p>Benefits:</p> <ul><li>Paid sick time</li></ul> <p>Schedule:</p> <ul> <li>Day shift</li> <li>Monday to Friday</li> </ul> <p>Supplemental Pay:</p> <ul><li>Performance bonus</li></ul> <p>Work Remotely:</p> <ul><li>No</li></ul> </div></body></html>`
  );

  useEffect(() => {
    if (!state.what) return;

    getJobsApi({ what: capitalize(state.what), where: capitalize(state.where) })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
      .finally();
  }, [state.what, state.where]);

  return (
    <>
      <Navbar />
      <SearchInput />
      <Container maxW={"container.lg"}>
        <FilterButton data={data} />
      </Container>
      <Divider bg={"gray.300"} my="5" />
      <Container maxW={"container.lg"} position="sticky">
        <Flex gap={5}>
          <VStack w={{ base: "100%", md: "50%" }}>
            <JobCards />
            <JobCards />
            <JobCards />
          </VStack>
          <VStack w={{ base: "0%", md: "50%" }} bg={"blue"}></VStack>
        </Flex>
      </Container>

      <FooterNormal />
    </>
  );
};

export default Jobs;
