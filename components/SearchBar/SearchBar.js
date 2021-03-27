import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
	return (
		<div className={styles.search}>
			<button className={styles.search__button} type="submit">
				<i className="fa fa-search"></i>
			</button>
			<input
				type="text"
				className={styles.search__input}
				placeholder="Search..."
			/>
		</div>
	);
}

export default SearchBar;
