import React, { useState } from "react";
import styles from "./Checkbox.module.css";

function Checkbox({ label }) {
	const [check, setCheck] = useState(false);

	const handleCheck = () => {
		setCheck((previous) => !previous);
	};

	return (
		<div className={`${styles.container}`} onClick={handleCheck}>
			<div
				className={`${styles.container__checkbox} ${
					check ? styles.check : ""
				}`}>
				<div className={styles.container__checkbox__tick}></div>
				{check}
			</div>
			<div className={styles.container__label}>{label}</div>
		</div>
	);
}

export default Checkbox;
