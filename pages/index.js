import Head from "next/head";
import styles from "../styles/Home.module.css";

// Components
import Card from "components/Card/Card.js";

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Men clothes." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Card width="300px" height="300px" />
			<Card width="300px" height="300px" />
			<Card width="300px" height="300px" />
			<Card width="300px" height="300px" />
			<Card width="300px" height="300px" />
			<Card width="300px" height="300px" />
			<Card width="300px" height="300px" />
			<Card width="300px" height="300px" />
			<Card width="300px" height="300px" />
		</>
	);
}
