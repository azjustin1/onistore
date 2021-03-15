import React from "react";
import { useRouter } from "next/router";

import category from "../../styles/Category.module.css";

// Components
import Navigation from "../Navigation/Navigation.js";
import Checkbox from "../Checkbox/Checkbox.js";
import InputRange from "../InputRange/InputRange.js";

function Category() {
	const router = useRouter();

	return (
		<div className={category.category}>
			<h3>Categories</h3>
			<Navigation
				href="t-shirt"
				content="T-Shirt"
				width="75%"
				height="25px"
				fontSize="medium"
			/>
			<Navigation
				href="suit"
				content="Suit"
				width="75%"
				height="25px"
				fontSize="medium"
			/>
			<Navigation
				href="sweater"
				content="Sweater"
				width="75%"
				height="25px"
				fontSize="medium"
			/>
			<Navigation
				href="jeans"
				content="Jeans"
				width="75%"
				height="25px"
				fontSize="medium"
			/>
			<Navigation
				href="pole-shirt"
				content="Polo shirt"
				width="75%"
				height="25px"
				fontSize="medium"
			/>
			<h3>Brands</h3>

			<Checkbox label="Acne Studios" check={true} />

			<Checkbox label="Bonobos" />

			<Checkbox label="Bottega Veneta" />

			<Checkbox label="Buck Mason" />

			<h3>Price</h3>
			<InputRange />
		</div>
	);
}

export default Category;
