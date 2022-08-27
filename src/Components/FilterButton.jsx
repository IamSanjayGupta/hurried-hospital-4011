import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const FilterButton = ({ data }) => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          _active={{
            boxShadow: "0 0 0 2px #fff, 0 0 0 4px #085ff7",
          }}
        >
          {data.name}
        </MenuButton>
        <MenuList>
          {data.childs?.map((item) => {
            return <MenuItem key={item}>{item}</MenuItem>;
          })}
        </MenuList>
      </Menu>
    </>
  );
};

export default FilterButton;
