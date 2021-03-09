import React from "react";
import styles from "../../styles/Sidebar.module.css";

// Components
import Logo from "components/Sidebar/Logo.js";
import NavItem from "components/Sidebar/NavItem.js";

function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Logo className={styles.logo} />
			<NavItem content="Home" />
			<NavItem content="Shop" />
			<NavItem content="Product" />
			<NavItem content="Cart" />
			<NavItem content="Checkout" />
		</div>
	);
}

export default Sidebar;
