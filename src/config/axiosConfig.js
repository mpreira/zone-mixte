import axios from "axios";

axios.defaults.withCredentials = false;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

export {instance};