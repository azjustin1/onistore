import React from "react";
import styles from "./Input.module.css";

function Input({
	icon,
	placeholder,
	value,
	onChange,
	width,
	height,
	margin,
	name,
	type,
}) {
	return (
		<div
			style={{
				width: width,
				height: height,
				lineHeight: height,
				margin: margin,
			}}
			className={styles.container}>
			<div className={styles.container__icon}>
				<i className={icon}></i>
			</div>
			<input
				type={type}
				className={styles.container__input}
				placeholder={placeholder}
				value={value}
				name={name}
				onChange={onChange}
			/>
		</div>
	);
}

export default Input;
