import React from "react";
import styles from "./CartItem.module.css";

import InputNumber from "../InputNumber/InputNumber.js";
import Button from "../Button/Button";

import { useCart, CART_ACTION } from "../../contexts/CartProvider";

const CartItem = ({
	id,
	name,
	price,
	quantity,
	amount,
	image,
	handleDelete,
}) => {
	const { state, dispatch } = useCart();
	const onIncrease = () => {
		if (amount + 1 <= quantity)
			dispatch({ type: CART_ACTION.INCREASE_QUANTITY, productId: id });
		dispatch({ type: CART_ACTION.UPDATE_CART });
	};

	const onDecrease = () => {
		if (amount - 1 >= 1)
			dispatch({ type: CART_ACTION.DECREASE_QUANTITY, productId: id });
		dispatch({ type: CART_ACTION.UPDATE_CART });
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
			<div className={styles.cartItem__price}>đ{price}</div>
			<div className={styles.cartItem__amount}>
				<InputNumber
					value={amount}
					width="30px"
					height="30px"
					onIncrease={onIncrease}
					onDecrease={onDecrease}
				/>
			</div>
			<div className={styles.cartItem__delete}>
				<Button
					onClick={handleDelete}
					width="100%"
					height="100%"
					borderRadius="10px">
					<i style={{ color: "red" }} className="fas fa-trash"></i>
				</Button>
			</div>
		</div>
	);
};

export default CartItem;
