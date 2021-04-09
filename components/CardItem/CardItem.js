import React from "react";
import styles from "./CartItem.module.css";

import InputNumber from "../InputNumber/InputNumber.js";
import Button from "../Button/Button";

import { useCart, CART_ACTION } from "../../contexts/CartProvider";

const CartItem = ({ id, name, price, quantity, image, handleDelete }) => {
	const { state, dispatch } = useCart();
	const onIncrease = () => {
		dispatch({ type: CART_ACTION.INCREASE_QUANTITY, productId: id });
	};

	const onDecrease = () => {
		dispatch({ type: CART_ACTION.DECREASE_QUANTITY, productId: id });
	};
	return (
		<div className={styles.cartItem}>
			<div className={styles.cartItem__image}>
				<img
					src={image}
					alt=""
					width="100%"
					height="100%"
					style={{ borderRadius: "10px" }}
				/>
			</div>
			<div className={styles.cartItem__name}>{name}</div>
			<div className={styles.cartItem__price}>{price}</div>
			<div className={styles.cartItem__amount}>
				<InputNumber
					value={quantity}
					width="30px"
					height="30px"
					onIncrease={onIncrease}
					onDecrease={onDecrease}
				/>
			</div>
			<Button
				onClick={handleDelete}
				width="30px"
				height="30px"
				borderRadius="10px">
				<i style={{ color: "red" }} className="fas fa-trash"></i>
			</Button>
		</div>
	);
};

export default CartItem;
