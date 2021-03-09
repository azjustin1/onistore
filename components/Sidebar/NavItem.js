import React from "react";
import styles from "../../styles/Sidebar.module.css";

function NavItem({ content }) {
	return (
		<div className={styles.navitem}>
			<div className={styles.navitem__content}>{content}</div>
			<div className={styles.navitem__bar}></div>
		</div>
	);
}

export default NavItem;
