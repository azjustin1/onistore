import Head from "next/head";

import main from "./Main.module.css";

// Components
import Card from "components/Card/Card.js";

import { products } from "../data/products";
import { useGlobalState } from "../context/GlobalStateProvider";
import { useEffect } from "react";

import axios from "axios";

export default function Home() {
	const { state } = useGlobalState();
	useEffect(async () => {
		// const response = await axios.get("/api/products");
		// console.log(response.data);
		// const response = await fetch("http://localhost:9000/api/products", {
		// 	method: "GET",
		// });
		// console.log(response);
	});
	return (
		<div className={main.home}>
			<div className={`${main.main}`}>
				<Head>
					<title>Home</title>
					<meta name="description" content="Men clothes." />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				{products.map((item, i) => (
					<Card
						key={i}
						href={item.productName}
						imageSrc={item.imageSrc}
						width={item.width}
						height={item.height}
						productName={item.productName}
						fakePrice={item.fakePrice}
						realPrice={item.realPrice}
					/>
				))}
			</div>
		</div>
	);
}
