import { createContext, useContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initState = {
  isAuth: false,
  email: null,
  isLoading: false,
  isError: false,
};

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
