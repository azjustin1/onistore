import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CardItem/CardItem";
// Contexts
import { CART_ACTION, useCart } from "../../contexts/CartProvider";
import styles from "./Cart.module.css";

function Cart() {
	const { state, dispatch } = useCart();
	useEffect(() => {
		dispatch({ type: CART_ACTION.FETCH_CART });
	}, []);

	const handleDelete = (id) => {
		dispatch({ type: CART_ACTION.DELETE_FROM_CART, productId: id });
		dispatch({ type: CART_ACTION.UPDATE_CART });
	};
	return (
		<div className={styles.cart__container}>
			<div className={styles.cart__left}>
				<h1>Shopping Cart</h1>
				{state.cart.map((item) => (
					<CartItem
						key={item.product.id}
						id={item.product.id}
						image={item.product.images ? item.product.images[0] : ""}
						name={item.product.name}
						price={item.product.price}
						quantity={item.product.quantity}
						amount={item.amount}
						handleDelete={() => {
							handleDelete(item.product.id);
						}}
					/>
				))}
			</div>
			<div className={styles.cart__right}>
				<h1>Total</h1>
				<div className={styles.right__checkout}>
					<div className={styles.subTotal}>Subtotal: {state.subTotal}</div>
					<div className={styles.delivery}>Delivery:</div>
					<div className={styles.total}>Total:</div>
					<div className={styles.checkoutButton}>
						<Button width="100%" height="50px" borderRadius="10px">
							Checkout
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
