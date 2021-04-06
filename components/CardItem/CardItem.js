import React from "react";
import styles from "./CartItem.module.css";

import InputNumber from "../InputNumber/InputNumber.js";

const CartItem = () => {
	return (
		<div className={styles.cartItem}>
			<div className={styles.cartItem__image}>
				<img
					src="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/11753/114418/2018-Fashion-New-Male-Shirt-Long-Sleeve-Mens-Clothes-Oblique-Button-Dress-Shirts-Mandarin-Collar-Men__02469.1574244136.jpg?c=2"
					alt=""
					width="100%"
					height="100%"
					style={{ borderRadius: "10px" }}
				/>
			</div>
			<div className={styles.cartItem__name}>Ao thun</div>
			<div className={styles.cartItem__price}>500000$</div>
			<div className={styles.cartItem__amount}>
				<InputNumber value={1} width="30px" height="30px" />
			</div>
		</div>
	);
};

export default CartItem;
