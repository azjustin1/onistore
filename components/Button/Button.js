import React, { useEffect } from "react";
// import styles from "../../styles/Button.module.css";
import styles from "./Button.module.css";

function Button({ width, height, rounded, onClick, children }) {
	return (
		<button
			style={{ width: width, height: height }}
			onClick={onClick}
			className={`${styles.button} ${rounded ? styles.rounded : ""}`}>
			{children}
		</button>
	);
}

export default Button;
