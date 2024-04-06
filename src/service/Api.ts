import axios, { AxiosInstance } from "axios";

const baseURL = "http://localhost:3030";

export const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: baseURL
})