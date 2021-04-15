import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./Checkout.module.css";
// Contexts
import {
	useGlobalState,
	ACTION_TYPE,
} from "../../contexts/GlobalStateProvider";
import { CART_ACTION, useCart } from "../../contexts/CartProvider";

import axios from "../../api/axios";

const index = () => {
	const { dispatchGlobal } = useGlobalState();
	const { state, dispatch } = useCart();
	const [order, setOrder] = useState({
		name: "",
		email: "",
		address: "",
		phone: "",
		note: "",
		total: "",
	});

	const [message, setMessage] = useState({
		type: "",
		content: "",
	});

	const [productCheckOutDtoList, setProductCheckOutDtoList] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		if (localStorage.getItem("cart")) {
			const cart = JSON.parse(localStorage.getItem("cart"));
			cart.map((item) => {
				setOrder({
					...order,
					total: order.total + item.product.price * item.amount,
				});
				// setProductCheckOutDtoList((productCheckOutDtoList) => [
				// 	...productCheckOutDtoList,
				// 	{
				// 		productCustomDto: {
				// 			id: item.product.id,
				// 			quantity: item.product.quantity,
				// 		},
				// 		amount: item.amount,
				// 	},
				// ]);
				setCart((cart) => [
					...cart,
					{
						id: item.product.id,
						quantity: item.amount,
						price: item.product.price,
					},
				]);
			});
		}
		return;
	}, []);

	const handleInputChange = (e) => {
		setOrder({ ...order, [e.target.name]: e.target.value });
	};

	const handleCheckout = async () => {
		if (
			order.email === "" ||
			order.name === "" ||
			order.phone === "" ||
			order.address === "" ||
			order.note === ""
		) {
			setMessage({ type: "error", content: "Please enter all information" });
			return;
		}
		const data = {
			// productCheckOutDtoList: productCheckOutDtoList,
			cart: cart,
			name: order.name,
			email: order.email,
			phone: order.phone,
			address: order.address,
			note: order.note,
			total: order.total,
		};
		if (state.cart.length === 0) {
			setMessage({ type: "error", content: "No items in cart" });
			return;
		}
		try {
			dispatchGlobal({ type: ACTION_TYPE.START_LOADING });
			const response = await axios.post("/checkout", data, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			console.log(response.data);
			if (response.status === 200) {
				setMessage({ type: "success", content: "Checkout Successfully" });
				dispatchGlobal({ type: ACTION_TYPE.FINISH_LOADING });
				dispatch({ type: CART_ACTION.CLEAR_CART });
			}
		} catch (error) {
			setMessage({ type: "error", content: "Checkout Failed" });
		}
	};
	return (
		<div>
			<div className={styles.checkout__container}>
				<div className={styles.checkout__left}>
					<h1>Checkout</h1>
					<Input
						onChange={handleInputChange}
						value={order.name}
						name="name"
						height="30px"
						width="80%"
						placeholder="Name"
					/>
					<Input
						onChange={handleInputChange}
						value={order.email}
						name="email"
						height="30px"
						width="80%"
						placeholder="Email"
					/>
					<Input
						onChange={handleInputChange}
						value={order.address}
						name="address"
						height="30px"
						width="80%"
						placeholder="Address"
					/>
					<Input
						onChange={handleInputChange}
						value={order.phone}
						name="phone"
						height="30px"
						width="80%"
						placeholder="Phone number"
					/>
					<Input
						onChange={(e) => {
							setOrder({ ...order, note: e.target.value });
						}}
						value={order.note}
						name="note"
						height="200px"
						width="80%"
						multiline={true}
						placeholder="Note"
					/>
				</div>
				<div className={styles.checkout__right}>
					<h1>Total</h1>
					<div className={styles.right__checkout}>
						<div className={styles.subTotal}>Subtotal: đ{state.subTotal}</div>
						<div className={styles.delivery}>Delivery: đ{state.delivery}</div>
						<div className={styles.total}>
							Total: đ{state.subTotal + state.delivery}
						</div>
						{message ? (
							<div>
								{message.type === "error" ? (
									<p style={{ color: "red" }}>{message.content}</p>
								) : (
									<p style={{ color: "green" }}>{message.content}</p>
								)}
							</div>
						) : (
							""
						)}
						<div className={styles.checkoutButton}>
							<Button
								onClick={handleCheckout}
								width="100%"
								height="50px"
								borderRadius="10px">
								Checkout
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
