// import jwt_decode from "jwt-decode";
// import { store } from "../store";
// import { login } from "../Redux/authorization";
// import axios from "axios";

// const axiosJWT = axios.create();

// axiosJWT.interceptors.request.use(
//   async (config) => {
//     const { user } = store.getState();
//     let currentDate = new Date().getTime();
//     const decodedToken = jwt_decode(user.accessToken);

//     if (decodedToken.exp * 1000 < currentDate) {
//       store.dispatch(login(user));
//       config.headers["authorization"] = `Bearer ${data.data.accessToken}`;
//     } else {
//       config.headers["authorization"] = `Bearer ${user.accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default axiosJWT;
