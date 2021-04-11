import React, { useEffect, useState } from "react";
import styles from "./Checkout.module.css";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useCart } from "../../contexts/CartProvider";

import axios from "axios";

const index = () => {
	const { state } = useCart();
	const [order, setOrder] = useState({
		name: "",
		email: "",
		address: "",
		phone: "",
		note: "",
	});

	const [productCheckOutDtoList, setProductCheckOutDtoList] = useState([]);

	useEffect(() => {
		if (localStorage.getItem("cart")) {
			const cart = JSON.parse(localStorage.getItem("cart"));
			cart.map((item) => {
				setProductCheckOutDtoList((productCheckOutDtoList) => [
					...productCheckOutDtoList,
					{
						productCustomDto: {
							id: item.product.id,
							quantity: item.product.quantity,
						},
						amount: item.amount,
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
		const data = {
			productCheckOutDtoList: productCheckOutDtoList,
			name: order.name,
			email: order.email,
			phone: order.phone,
			address: order.address,
			note: order.note,
		};
		console.log(data);
		try {
			const response = await axios.post(
				"http://localhost:9000/api/check-out",
				data,
				{
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				}
			);
		} catch (error) {
			console.log(error);
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
