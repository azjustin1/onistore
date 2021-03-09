import React from "react";
import styles from "../../styles/Layout.module.css";

// Components
import Sidebar from "components/Sidebar/Sidebar.js";
import Footer from "components/Footer/Footer.js";

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Sidebar />
			<div className={styles.content}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
