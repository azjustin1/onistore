import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/solid";
import Layout from "components/Layout/Layout.js";
import React from "react";
import CartProvider from "../contexts/CartProvider";
import GlobalStateProvider from "../contexts/GlobalStateProvider";
import "../styles/globals.css";
import Document from "./__document.js";

function MyApp({ Component, pageProps }) {
	return (
		<React.StrictMode>
			<GlobalStateProvider>
				<Document>
					<CartProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</CartProvider>
				</Document>
			</GlobalStateProvider>
		</React.StrictMode>
	);
}

export default MyApp;
