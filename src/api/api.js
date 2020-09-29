import axios from "axios";
import {BACKEND_URL} from "./api-url-consts";
import {store} from "../store/store";

const api = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

api.interceptors.request.use(async config => {
    const {token} = store.getState().loginModel;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const getData = (url, config) => api.get(url, config);
export const postData = (url, data, config) => api.post(url, data, config);
export const putData = (url, id, data, config) => api.put(url + id, data, config);
export const deleteData = (url, id, data, config) => api.put(url + id, data, config);
