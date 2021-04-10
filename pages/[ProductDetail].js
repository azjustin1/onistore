import React, { useEffect, useState } from "react";
import styles from "./Details.module.css";
import { useRouter } from "next/router";

import Button from "../components/Button/Button.js";
import InputNumber from "../components/InputNumber/InputNumber.js";

// Contexts
import { useCart, CART_ACTION } from "../contexts/CartProvider";
import { ACTION_TYPE } from "../contexts/GlobalStateProvider";

let data = {
	id: 1,
	name: "Blouse",
	fakePrice: "1500000 VND",
	realPrice: "500000 VND",
	quantity: 20,
	description:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
	images: [
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUSI4b0S1SizX3v4tiKDYw7L3_COlHWG8Sw&usqp=CAU",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiD1gCk5Qu0ZmRRuHa-Ff5shdRCm-hMEbkQg&usqp=CAU",
		"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/affordableonline-1594998657.jpg?crop=0.502xw:1.00xh;0.251xw,0&resize=640:*",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8embuWiMASP8mo3fjeNxmBaI-kfA8u9CsQ&usqp=CAU",
	],
};

import axios from "../api/axios";
import { route } from "next/dist/next-server/server/router";

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
			const response = await axios.get(`/products${router.asPath}`);
			setProduct(response.data.products);
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
						{product.fakePrice}
					</p>
					<p style={{ fontSize: "28pt", fontWeight: "bold" }}>
						{product.realPrice}
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
