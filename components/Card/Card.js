import React, { useEffect, useState } from "react";
import styles from "../../styles/Card.module.css";

function Card({ imageSrc, width, height, productName, fakePrice, realPrice }) {
	const [isSignIn, setSignIn] = useState(false);

	const handleCardClick = () => {};
	return (
		<div className={styles.card} onClick={handleCardClick}>
			<img
				className={styles.img}
				src={imageSrc}
				alt=""
				width={width}
				height={height}
			/>
			<div className={styles.card__name}>{productName}</div>
			<div className={styles.card__fakePrice}>{fakePrice}VNĐ</div>
			<div className={styles.card__realPrice}>{realPrice}VNĐ</div>
		</div>
	);
}

export default Card;
