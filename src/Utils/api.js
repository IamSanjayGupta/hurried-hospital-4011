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

export const checkTokenApi = ({ token }) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL_API}/pendingAccounts?token=${token}&_limit=1`);
};
