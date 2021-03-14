import React from "react";
import { useRouter } from "next/router";

import category from "../../styles/Category.module.css";

// Components
import Navigation from "../Navigation/Navigation.js";

function Category() {
	const router = useRouter();

	return (
		<div className={category.category}>
			<Navigation
				href="t-shirt"
				content="Categories"
				width="75%"
				height="25px"
			/>
			<Navigation
				href="blouse"
				content="Categories"
				width="75%"
				height="25px"
			/>
			<Navigation content="Categories" width="75%" height="25px" />
			<Navigation content="Categories" width="75%" height="25px" />
			<Navigation content="Categories" width="75%" height="25px" />
		</div>
	);
}

export default Category;
