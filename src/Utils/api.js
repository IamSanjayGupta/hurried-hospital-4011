import axios from "axios";

export const getUsersApi = () => {
  return axios.get(`${REACT_APP_BASE_URL_API}/users`);
};

export const addUsers = ({ data }) => {
  return axios.post(`${process.env.REACT_APP_BASE_URL_API}/users`, {
    ...data,
  });
};

export const checkEmailApi = ({ email }) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL_API}/users?email=${email}&_limit=1`);
};

export const checkEmailPassApi = ({ email, password }) => {
  return axios.get(
    `${process.env.REACT_APP_BASE_URL_API}/users?email=${email}&password=${password}&_limit=1`
  );
};

export const addTokenApi = ({ data }) => {
  return axios.post(`${process.env.REACT_APP_BASE_URL_API}/pendingAccounts`, {
    email: data.email,
    token: data.token,
  });
};

export const removeTokenApi = ({ id }) => {
  return axios.delete(`${process.env.REACT_APP_BASE_URL_API}/pendingAccounts/${id}`);
};

export const checkTokenApi = ({ token }) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL_API}/pendingAccounts?token=${token}&_limit=1`);
};

export const getJobsApi = ({ what, where, page = 1, filter }) => {
  let query = `?q=${what}`;
  if (where) query += `&city=${where}`;
  if (filter) query += `${filter}`;
  query += `&_page=${page}&_limit=15`;
  let url = `${process.env.REACT_APP_BASE_URL_API}/jobs${query}`;
  return axios.get(url);
};

export const deleteAccountApi = ({ id }) => {
  return axios.delete(`${process.env.REACT_APP_BASE_URL_API}/users/${id}`);
};
