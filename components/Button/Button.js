import React, { useEffect } from "react";
import styles from "../../styles/Button.module.css";

function Button({ onClick, children }) {
	return (
		<button onClick={onClick} className={styles.button}>
			{children}
		</button>
	);
}

export default Button;
