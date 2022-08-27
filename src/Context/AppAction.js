export const setAuth = (value) => {
  return { type: "SET_AUTH", payload: value };
};

export const setEmail = (value) => {
  return { type: "SET_EMAIL", payload: value };
};

export const setWhat = (value) => {
  return { type: "SET_WHAT", payload: value };
};

export const setWhere = (value) => {
  return { type: "SET_WHERE", payload: value };
};

export const addJob = (value) => {
  return { type: "ADD_JOB", payload: value };
};

// export const setAuth = (value) => {
//   return { type: "LOGIN_SUCCESS", payload: value };
// };
