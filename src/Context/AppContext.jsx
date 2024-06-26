import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initState = {
  isAuth: false,
  email: "",
  isLoading: false,
  isError: false,
  what: "",
  where: "",
  jobs: [],
  selectedJob: {},
  remote: "",
  datePosted: "",
  jobType: "",
};

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
