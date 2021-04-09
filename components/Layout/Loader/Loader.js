import React, { useEffect } from "react";
import { useGlobalState } from "../../../contexts/GlobalStateProvider";
import styles from "./Loader.module.css";

function Loader() {
	const { state } = useGlobalState();

	return (
		<div className={`${styles.loader} ${state.isLoading ? styles.show : ""}`}>
			<div className={styles.loader__circle}></div>
		</div>
	);
}

export default Loader;
