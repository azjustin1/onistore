import React from "react";
import styles from "./Checkout.module.css";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
const index = () => {
	return (
		<div>
			<div className={styles.checkout__container}>
				<div className={styles.checkout__left}>
					<h1>Checkout</h1>
					<Input height="30px" width="80%" placeholder="Email" />
					<Input height="30px" width="80%" placeholder="Address" />
					<Input height="30px" width="80%" placeholder="Phone number" />
					<Input
						height="200px"
						width="80%"
						multiline={true}
						placeholder="Note"
					/>
				</div>
				<div className={styles.checkout__right}>
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
		</div>
	);
};

export default index;
