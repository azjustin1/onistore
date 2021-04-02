import React, { useEffect } from "react";
// import styles from "../../styles/Button.module.css";
import styles from "./Button.module.css";

function Button({
	width,
	height,
	lineHeight,
	fontWeight,
	margin,
	borderRadius,
	fontSize,
	onClick,
	children,
}) {
	return (
		<div
			style={{
				width: width,
				height: height,
				margin: margin,
				lineHeight: lineHeight,
			}}>
			<button
				style={{
					borderRadius: borderRadius,
					fontSize: fontSize,
					fontWeight: fontWeight,
				}}
				onClick={onClick}
				className={`${styles.button} `}>
				{children}
			</button>
		</div>
	);
}

export default Button;
