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

export const setLoading = (value) => {
  return { type: "SET_LOADING", payload: value };
};

export const setSelectedJob = (value) => {
  return { type: "SET_SELECTED_JOB", payload: value };
};

export const setRemote = (value) => {
  return { type: "SET_REMOTE", payload: value };
};

export const setDatePosted = (value) => {
  return { type: "SET_DATE_POSTED", payload: value };
};

export const setJobType = (value) => {
  return { type: "SET_JOB_TYPE", payload: value };
};
