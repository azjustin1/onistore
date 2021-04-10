import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "../api/axios";

import { ACTION_TYPE, useGlobalState } from "../contexts/GlobalStateProvider";
import main from "./Main.module.css";

// Components
const DynamicComponent = dynamic(() => import("../components/Card/Card"));

export default function Home() {
	const { dispatch } = useGlobalState();
	const [products, setProducts] = useState([]);

	useEffect(async () => {
		dispatch({ type: ACTION_TYPE.START_LOADING });
		const response = await axios.get("/products");
		setProducts(response.data);
		dispatch({ type: ACTION_TYPE.FINISH_LOADING });
	}, []);

	return (
		<div className={main.home}>
			<div className={`${main.main}`}>
				<Head>
					<title>Home</title>
					<meta name="description" content="Men clothes." />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				{products.map((product, i) => (
					<DynamicComponent
						key={product.id}
						href={product.slug}
						imageSrc={product.name}
						width="300px"
						height="300px"
						productName={product.name}
						fakePrice={product.fake_price}
						realPrice={product.price}
					/>
				))}
			</div>
		</div>
	);
}
