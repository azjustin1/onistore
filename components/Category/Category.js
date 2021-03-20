import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "./Category.module.css";

// Components
import Navigation from "../Navigation/Navigation.js";
import Checkbox from "../Checkbox/Checkbox.js";
import InputRange from "../InputRange/InputRange.js";
import Input from "../Input/Input.js";
import Button from "../Button/Button.js";

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
			<Input
				icon="fa fa-user-o"
				placeholder="Email"
				value={email}
				onChange={(e) => {
					handleEmailChange(e);
				}}
				height="50px"
			/>

			<Input
				icon="fa-key"
				placeholder="Password"
				value={password}
				onChange={(e) => {
					handlePasswordChange(e);
				}}
				height="50px"
			/>

			<Button width="50px" height="50px" rounded={false}>
				Click
			</Button>
		</div>
	);
}

export default Category;
