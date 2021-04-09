import React, { useEffect, useRef, useState } from "react";
import {
	useGlobalState,
	ACTION_TYPE,
} from "../../contexts/GlobalStateProvider";

import modal from "../Layout/Modal/Modal.module.css";
import styles from "./UserMenu.module.css";

function UserMenu() {
	const { state, dispatch } = useGlobalState();
	const [isOpen, setOpen] = useState(false);
	const menu = useRef();

	useEffect(() => {
		// add when mounted
		document.addEventListener("mousedown", handleMenuClick);
		// return function to be called when unmounted
		return () => {
			document.removeEventListener("mousedown", handleMenuClick);
		};
	}, []);

	const handleMenuClick = (e) => {
		if (!menu.current.contains(e.target)) {
			document
				.getElementsByClassName(styles.userMenu__menu)[0]
				.classList.remove(styles.open);
		}
	};

	const openModal = () => {
		document.getElementsByClassName(modal.modal)[0].classList.add(modal.open);
	};

	const handleSignOut = async () => {
		await dispatch({ type: ACTION_TYPE.SIGN_OUT });
		document
			.getElementsByClassName(styles.userMenu__menu)[0]
			.classList.remove(styles.open);
	};
	const openUserMenu = () => {
		console.log("Open");
		document
			.getElementsByClassName(styles.userMenu__menu)[0]
			.classList.add(styles.open);
	};
	return (
		<div>
			<div
				onClick={!state.isSignIn ? openModal : openUserMenu}
				className={styles.userMenu}>
				<div ref={menu} className={`${styles.userMenu__menu} `}>
					<ul>
						<li onClick={handleSignOut}>Sign Out</li>
					</ul>
				</div>
				<p>
					<i style={{ fontSize: "28pt" }} className="fas fa-user-circle"></i>{" "}
					{state.isSignIn ? "Jack" : "Account"}
				</p>
			</div>
		</div>
	);
}

export default UserMenu;
