import Head from "next/head";
import styles from "../styles/Home.module.css";

// Components
import Card from "components/Card/Card.js";
import { useEffect } from "react";

let data = [
	{
		imageSrc: "tuyettran.jpg",
		width: "300px",
		height: "300px",
		productName: "T-Shirt",
		fakePrice: "500.000",
		realPrice: "250.000",
	},
	{
		imageSrc: "tuyettran.jpg",
		width: "300px",
		height: "300px",
		productName: "Blouse",
		fakePrice: "1.000.000",
		realPrice: "500.000",
	},
	{
		imageSrc: "tuyettran.jpg",
		width: "300px",
		height: "300px",
		productName: "T-Shirt",
		fakePrice: "500.000",
		realPrice: "250.000",
	},
	{
		imageSrc: "tuyettran.jpg",
		width: "300px",
		height: "300px",
		productName: "T-Shirt",
		fakePrice: "500.000",
		realPrice: "250.000",
	},
	{
		imageSrc: "tuyettran.jpg",
		width: "300px",
		height: "300px",
		productName: "T-Shirt",
		fakePrice: "500.000",
		realPrice: "250.000",
	},
	{
		imageSrc: "/tuyettran.jpg",
		width: "300px",
		height: "300px",
		productName: "T-Shirt",
		fakePrice: "500.000",
		realPrice: "250.000",
	},
	{
		imageSrc: "/tuyettran.jpg",
		width: "300px",
		height: "300px",
		productName: "T-Shirt",
		fakePrice: "500.000",
		realPrice: "250.000",
	},
	{
		imageSrc: "/tuyettran.jpg",
		width: "300px",
		height: "300px",
		productName: "T-Shirt",
		fakePrice: "500.000",
		realPrice: "250.000",
	},
];

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name="description" content="Men clothes." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{data.map((item, i) => (
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
		</>
	);
}
