import React, { useEffect, useState } from "react";

import styles from "./Sidebar.module.css";
import header from "../Header/Header.module.css";
import modal from "../../Modal/Modal.module.css";

// Components
import Logo from "./Logo.js";
import SearchBar from "./SearchBar.js";
import Navigation from "components/Navigation/Navigation.js";

function Sidebar() {
	useEffect(() => {
		const sidebar = document.getElementsByClassName(styles.sidebar)[0];

		// Get menu button on menu to allow to click outside the sidebar and menu button to close the sidebar
		const btnOpenSidebar = document.getElementsByClassName(
			header.header__btnMenu
		)[0];

		document.addEventListener("click", (e) => {
			if (!sidebar.contains(e.target) && !btnOpenSidebar.contains(e.target)) {
				sidebar.classList.remove(`${styles.active}`);
			}
		});

		// document.addEventListener("click", (e)=> {
		// 	if()
		// })
	});

	const openModal = () => {
		document.getElementsByClassName(modal.modal)[0].classList.add(modal.open);
	};

	return (
		<div id={styles.sidebar} className={`${styles.sidebar}`}>
			<Logo className={styles.logo} />
			<SearchBar />
			<Navigation href="/" content="Home" width="100%" height="50px" />
			<Navigation href="/shop" content="Shop" width="100%" height="50px" />
			<div onClick={openModal} className={styles.sidebar__account}>
				<p>
					<i style={{ fontSize: "28pt" }} className="fas fa-user-circle"></i>{" "}
					Account
				</p>
			</div>
		</div>
	);
}

export default Sidebar;
