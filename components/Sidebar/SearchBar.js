import React from "react";
import styles from "../../styles/Sidebar.module.css";

function SearchBar() {
	return (
		<div className={styles.search}>
			<button className={styles.search__button} type="submit">
				<i class="fa fa-search"></i>
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
