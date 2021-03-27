import axios from "axios";

const config = {
	accept: "application/json",
	headers: { "Access-Control-Allow-Origin": "*" },
	"Content-Type": "application/json",
};

const instance = axios.create({
	baseURL: "http://localhost:9000/api/v2",
	config: config,

	// paramsSerializer: (params) => queryString.stringify(params),
});

export const setClientToken = (token) => {
	instance.interceptors.request.use((config) => {
		config.headers.Authorization = `Bearer ${token}`;
		return config;
	});
};

export const removeClientToken = () => {
	instance.interceptors.request.use((config) => {
		config.headers.Authorization = "";
		return config;
	});
};

export default instance;
