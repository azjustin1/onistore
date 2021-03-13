import React from "react";
import styles from "../../styles/Card.module.css";
import Image from "next/image";

function Card({ imageSrc, width, height, productName, fakePrice, realPrice }) {
	return (
		<div className={styles.card}>
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
