import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CardItem/CardItem";
// Contexts
import { CART_ACTION, useCart } from "../../contexts/CartProvider";
import styles from "./Cart.module.css";

function Cart() {
	const { state, dispatch } = useCart();
	const router = useRouter();
	useEffect(() => {
		dispatch({ type: CART_ACTION.FETCH_CART });
	}, []);

	const handleDelete = (id) => {
		dispatch({ type: CART_ACTION.DELETE_FROM_CART, productId: id });
		dispatch({ type: CART_ACTION.UPDATE_CART });
	};

	const handleCheckout = () => {
		router.push("/checkout");
	};
	return (
		<div className={styles.cart__container}>
			<div className={styles.cart__left}>
				<h1>Shopping Cart</h1>
				{state.cart
					? state.cart.map((item) => (
							<CartItem
								key={item.product.id}
								id={item.product.id}
								// image={
								// 	item.product.images
								// 		? item.product.images[0]
								// 		: "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg"
								// }
								image="https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg"
								name={item.product.name}
								price={item.product.price}
								quantity={item.product.quantity}
								amount={item.amount}
								handleDelete={() => {
									handleDelete(item.product.id);
								}}
							/>
					  ))
					: ""}
			</div>
			<div className={styles.cart__right}>
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
	);
}

export default Cart;
