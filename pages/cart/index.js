import React from "react";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CardItem/CardItem";
import styles from "./Cart.module.css";

function Cart() {
	return (
		<div className={styles.cart__container}>
			<div className={styles.cart__left}>
				<h1>Shopping Cart</h1>
				<CartItem />
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
