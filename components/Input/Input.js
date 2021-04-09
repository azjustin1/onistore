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
	multiline,
}) {
	return (
		<div
			style={{
				width: width,
				height: height,
				lineHeight: "120%",
				margin: margin,
			}}
			className={styles.container}>
			{icon ? (
				<div className={styles.container__icon}>
					<i className={icon}></i>
				</div>
			) : (
				<div className={styles.container__noIcon}></div>
			)}
			{multiline ? (
				<textarea
					className={styles.container__textarea}
					placeholder={placeholder}></textarea>
			) : (
				<input
					type={type}
					className={styles.container__input}
					placeholder={placeholder}
					value={value}
					name={name}
					onChange={onChange}
				/>
			)}
		</div>
	);
}

export default Input;
