import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";

// Components
import Input from "../Input/Input.js";
import Button from "../Button/Button.js";

import axios from "../../pages/api/axios";

function Modal({ children }) {
	const [isOpenSignIn, setOpen] = useState(true);

	const [user, setUser] = useState({
		email: "",
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
		// const response = await axios.post("/users/signin", user);
		try {
			console.log("Get");
			const response = await axios.get("/");
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSignUp = () => {
		console.log(newUser);
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
							placeholder="Username"
							icon="fas fa-user-circle"
							value={newUser.username}
							name="username"
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
						placeholder="Email"
						icon="fas fa-envelope"
						value={isOpenSignIn ? user.email : newUser.email}
						name="email"
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
							margin="30px auto 0 auto">
							Sign In
						</Button>
					) : (
						<Button
							onClick={handleSignUp}
							width="50%"
							height="40px"
							margin="30px auto 0 auto">
							Sign Up
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Modal;
