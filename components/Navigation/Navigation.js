import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./Navigation.module.css";
import { route } from "next/dist/next-server/server/router";

function Navigation({ width, height, content, fontSize, href, rounded, icon }) {
	const router = useRouter();

	return (
		<Link href={href}>
			<div
				style={{
					width: width,
					height: height,
					lineHeight: height,
					fontSize: fontSize,
				}}
				className={`${styles.navigation} ${
					router.pathname == href ? styles.active : ""
				}`}>
				<i className={icon} style={{ fontSize: "18pt" }}></i> {content}
			</div>
		</Link>
	);
}

export default Navigation;
