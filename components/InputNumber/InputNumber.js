import React, { useState } from "react";
import styles from "./InputNumber.module.css";

import Button from "../Button/Button.js";

function InputNumber({ width, height, value, onIncrease, onDecrease }) {
	return (
		<div className={styles.container}>
			<div className={styles.container__decrease}>
				<Button
					onClick={onDecrease}
					width={width}
					height={height}
					lineHeight={height}
					borderRadius="10px"
					fontSize="large"
					fontWeight="bold">
					-
				</Button>
			</div>
			<div className={styles.container__number}>{value}</div>
			<div className={styles.container__increase}>
				<Button
					onClick={onIncrease}
					width={width}
					height={height}
					lineHeight={height}
					borderRadius="10px"
					fontSize="large"
					fontWeight="bold">
					+
				</Button>
			</div>
		</div>
	);
}

export default InputNumber;
