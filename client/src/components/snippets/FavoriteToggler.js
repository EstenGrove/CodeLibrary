import React from "react";
import styles from "../../css/snippets/FavoriteToggler.module.scss";
import { PropTypes } from "prop-types";
import StarredIndicator from "./StarredIndicator";
import { blueGrey, yellow } from "../../helpers/utils_styles";

const notFave = {
	color: blueGrey[700],
};
const fave = {
	color: yellow[500],
};

const FavoriteToggler = ({ isStarred = false, toggleStarStatus }) => {
	return (
		<div className={styles.FavoriteToggler} onClick={toggleStarStatus}>
			<StarredIndicator isStarred={isStarred} />
			<label
				htmlFor="isStarred"
				className={styles.FavoriteToggler_label}
				style={isStarred ? fave : notFave}
			>
				{isStarred ? "Marked as Favorite" : "Mark as Favorite"}
			</label>
		</div>
	);
};

export default FavoriteToggler;

FavoriteToggler.defaultProps = {};

FavoriteToggler.propTypes = {};
