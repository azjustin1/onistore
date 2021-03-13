import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";
import sidebar from "../../styles/Sidebar.module.css";

import { useStateValue } from "../../context/StateProvider";

function Header({ scrollSize }) {
	const handleOpenSidebar = () => {
		var element = document.getElementById("sidebar");
		if (element.classList.contains(`${sidebar.active}`)) {
			element.classList.remove(`${sidebar.active}`);
		} else {
			element.classList.add(`${sidebar.active}`);
		}
	};
	return (
		<div id="header" className={`${styles.header}`}>
			<h2 className={styles.header__brandName}>Onistore</h2>
			<button
				id="btnOpenSidebar"
				className={styles.header__btnMenu}
				onClick={handleOpenSidebar}>
				<i className="fa fa-bars"></i>
			</button>
		</div>
	);
}

export default Header;
