import React, { useEffect, useState } from "react";
import styles from "./Details.module.css";
import { useRouter } from "next/router";

import Button from "../components/Button/Button.js";
import InputNumber from "../components/InputNumber/InputNumber.js";

// Contexts
import { useCart, CART_ACTION } from "../contexts/CartProvider";
import { ACTION_TYPE } from "../contexts/GlobalStateProvider";

import axios from "axios";

function Detail() {
	const router = useRouter();
	const { dispatch } = useCart();
	const [amount, setAmount] = useState(1);

	const [product, setProduct] = useState({
		id: "",
		name: "",
		fakePrice: "",
		price: "",
		description: "",
		images: [],
	});

	const [image, setImage] = useState();

	useEffect(async () => {
		if (router.isReady) {
			try {
				const response = await axios.get(
					`http://localhost:9000/api/products${router.asPath}`
				);
				setProduct(response.data);
			} catch (error) {
				console.log(error.message);
			}
		}
	}, [router.asPath]);

	useEffect(() => {
		if (product.images) setImage(product.images[0]);
	}, [product]);

	const handleImageChange = async (e) => {
		setImage(e.target.src);
	};

	const onIncreaseQuantity = () => {
		if (amount + 1 <= product.quantity) setAmount((prev) => (prev = prev + 1));
	};

	const onDecreaseQuantity = () => {
		if (amount - 1 >= 1) setAmount((prev) => (prev = prev - 1));
	};

	const addToCart = async () => {
		dispatch({
			type: CART_ACTION.ADD_TO_CART,
			product: product,
			amount: amount,
		});
		dispatch({ type: CART_ACTION.UPDATE_CART });
	};

	return (
		<div className={styles.detail__container}>
			<div className={styles.detail__left}>
				<div className={styles.detail__img}>
					<img src={image} alt="" width="100%" height="100%" />
				</div>
				<div className={styles.detail__others}>
					{product.images
						? product.images.map((item, i) => {
								return (
									<img
										key={i}
										onClick={handleImageChange}
										src={item}
										alt=""
										height="100%"
										width="100%"
									/>
								);
						  })
						: ""}
				</div>
			</div>
			<div className={styles.detail__right}>
				<div className={styles.detail__name}>
					<p>{product.name}</p>
				</div>
				<div className={styles.detail__price}>
					<p style={{ textDecoration: "line-through", fontSize: "18pt" }}>
						đ{product.fakePrice}
					</p>
					<p style={{ fontSize: "28pt", fontWeight: "bold" }}>
						đ{product.price}
					</p>
				</div>

				<div className={styles.detail__description}>{product.description}</div>
				<div className={styles.detail__quantity}>
					<InputNumber
						width="40px"
						height="40px"
						value={amount}
						onIncrease={onIncreaseQuantity}
						onDecrease={onDecreaseQuantity}
					/>
				</div>
				<div className={styles.detail__button}>
					<Button
						onClick={addToCart}
						width="50%"
						height="50px"
						borderRadius="10px"
						fontWeight="bold">
						Add to cart
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Detail;
