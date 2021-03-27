import Head from "next/head";

import main from "./Main.module.css";

// Components
import Card from "components/Card/Card.js";

import { products } from "../data/products";
import { useGlobalState } from "../context/GlobalStateProvider";
import { useEffect } from "react";

export default function Home() {
	const { state } = useGlobalState();

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
