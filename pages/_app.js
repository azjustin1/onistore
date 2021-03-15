import "../styles/globals.css";
import App from "next/app";

import Document from "./__document.js";
import Layout from "components/Layout/Layout.js";

import GlobalStateProvider from "../context/GlobalStateProvider";

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<GlobalStateProvider>
				<Document>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Document>
			</GlobalStateProvider>
		);
	}
}

export default MyApp;
