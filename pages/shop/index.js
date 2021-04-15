import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import Category from "../../components/Category/Category.js";
import { useGlobalState } from "../../contexts/GlobalStateProvider";
import main from "../Main.module.css";
import styles from "./Shop.module.css";

const DynamicComponent = dynamic(() => import("../../components/Card/Card"));

function Shop({ children }) {
	const { dispatch } = useGlobalState();
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(async () => {
		const response = await axios.get("/products");
		const categories = await axios.get("/categories");
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
