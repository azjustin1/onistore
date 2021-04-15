import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Checkbox.module.css";

import {
	useGlobalState,
	ACTION_TYPE,
} from "../../contexts/GlobalStateProvider";
import { route } from "next/dist/next-server/server/router";

function Checkbox({ label }) {
	const router = useRouter();
	const { dispatchGlobal } = useGlobalState();
	const [isCheck, setIsCheck] = useState(false);

	const handleCheck = () => {
		if (isCheck === false) {
			dispatchGlobal({ type: ACTION_TYPE.FILTER, by: label });
		}

		setIsCheck((previous) => !previous);
	};

	return (
		<div className={`${styles.container}`} onClick={handleCheck}>
			<div
				className={`${styles.container__checkbox} ${
					isCheck ? styles.check : ""
				}`}>
				<div className={styles.container__checkbox__tick}></div>
				{isCheck}
			</div>
			<div className={styles.container__label}>{label}</div>
		</div>
	);
}

export default Checkbox;
