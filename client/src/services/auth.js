import axios from "axios";

export const userRegister = (data) => {
  console.log("data: ", data);
  return axios({
    method: "POST",
    url: "http://localhost:3000/auth/register",
    data: {
      username: data.username,
      email: data.email,
      password: data.password,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const userLogin = (data) => {
  return axios({
    method: "POST",
    url: "http://localhost:3000/auth/login",
    data: {
      // username: data.username,
      email: data.email,
      password: data.password,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
};
