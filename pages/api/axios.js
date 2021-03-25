import axios from "axios";

const config = {
	Accept: "application/json",
	headers: { "Access-Controll-Allow-Origin": "*" },
	"Content-Type": "application/json",
};

const instance = axios.create({
	baseURL: "http://localhost:9000",
	config: config,

	// paramsSerializer: (params) => queryString.stringify(params),
});

export default instance;
