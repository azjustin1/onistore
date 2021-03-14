import React, { useEffect, useState } from "react";

import styles from "../../../styles/Sidebar.module.css";

// Components
import Logo from "./Logo.js";
import SearchBar from "./SearchBar.js";
import Navigation from "components/Navigation/Navigation.js";

function Sidebar() {
	useEffect(() => {
		var sidebar = document.getElementById("sidebar");

		// Get menu button on menu to allow to click outside the sidebar and menu button to close the sidebar
		var btnOpenSidebar = document.getElementById("btnOpenSidebar");
		document.addEventListener("click", (e) => {
			if (!sidebar.contains(e.target) && !btnOpenSidebar.contains(e.target)) {
				sidebar.classList.remove(`${styles.active}`);
			}
		});
	});

	return (
		<div id="sidebar" className={`${styles.sidebar}`}>
			<Logo className={styles.logo} />
			<SearchBar />
			<Navigation href="/" content="Home" width="100%" height="50px" />
			<Navigation href="/shop" content="Shop" width="100%" height="50px" />
		</div>
	);
}

export default Sidebar;
