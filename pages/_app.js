import "../styles/globals.css";
import App from "next/app";

import Document from "./__document.js";
import Layout from "components/Layout/Layout.js";
import StateProvider from "../context/StateProvider";
import reducer, { initialState } from "../reducer/reducer";

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<StateProvider reducer={reducer} initialState={initialState}>
				<Document>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Document>
			</StateProvider>
		);
	}
}

export default MyApp;
