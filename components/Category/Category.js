import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "./Category.module.css";

// Components
import Navigation from "../Navigation/Navigation.js";
import Checkbox from "../Checkbox/Checkbox.js";
import InputRange from "../InputRange/InputRange.js";
import Input from "../Input/Input.js";
import Button from "../Button/Button.js";

// data
import { categories } from "../../data/categories";
import { brands } from "../../data/brands";

function Category() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleClick = () => {
		console.log(email + " " + password);
	};
	return (
		<div className={styles.category}>
			<h3>Categories</h3>
			{categories.map((item, i) => (
				<Navigation
					key
					href={item.href}
					content={item.name}
					width="75%"
					height="30px"
					fontSize="medium"
				/>
			))}

			<h3>Brands</h3>
			{brands.map((item, i) => (
				<Checkbox label={item.name} />
			))}

			<h3>Price</h3>
			<InputRange height="36px" width="75%" min={0} max={100} step={1} />
		</div>
	);
}

export default Category;
