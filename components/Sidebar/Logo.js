import React from "react";
import styles from "../../styles/Sidebar.module.css";

function Logo() {
	return (
		<div className={styles.logo}>
			<img className={styles.logo__img} src="/favicon.ico" alt="" />
			<h4>Onistore</h4>
		</div>
	);
}

export default Logo;
