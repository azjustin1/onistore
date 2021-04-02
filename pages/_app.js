import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/solid";
import Layout from "components/Layout/Layout.js";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import GlobalStateProvider from "../context/GlobalStateProvider";
import "../styles/globals.css";
import Document from "./__document.js";

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

export default MyApp;
