import React, { useState } from "react";
import styles from "./InputRange.module.css";

function Range({ min, max, step }) {
	const [prize, setPrize] = useState(50);

	const handleRangeChange = (e) => {
		setPrize(e.target.value);
	};

	return (
		<div className={styles.container}>
			<h4>{prize}$</h4>
			<input
				type="range"
				className={styles.container__input}
				onChange={handleRangeChange}
				min={min}
				max={max}
				step={step}
				value={prize}
			/>
		</div>
	);
}

export default Range;
