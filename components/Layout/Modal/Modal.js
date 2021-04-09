import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";

// Components
import Input from "../../Input/Input.js";
import Button from "../../Button/Button.js";

import axios from "../../../api/axios";
// import axios from "axios";

// Context
import {
	useGlobalState,
	ACTION_TYPE,
} from "../../../contexts/GlobalStateProvider";

const Modal = () => {
	const { state, dispatch } = useGlobalState();
	const [isOpenSignIn, setOpen] = useState(true);

	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const [newUser, setNewUser] = useState({
		username: "",
		email: "",
		password: "",
	});

	useEffect(() => {
		const modal = document.getElementsByClassName(styles.modal)[0];
		const modal__container = document.getElementsByClassName(
			styles.modal__container
		)[0];

		modal.addEventListener("click", (e) => {
			if (!modal__container.contains(e.target)) {
				modal.classList.remove(styles.open);
			}
		});
	});

	const handleCloseModal = () => {
		document
			.getElementsByClassName(styles.modal)[0]
			.classList.remove(styles.open);
	};

	const openSignIn = () => {
		setOpen(true);
	};

	const openSignUp = () => {
		setOpen(false);
	};

	const handleInputChange = (e) => {
		if (isOpenSignIn) {
			setUser({ ...user, [e.target.name]: e.target.value });
		} else {
			setNewUser({ ...newUser, [e.target.name]: e.target.value });
		}
	};

	const handleSignIn = async () => {
		try {
			dispatch({ type: ACTION_TYPE.START_LOADING });
			const response = await axios.post("/signin", user);

			dispatch({
				type: ACTION_TYPE.SET_TOKEN,
				payload: response.data.accessToken,
			});

			dispatch({
				type: ACTION_TYPE.SIGN_IN,
			});
			dispatch({ type: ACTION_TYPE.FINISH_LOADING });
			document
				.getElementsByClassName(styles.modal)[0]
				.classList.remove(styles.open);
		} catch (error) {
			dispatch({ type: ACTION_TYPE.FINISH_LOADING });
		}
	};

	const handleSignUp = async () => {
		try {
			const response = await axios.get("/api/products");
			console.log(response);
			document
				.getElementsByClassName(styles.modal)[0]
				.classList.remove(styles.open);
		} catch (error) {
			console.log(error);
			dispatch({ type: ACTION_TYPE.FINISH_LOADING });
		}
	};

	return (
		<div className={`${styles.modal}`}>
			<div className={styles.modal__container}>
				<div className={styles.container__header}>
					<div
						className={styles.container__header__icon}
						onClick={handleCloseModal}>
						<i className="fas fa-times"></i>
					</div>
				</div>
				<div className={styles.container__nav}>
					<div
						onClick={openSignIn}
						className={`${styles.container__nav__signin} ${
							isOpenSignIn ? styles.active : ""
						}`}>
						Sign In
					</div>
					<div
						onClick={openSignUp}
						className={`${styles.container__nav__signup} ${
							!isOpenSignIn ? styles.active : ""
						}`}>
						Sign Up
					</div>
				</div>
				<div className={styles.container__content}>
					{!isOpenSignIn ? (
						<Input
							type="text"
							height="50px"
							width="90%"
							margin="20px auto"
							placeholder="Email"
							icon="fas fa-envelope"
							value={newUser.email}
							name="email"
							onChange={handleInputChange}
						/>
					) : (
						""
					)}

					<Input
						type="text"
						height="50px"
						width="90%"
						margin="20px auto"
						placeholder="Username"
						icon="fas fa-user-circle"
						value={isOpenSignIn ? user.username : newUser.username}
						name="username"
						onChange={handleInputChange}
					/>
					<Input
						type="password"
						height="50px"
						width="90%"
						margin="20px auto"
						placeholder="Password"
						icon="fas fa-key"
						value={isOpenSignIn ? user.password : newUser.password}
						name="password"
						onChange={handleInputChange}
					/>

					{isOpenSignIn ? (
						<Button
							onClick={handleSignIn}
							width="50%"
							height="40px"
							borderRadius="10px"
							margin="30px auto 0 auto">
							Sign In
						</Button>
					) : (
						<Button
							onClick={handleSignUp}
							width="50%"
							height="40px"
							borderRadius="10px"
							margin="30px auto 0 auto">
							Sign Up
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Modal;
