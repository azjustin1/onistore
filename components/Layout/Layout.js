import React, { useEffect, useState } from "react";
import styles from "../../styles/Layout.module.css";
import mainStyles from "../../styles/Main.module.css";

// Components
import Header from "components/Header/Header.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Footer from "components/Footer/Footer.js";

const Layout = ({ children }) => {
	const size = useWindowSize();

	// useEffect(() => {
	// 	if (size.width == 768) {
	// 		console.log("Move");
	// 		var element = document.getElementsByClassName(`${styles.sidebar}`)[0];
	// 		if (element) element.parentNode.removeChild(element);
	// 	}
	// }, [size]);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Header scrollSize={5} />
			</div>
			<div className={styles.sidebar}>
				<Sidebar />
			</div>
			<div className={mainStyles.content}>{children}</div>

			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
};

// Hook
function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Call handler right away so state gets updated with initial window size
		handleResize();

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount

	return windowSize;
}

export default Layout;
