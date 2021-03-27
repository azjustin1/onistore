import React, { useEffect, useState } from "react";
import layout from "./Layout.module.css";
import main from "../../pages/Main.module.css";

// Components
import Header from "components/Layout/Header/Header.js";
import Sidebar from "components/Layout/Sidebar/Sidebar.js";
import Footer from "components/Layout/Footer/Footer.js";
import Button from "components/Button/Button.js";
import Modal from "components/Layout/Modal/Modal.js";
import Loader from "components/Layout/Loader/Loader.js";
import { useGlobalState, ACTION_TYPE } from "../../context/GlobalStateProvider";

const Layout = ({ children }) => {
	const { state, dispatch } = useGlobalState();
	const size = useWindowSize();

	useEffect(() => {
		dispatch({ type: ACTION_TYPE.AUTHENTICATE });
	}, [state.isSignIn]);

	useEffect(() => {
		document.onscroll = () => {
			if (
				document.body.scrollTop > 100 ||
				document.documentElement.scrollTop > 100
			) {
				document.getElementById(`${layout.backToTop}`).style.display = "block";
			} else {
				document.getElementById(`${layout.backToTop}`).style.display = "none";
			}
		};
	}, [size]);

	const handleBackToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className={layout.container}>
			<Modal />
			<Loader />

			<div className={layout.header}>
				<Header scrollSize={5} />
			</div>
			<div className={layout.sidebar}>
				<Sidebar />
			</div>
			<div className={main.main}>{children}</div>
			<div id={layout.backToTop}>
				<Button height="50px" id={layout.backToTop} onClick={handleBackToTop}>
					<i className="fa fa-arrow-up"></i>
				</Button>
			</div>
			<div className={layout.footer}>
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
