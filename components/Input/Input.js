import React from "react";
import styles from "./Input.module.css";

function Input({ icon, placeholder, value, onChange, width, height }) {
	return (
		<div
			style={{ width: width, height: height, margin: "20px auto" }}
			className={styles.container}>
			<div className={styles.container__icon}>
				<i className={icon}></i>
			</div>
			<input
				type="text"
				className={styles.container__input}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}

export default Input;
