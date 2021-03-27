import "../styles/globals.css";
import App from "next/app";

import Document from "./__document.js";
import Layout from "components/Layout/Layout.js";

// Icons
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import GlobalStateProvider, {
	useGlobalState,
} from "../context/GlobalStateProvider";
import React, { useEffect, useReducer } from "react";

function MyApp({ Component, pageProps }) {
	return (
		<React.StrictMode>
			<Document>
				<GlobalStateProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</GlobalStateProvider>
			</Document>
		</React.StrictMode>
	);
}
// class MyApp extends App {
// 	render() {
// 		const { Component, pageProps } = this.props;

// 		return (
// 			<React.StrictMode>
// 				<GlobalContext.Provider value={{ state, dispatch, ACTION_TYPE }}>
// 					<Document>
// 						<Layout>
// 							<Component {...pageProps} />
// 						</Layout>
// 					</Document>
// 				</GlobalContext.Provider>
// 			</React.StrictMode>
// 		);
// 	}
// }

export default MyApp;
