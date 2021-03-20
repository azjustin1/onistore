import React, { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./Navigation.module.css";

function Navigation({ width, height, content, fontSize, href, rounded }) {
	const router = useRouter();

	const navigate = () => {
		router.push(href);
	};
	return (
		<div
			onClick={navigate}
			style={{
				width: width,
				height: height,
				lineHeight: height,
				fontSize: fontSize,
			}}
			className={`${styles.navigation} ${
				router.pathname == href ? styles.active : ""
			}`}>
			{content}
		</div>
	);
}

export default Navigation;
