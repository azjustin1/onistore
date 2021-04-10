import Link from "next/link";
import React, { useState } from "react";

import { Image } from "next/image";
import styles from "./Card.module.css";
import Button from "../Button/Button";

function Card({
	href,
	imageSrc,
	width,
	height,
	productName,
	fakePrice,
	realPrice,
}) {
	const handleCardClick = () => {};
	return (
		<Link href={href}>
			<div className={styles.card} onClick={handleCardClick}>
				<img
					className={styles.img}
					src={imageSrc}
					alt=""
					width={width}
					height={height}
				/>
				<div className={styles.card__name}>{productName}</div>
				<div className={styles.card__fakePrice}>{fakePrice} VNĐ</div>
				<div className={styles.card__realPrice}>{realPrice} VNĐ</div>
			</div>
		</Link>
	);
}

export default Card;
