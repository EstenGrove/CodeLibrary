import React from "react";
import styles from "../../css/snippets/StarredIndicator.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import { blueGrey, yellow } from "../../helpers/utils_styles";

const starredIcon = `star`;
const notStarredIcon = `star_outline`;

const starCss = {
	fill: yellow[500],
};
const notStarCss = {
	fill: blueGrey[700],
};

const StarredIndicator = ({ isStarred = false, toggleStarStatus }) => {
	return (
		<div
			className={styles.StarredIndicator}
			title={`This snippet is ${isStarred ? "starred" : "not starred"}`}
		>
			<svg
				className={styles.StarredIndicator_icon}
				onClick={toggleStarStatus}
				style={isStarred ? starCss : notStarCss}
			>
				<use
					xlinkHref={`${sprite}#icon-${
						isStarred ? starredIcon : notStarredIcon
					}`}
				></use>
			</svg>
		</div>
	);
};

export default StarredIndicator;

StarredIndicator.defaultProps = {};

StarredIndicator.propTypes = {};
