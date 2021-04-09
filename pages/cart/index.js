import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CardItem/CardItem";
import styles from "./Cart.module.css";

// Contexts
import { CART_ACTION, useCart } from "../../contexts/CartProvider";

function Cart() {
	const { state, dispatch } = useCart();
	useEffect(() => {
		console.log(state.count);
		dispatch({ type: CART_ACTION.FETCH_CART });
	}, [state.count]);

	const handleDelete = (id) => {
		dispatch({ type: CART_ACTION.DELETE_FROM_CART, productId: id });
	};
	return (
		<div className={styles.cart__container}>
			<div className={styles.cart__left}>
				<h1>Shopping Cart</h1>
				{state.products
					? state.products.map((item) => (
							<CartItem
								key={item.id}
								id={item.id}
								image={item.images[0]}
								name={item.name}
								price={item.price}
								quantity={item.quantity}
								handleDelete={() => {
									handleDelete(item.id);
								}}
							/>
					  ))
					: ""}
			</div>
			<div className={styles.cart__right}>
				<h1>Total</h1>
				<div className={styles.right__checkout}>
					<div className={styles.subTotal}>Subtotal:</div>
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
