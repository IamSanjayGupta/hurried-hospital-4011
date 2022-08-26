// "account_type": "Job Seeker",
// "name": "Sanjay",
// "email": "sanjayg.8237@gmail.com",
// "password": "Sanjay82",
// "contact": 8237202186,
// "date": "2022-8-25",
// "id": 99999

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

//Jobs

export const getJobsApi = ({ what, where, page = 1 }) => {
  let url = "";
  if (where)
    url = `${process.env.REACT_APP_BASE_URL_API}/jobs?q=${what}&city=${where}&_page=${page}`;
  else url = `${process.env.REACT_APP_BASE_URL_API}/jobs?q=${what}&_page=${page}`;
  return axios.get(url);
};
