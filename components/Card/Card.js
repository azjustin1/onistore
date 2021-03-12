import React from "react";
import styles from "../../styles/Card.module.css";

function Card({ content, width, height }) {
	return (
		<div className={styles.card}>
			<img
				className={styles.img}
				src="/tuyettran.jpg"
				alt=""
				width={width}
				height={height}
			/>
			<div className={styles.card__name}>T-Shit</div>
			<div className={styles.card__fakePrice}>500.000 VND</div>
			<div className={styles.card__realPrice}>100.000 VND</div>
		</div>
	);
}

export default Card;
