import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import {
  addJob,
  setDatePosted,
  setdatePosted,
  setJobType,
  setLoading,
  setRemote,
  setSelectedJob,
  setWhat,
} from "../context/AppAction";
import { AppContext } from "../context/AppContext";
import { getJobsApi } from "../utils/api";
import { capitalize } from "../utils/polyfills";
let count = 0;

const FilterButton = ({ data }) => {
  const { state, dispatch } = useContext(AppContext);
  const [flag, setflag] = useState(false);

  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  console.log(new Date().addDays(5).toISOString().slice(0, 10));

  const handleItemClick = (name, key) => {
    if (name === "Remote") {
      dispatch(setRemote(key));
    } else if (name === "Date Posted") {
      dispatch(setDatePosted(key));
    } else if (name === "Job Type") {
      dispatch(setJobType(key));
    }

    // let filter = ;
    // if (!state.what) return;
    // console.log(state.what);
  };
  useEffect(() => {
    console.log("Filter UseEffet");
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
