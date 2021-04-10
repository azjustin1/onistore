// Components
import Logo from "components/Logo/Logo.js";
import Navigation from "components/Navigation/Navigation.js";
import SearchBar from "components/SearchBar/SearchBar.js";
import UserMenu from "components/UserMenu/UserMenu";
import React, { useEffect } from "react";
import header from "../Header/Header.module.css";
import styles from "./Sidebar.module.css";

import { useCart } from "../../../contexts/CartProvider";

function Sidebar() {
	const { state } = useCart();
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
	});

	return (
		<div id={styles.sidebar} className={`${styles.sidebar}`}>
			<Logo className={styles.logo} />
			<SearchBar />
			<Navigation
				href="/"
				content="Home"
				icon="fas fa-home"
				width="100%"
				height="50px"
			/>
			<Navigation
				href="/shop"
				content="Shop"
				icon="fas fa-tshirt"
				width="100%"
				height="50px"
			/>
			<Navigation
				href="/cart"
				content={"Cart " + "(" + state.cart.length + ")"}
				icon="fas fa-shopping-cart"
				width="100%"
				height="50px"
			/>
			<Navigation
				href="/checkout"
				content="Checkout"
				icon="fas fa-credit-card"
				width="100%"
				height="50px"
			/>
			<UserMenu />
		</div>
	);
}

export default Sidebar;
