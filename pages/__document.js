import React from "react";
import Head from "next/head";

function __document({ children }) {
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
