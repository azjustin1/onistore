import React, { useEffect } from "react";
import layout from "../../styles/Layout.module.css";

function Button({ onClick, children }) {
	return (
		<div>
			<button onClick={onClick} className={layout.btn}>
				{children}
			</button>
		</div>
	);
}

export default Button;
