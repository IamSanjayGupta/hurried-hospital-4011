export const setAuth = (value) => {
  console.log(value);
  return {
    type: "SET_AUTH",
    payload: value,
  };
};

export const setEmail = (value) => {
  return { type: "SET_EMAIL", payload: value };
};

// export const setAuth = (value) => {
//   return { type: "LOGIN_SUCCESS", payload: value };
// };
