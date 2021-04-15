import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";

// Components
import Input from "../../Input/Input.js";
import Button from "../../Button/Button.js";

import axios from "../../../api/axios";

// Context
import {
	useGlobalState,
	ACTION_TYPE,
} from "../../../contexts/GlobalStateProvider";

const Modal = () => {
	const { state, dispatchGlobal } = useGlobalState();
	const [isOpenSignIn, setOpen] = useState(true);

	const [message, setMessage] = useState({
		type: "",
		content: "",
	});

	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const [newUser, setNewUser] = useState({
		email: "",
		username: "",
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
			dispatchGlobal({ type: ACTION_TYPE.START_LOADING });
			const response = await axios.post("/signin", user);

			dispatchGlobal({
				type: ACTION_TYPE.SIGN_IN,
				token: response.data.token,
				username: user.username,
			});
			dispatchGlobal({ type: ACTION_TYPE.FINISH_LOADING });
			document
				.getElementsByClassName(styles.modal)[0]
				.classList.remove(styles.open);
		} catch (error) {
			dispatchGlobal({ type: ACTION_TYPE.FINISH_LOADING });
			setMessage({ type: "error", content: "Sign in failed" });
		}
	};

	const handleSignUp = async () => {
		try {
			const response = await axios.post("/signup", newUser);

			// document
			// 	.getElementsByClassName(styles.modal)[0]
			// 	.classList.remove(styles.open);
			setMessage({
				type: "success",
				content: "Sign up successfully",
			});
		} catch (error) {
			setMessage({ type: "error", content: "Sign up failed" });
			dispatchGlobal({ type: ACTION_TYPE.FINISH_LOADING });
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
					{message ? (
						<div style={{ textAlign: "center" }}>
							{message.type === "error" ? (
								<p style={{ color: "red" }}>{message.content}</p>
							) : (
								<p style={{ color: "green" }}>{message.content}</p>
							)}
						</div>
					) : (
						""
					)}
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
