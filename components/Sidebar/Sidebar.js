import React from "react";
import styles from "../../styles/Sidebar.module.css";

// Components
import Logo from "components/Sidebar/Logo.js";
import NavItem from "components/Sidebar/NavItem.js";

function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Logo className={styles.logo} />
			<NavItem href="/" content="Home" />
			<NavItem href="/shop" content="Shop" />
			<NavItem href="/products" content="Products" />
			{/* <NavItem href="/checkout" content="Checkout" /> */}
		</div>
	);
}

export default Sidebar;
