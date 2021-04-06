import React from "react";
import styles from "./Shop.module.css";
import main from "../Main.module.css";

import Category from "../../components/Category/Category.js";
import Card from "../../components/Card/Card.js";

import { products } from "../../data/products";

function Shop({ children }) {
	return (
		<div className={styles.shop}>
			<Category />
			<div className={main.main}>
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
			{children}
		</div>
	);
}

export default Shop;
