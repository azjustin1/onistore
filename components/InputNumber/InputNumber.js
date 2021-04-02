import React, { useState } from "react";
import styles from "./InputNumber.module.css";

import Button from "../Button/Button.js";

function InputNumber({ width, value, onIncrease, onDecrease }) {
	return (
		<div
			className={styles.container}
			style={{ width: width, lineHeight: "40px" }}>
			<div className={styles.container__decrease}>
				<Button
					onClick={onDecrease}
					width="40px"
					height="40px"
					lineHeight="30px"
					borderRadius="10px"
					fontSize="24pt"
					fontWeight="bold">
					-
				</Button>
			</div>
			<div className={styles.container__number}>{value}</div>
			<div className={styles.container__increase}>
				<Button
					onClick={onIncrease}
					width="40px"
					height="40px"
					lineHeight="30px"
					borderRadius="10px"
					fontSize="24pt"
					fontWeight="bold">
					+
				</Button>
			</div>
		</div>
	);
}

export default InputNumber;
