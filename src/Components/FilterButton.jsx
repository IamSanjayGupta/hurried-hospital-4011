import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useContext } from "react";
import { addJob, setLoading, setSelectedJob, setWhat } from "../context/AppAction";
import { AppContext } from "../context/AppContext";
import { getJobsApi } from "../utils/api";
import { capitalize } from "../utils/polyfills";

const FilterButton = ({ data }) => {
  const { state, dispatch } = useContext(AppContext);

  const handleItemClick = (name, key) => {
    dispatch(setWhat(state.what + key));

    // if (!state.what) return;
    console.log(state.what);
    dispatch(setLoading(true));
    getJobsApi({ what: capitalize(state.what), where: capitalize(state.where) })
      .then((res) => {
        dispatch(addJob(res.data));
        dispatch(setSelectedJob({ ...res.data[0] }));
      })
      .catch((err) => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  };

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
