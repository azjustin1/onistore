import React from "react";
import styles from "./InputRange.module.css";

function Range() {
	return (
		<div className={styles.container}>
			<input type="range" className={styles.container__min} />
			<input type="range" className={styles.container__max} />
		</div>
	);
}

export default Range;
