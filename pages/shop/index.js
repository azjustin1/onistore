import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "./Shop.module.css";
import main from "../Main.module.css";

import Category from "../../components/Category/Category.js";
import Card from "../../components/Card/Card.js";
import {
	ACTION_TYPE,
	useGlobalState,
} from "../../contexts/GlobalStateProvider";

// import { products } from "../../data/products";

const DynamicComponent = dynamic(() => import("../../components/Card/Card"));

import axios from "axios";

function Shop({ children }) {
	const { dispatch } = useGlobalState();
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(async () => {
		const response = await axios.get("http://localhost:9000/api/products");
		const categories = await axios.get("http://localhost:9000/api/categories");
		setCategories(categories.data);
		setProducts(response.data);
	}, []);
	return (
		<div className={styles.shop}>
			<Category
				data={categories}
				min={Math.min.apply(
					Math,
					products.map((item) => item.price)
				)}
				max={Math.max.apply(
					Math,
					products.map((item) => item.price)
				)}
			/>
			<div className={main.main}>
				{products.map((product) => (
					<DynamicComponent
						key={product.id}
						href={product.slug}
						imageSrc="https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg"
						width="300px"
						height="300px"
						productName={product.name}
						fakePrice={product.fake_price}
						realPrice={product.price}
					/>
				))}
			</div>
			{children}
		</div>
	);
}

export default Shop;
