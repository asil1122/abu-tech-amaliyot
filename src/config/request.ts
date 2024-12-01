import axios from "axios";
import { loadState } from "./storage";


export const request = axios.create({ baseURL: "https://dev.api-erp.najotedu.uz"});

request.interceptors.request.use(
  (config) => {
      const token = loadState("token")
      console.log(token);
      
      if (token) {
        console.log(token);
        
          config.headers.Authorization = `Bearer ${token.accessToken}`;
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);
