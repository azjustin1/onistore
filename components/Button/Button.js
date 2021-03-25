import React, { useEffect } from "react";
// import styles from "../../styles/Button.module.css";
import styles from "./Button.module.css";

function Button({ width, height, margin, rounded, onClick, children }) {
	return (
		<div
			style={{
				width: width,
				height: height,
				lineHeight: height,
				margin: margin,
			}}>
			<button
				onClick={onClick}
				className={`${styles.button} ${rounded ? styles.rounded : ""}`}>
				{children}
			</button>
		</div>
	);
}

export default Button;
