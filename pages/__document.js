import React, { useEffect } from "react";
import Head from "next/head";

import axios from "../api/axios";

import { useGlobalState, ACTION_TYPE } from "../contexts/GlobalStateProvider";
function __document({ children }) {
	const { dispatchGlobal } = useGlobalState();

	useEffect(async () => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.get("/auth", {
				headers: { Authorization: `Bearer ${token}` },
			});
			if (response.status === 200)
				dispatchGlobal({ type: ACTION_TYPE.AUTHENTICATE });
		} catch (error) {
			dispatchGlobal({ type: ACTION_TYPE.SIGN_OUT });
		}
	}, []);
	return (
		<>
			<Head>
				<title>New Title</title>
				<meta name="description" content="Men clothes." />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
				<link
					rel="stylesheet"
					href="https://www.w3schools.com/w3css/4/w3.css"></link>
			</Head>
			{children}
		</>
	);
}

export default __document;
