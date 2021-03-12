import React, { useEffect, useState } from "react";
import styles from "../../styles/Sidebar.module.css";

// Components
import Logo from "components/Sidebar/Logo.js";
import SearchBar from "components/Sidebar/SearchBar.js";
import NavItem from "components/Sidebar/NavItem.js";

import { useStateValue } from "../../context/StateProvider";
import { initialState } from "../../reducer/reducer";

function Sidebar() {
	useEffect(() => {
		var sidebar = document.getElementById("sidebar");
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
			<NavItem href="/" content="Home" />
			<NavItem href="/shop" content="Shop" />
			<NavItem href="/products" content="Products" />
			{/* <NavItem href="/checkout" content="Checkout" /> */}
		</div>
	);
}

export default Sidebar;
