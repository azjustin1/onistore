import React, { useEffect, useState } from "react";
import styles from "./Details.module.css";

import Button from "../components/Button/Button.js";
import InputNumber from "../components/InputNumber/InputNumber.js";

const images = [
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUSI4b0S1SizX3v4tiKDYw7L3_COlHWG8Sw&usqp=CAU",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiD1gCk5Qu0ZmRRuHa-Ff5shdRCm-hMEbkQg&usqp=CAU",
	"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/affordableonline-1594998657.jpg?crop=0.502xw:1.00xh;0.251xw,0&resize=640:*",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8embuWiMASP8mo3fjeNxmBaI-kfA8u9CsQ&usqp=CAU",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNoyfVgV06dGgORM8mRD29j_ygcq4dTqQqg&usqp=CAU",
];

function Detail() {
	const [quantity, setQuantity] = useState({
		value: 1,
		min: 1,
		max: 10,
	});

	const [image, setImage] = useState();

	useEffect(() => {
		setImage(images[0]);
	}, []);

	const handleImageChange = (e) => {
		setImage(e.target.src);
		document.getElementsByClassName(styles.detail__img)[0].style.animation =
			"0.5";
	};

	const onIncrease = () => {
		if (quantity.value + 1 <= quantity.max)
			setQuantity({ ...quantity, value: quantity.value + 1 });
	};

	const onDecrease = () => {
		if (quantity.value - 1 >= quantity.min)
			setQuantity({ ...quantity, value: quantity.value - 1 });
	};

	return (
		<div className={styles.detail__container}>
			<div className={styles.detail__left}>
				<div className={styles.detail__img}>
					<img src={image} alt="" width="100%" height="100%" />
				</div>
				<div className={styles.detail__others}>
					{images.map((item, i) => {
						if (i < 4)
							return (
								<img
									onClick={handleImageChange}
									src={item}
									alt=""
									height="100%"
									width="100%"
								/>
							);
					})}
				</div>
			</div>
			<div className={styles.detail__right}>
				<div className={styles.detail__name}>
					<p>T-Shirt</p>
				</div>
				<div className={styles.detail__price}>
					<p style={{ textDecoration: "line-through", fontSize: "18pt" }}>
						1500000 VND
					</p>
					<p style={{ fontSize: "28pt", fontWeight: "bold" }}>500000 VND</p>
				</div>

				<div className={styles.detail__description}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae
					eveniet culpa officia quidem mollitia impedit iste asperiores nisi
					reprehenderit consequatur, autem, nostrum pariatur enim?
				</div>
				<div className={styles.detail__quantity}>
					<InputNumber
						width="100px"
						value={quantity.value}
						onIncrease={onIncrease}
						onDecrease={onDecrease}
					/>
				</div>
				<div className={styles.detail__button}>
					<Button
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
