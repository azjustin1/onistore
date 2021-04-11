import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox.js";
import InputRange from "../InputRange/InputRange.js";
import styles from "./Category.module.css";

const Category = ({ min, max, data }) => {
	const [price, setPrice] = useState(0);
	const handleOnChange = (e) => {
		setPrice(e.target.value);
	};
	return (
		<div className={styles.category}>
			<h3>Categories</h3>
			{data.map((item) => (
				<Checkbox key={item.id} label={item.name} />
			))}

			<h3>Price</h3>
			<InputRange
				height="36px"
				width="75%"
				onChange={handleOnChange}
				value={price}
				min={0}
				max={max}
				step={1000}
			/>
		</div>
	);
};

export default Category;
