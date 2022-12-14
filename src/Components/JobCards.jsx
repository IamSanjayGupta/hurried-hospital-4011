import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import {
  Box,
  Heading,
  ListItem,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { getJobBullets } from "../utils/polyfills";
import { AppContext } from "../context/AppContext";

const JobCards = ({ props, selectJob }) => {
  const { state, dispatch } = useContext(AppContext);
  const { id, job_title, company_name, category, city, is_remote, html_job_description } = props;
  let jobBullets = getJobBullets(html_job_description);

  return (
    <Box
      w="100%"
      p="3"
      rounded="md"
      boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.82) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      }}
      _active={{
        boxShadow: "0 0 0 2px #fff, 0 0 0 4px #085ff7",
      }}
      boxSizing="border-box"
      cursor={"pointer"}
      onClick={() => {
        if (window.screen.width <= 767) {
          localStorage.setItem("selectedJob", JSON.stringify({ ...props, email: state.email }));
          window.open("/jobdetails");
        } else selectJob(id);
      }}
    >
      <Heading as="h2" size="sm" color={"blackAlpha.800"}>
        {job_title}
      </Heading>
      <Text>{company_name}</Text>
      <Text>
        {city}, {props.state}
      </Text>
      <Tag>
        <TagLeftIcon as={HiOutlineOfficeBuilding} />
        <TagLabel>{is_remote == "true" ? "REMOTE" : "FULL-TIME"}</TagLabel>
      </Tag>
      <Tag mx={2}>
        <TagLeftIcon as={BiCategory} />
        <TagLabel>{category}</TagLabel>
      </Tag>
      <Box maxH={"150px"} overflow="hidden" p={2}>
        <UnorderedList listStyleType={"circle"}>
          {jobBullets.map((item) => {
            return (
              <ListItem key={item} color={"#4A4A4A"}>
                {item}
              </ListItem>
            );
          })}
        </UnorderedList>
        {jobBullets.length < 3 ? (
          <Box dangerouslySetInnerHTML={{ __html: html_job_description }} />
        ) : null}
      </Box>
    </Box>
  );
};

export default JobCards;
