import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";
import sidebar from "../../styles/Sidebar.module.css";

import { useStateValue } from "../../context/StateProvider";
import { ACTION_TYPE, initialState } from "../../reducer/reducer";

function Header({ data }) {
	const [state, dispatch] = useStateValue();
	const [isLoading, setLoading] = useState();

	useEffect(() => {
		setLoading(initialState.isLoading);
		console.log(state);
	}, [data]);

	const [openSidebar, setOpenSidebar] = useState(false);

	const handleOpenSidebar = () => {
		// dispatch({
		// 	type: ACTION_TYPE.START_LOADING,
		// 	isLoading: !initialState.isLoading,
		// });
		var element = document.getElementById("sidebar");
		if (element.classList.contains(`${sidebar.active}`)) {
			element.classList.remove(`${sidebar.active}`);
		} else {
			element.classList.add(`${sidebar.active}`);
		}
	};
	return (
		<div className={`${styles.header}`}>
			<button id="btnOpenSidebar" onClick={handleOpenSidebar}>
				Click to show Sidebar
			</button>
		</div>
	);
}

export default Header;
