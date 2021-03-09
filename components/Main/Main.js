import React from "react";
import styles from "../../styles/Main.module.css";

// Components
import Card from "components/Card/Card.js";

function Main() {
	return (
		<div className={styles.main}>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}

export default Main;
