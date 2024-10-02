

import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://dms-api.apps.ginnsltd.com/v1',
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 30000, // 30 seconds
})


export const setAuthToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete instance.defaults.headers.common["Authorization"];
    }
  };
  
  instance.interceptors.response.use((response) => response);