import React from "react";
import { useRouter } from "next/router";

import styles from "../../styles/Sidebar.module.css";

import Link from "next/link";

function NavItem({ content, href }) {
	const router = useRouter();

	return (
		<a href={href}>
			<div
				className={`${styles.navitem} ${
					router.pathname == href ? styles.active : ""
				}`}>
				<div className={styles.navitem__content}>{content}</div>
				{/* <div className={styles.navitem__bar}></div> */}
			</div>
		</a>
	);
}

export default NavItem;
