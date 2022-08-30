import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const FilterButton = ({ data, handleItemClick }) => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          _active={{
            boxShadow: "0 0 0 2px #fff, 0 0 0 4px #085ff7",
          }}
          m="2"
        >
          {data.name}
        </MenuButton>
        <MenuList>
          {data.childs?.map((item) => {
            return (
              <MenuItem key={item.name} onClick={() => handleItemClick(data.name, item.key)}>
                {item.name}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};

export default FilterButton;
