import axios from "axios";
import queryString from "query-string";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const baseURL = "http://localhost:8000/api";

const config = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

const instance = axios.create({
	baseURL: baseURL,
	config: config,
	paramsSerializer: (params) => queryString.stringify(params),
});

export const setClientToken = (token) => {
	instance.interceptors.request.use((config) => {
		config.headers.Authorization = `Bearer ${token}`;
		return config;
	});
};

export const removeClientToken = () => {
	delete axios.defaults.headers.Authorization;
};

export default instance;
