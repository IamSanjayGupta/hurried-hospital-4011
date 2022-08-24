import React from "react";
import logo from "../assets/Icons/Logo.svg";
import "../index.css";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Divider,
  Center,
  MenuGroup,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon, EmailIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { BiMessageDetail } from "react-icons/bi";
import { MdReviews, MdHelp } from "react-icons/md";
import { FaUserAlt, FaBell } from "react-icons/fa";
import { ImProfile, ImHeart, ImCogs, ImMail } from "react-icons/im";
const Links = [
  { path: "/findJob", name: "Find Jobs" },
  { path: "/companyReviews", name: "Company reviews" },
  { path: "/salaryGuide", name: "Salary Guide" },
];

const AllLinks = [
  { path: "/findJob", name: "Find Jobs" },
  { path: "/companyReviews", name: "Company reviews" },
  { path: "/salaryGuide", name: "Salary Guide" },
  { path: "/messages", name: "Messages" },
  { path: "/notification", name: "Notification" },
  { path: "/profile", name: "Profile" },
  { path: "/employer", name: "Employer / Post Job" },
];

const NavLink1 = ({ path, name }) => (
  <NavLink
    to={path}
    style={({ isActive }) =>
      isActive ? { borderBottom: "2px Solid blue", fontWeight: "600" } : undefined
    }
    className="customeLinks"
  >
    {name}
  </NavLink>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <Box px={4} shadow={"sm"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              cursor={"pointer"}
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={logo} className="" alt="logo" />
              <img
                src="https://d3fw5vlhllyvee.cloudfront.net/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png"
                className=""
                alt="logo"
                width="40"
                height="40"
              />
            </HStack>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink1 key={link.path} {...link} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
            <Button
              variant={"ghost"}
              borderRadius={"none"}
              colorScheme={"blue"}
              py={8}
              fontSize={"2xl"}
            >
              <BiMessageDetail />
            </Button>
            <Button
              variant={"ghost"}
              borderRadius={"none"}
              colorScheme={"blue"}
              py={8}
              fontSize={"2xl"}
            >
              <FaBell />
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                variant={"ghost"}
                borderRadius={"none"}
                colorScheme={"blue"}
                fontSize={"xl"}
                py={8}
              >
                <FaUserAlt />
              </MenuButton>
              <MenuList mt={-2}>
                <MenuGroup title="Sanjay.g.258@gmail.com">
                  <MenuItem icon={<ImProfile />}>Profile</MenuItem>
                  <MenuItem icon={<ImHeart />}>My Jobs</MenuItem>
                  <MenuItem icon={<MdReviews />}>My reviews</MenuItem>
                  <MenuItem icon={<ImMail />}>Email Settings</MenuItem>
                  <MenuItem icon={<ImCogs />}>Settings</MenuItem>
                  <MenuItem icon={<MdHelp />}>Help Center</MenuItem>
                  <MenuDivider />
                  <MenuItem>Sign out</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
            <Center height={10}>
              <Divider orientation="vertical" />
            </Center>
            <NavLink1 path={"/employer"} name={"Employer / Post Job"} />
          </Flex>
          <Flex display={{ base: "flex", md: "none" }}>
            <Menu>
              <MenuButton as={Button} variant={"ghost"} colorScheme={"blue"} fontSize={"xl"} py={8}>
                <FaUserAlt />
              </MenuButton>
              <MenuList mt={-2}>
                <MenuGroup title="Sanjay.g.258@gmail.com">
                  <MenuItem icon={<ImProfile />}>Profile</MenuItem>
                  <MenuItem icon={<ImHeart />}>My Jobs</MenuItem>
                  <MenuItem icon={<MdReviews />}>My reviews</MenuItem>
                  <MenuItem icon={<ImMail />}>Email Settings</MenuItem>
                  <MenuItem icon={<ImCogs />}>Settings</MenuItem>
                  <MenuItem icon={<MdHelp />}>Help Center</MenuItem>
                  <MenuDivider />
                  <MenuItem>Sign out</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"}>
              {AllLinks.map((link) => (
                <NavLink1 key={link} {...link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
