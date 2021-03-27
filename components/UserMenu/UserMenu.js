import React from "react";
import { useGlobalState } from "../../context/GlobalStateProvider";
import styles from "./UserMenu.module.css";

function UserMenu() {
	const { state } = useGlobalState();
	const openModal = () => {
		document.getElementsByClassName(modal.modal)[0].classList.add(modal.open);
	};
	return (
		<div>
			<div onClick={openModal} className={styles.userMenu}>
				<p>
					<i style={{ fontSize: "28pt" }} className="fas fa-user-circle"></i>{" "}
					{state.isSignIn ? "Jack" : "Account"}
				</p>
			</div>
		</div>
	);
}

export default UserMenu;
