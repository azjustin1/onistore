import React, { useState } from "react";
import styles from "./InputRange.module.css";

function Range({ min, max, value, step, onChange }) {
	return (
		<div className={styles.container}>
			<h4>đ{value}</h4>
			<input
				type="range"
				className={styles.container__input}
				onChange={onChange}
				min={min}
				max={max}
				step={step}
				value={value}
			/>
		</div>
	);
}

export default Range;
