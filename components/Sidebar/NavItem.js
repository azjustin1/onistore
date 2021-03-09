import React from "react";
import styles from "../../styles/Sidebar.module.css";

import Link from "next/link";

function NavItem({ content, href }) {
	return (
		<a href={href}>
			<div className={`${styles.navitem}`}>
				<div className={styles.navitem__content}>{content}</div>
				<div className={styles.navitem__bar}></div>
			</div>
		</a>
	);
}

export default NavItem;
