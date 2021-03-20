import Head from "next/head";

import home from "./Home.module.css";
import main from "./Main.module.css";

// Components
import Card from "components/Card/Card.js";

import { products } from "../data/products";

export default function Home() {
	return (
		<div className={home.home}>
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
