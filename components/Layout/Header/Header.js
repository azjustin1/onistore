import React, { useEffect, useState } from "react";
import styles from "../../../styles/Header.module.css";
import sidebar from "../../../styles/Sidebar.module.css";
import layout from "../../../styles/Layout.module.css";

// Components
import Button from "components/Button/Button.js";

function Header() {
	const handleOpenSidebar = () => {
		const element = document.getElementsByClassName(sidebar.sidebar)[0];

		if (element.classList.contains(`${sidebar.active}`)) {
			element.classList.remove(`${sidebar.active}`);
		} else {
			element.classList.add(`${sidebar.active}`);
		}
	};
	return (
		<div className={`${styles.header}`}>
			<h2 className={styles.header__brandName}>Onistore</h2>
			<div className={styles.header__btnMenu}>
				<Button onClick={handleOpenSidebar}>
					<i className="fa fa-bars"></i>
				</Button>
			</div>
		</div>
	);
}

export default Header;