import Head from "next/head";
import styles from "../styles/Home.module.css";

import Sidebar from "components/Sidebar/Sidebar.js";
import Main from "components/Main/Main.js";
import Footer from "components/Footer/Footer.js";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Men clothes." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* <main className={styles.main}> */}
			<Sidebar />
			<Main />
			<Footer />
			{/* </main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Powered by{" "}
					<img
						src="/vercel.svg"
						alt="Vercel Logo"
						className={styles.logo}
					/>
				</a>
			</footer> */}
		</div>
	);
}
