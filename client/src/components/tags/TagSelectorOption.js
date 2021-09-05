import React from "react";
import styles from "../../css/tags/TagSelectorOption.module.scss";
import sprite from "../../assets/icons/carets-arrows.svg";
import { PropTypes } from "prop-types";

const TagSelectorOption = ({
	tag = {},
	handleSelectTags,
	selectedTags = [],
	isSelected = false,
}) => {
	const borderCol = {
		borderLeft: `3px solid ${tag?.color}`,
	};

	return (
		<li
			className={
				isSelected
					? styles.TagSelectorOption_isSelected
					: styles.TagSelectorOption
			}
			onClick={handleSelectTags}
			style={borderCol}
		>
			<span className={styles.TagSelectorOption_option}>{tag?.name}</span>
			{isSelected && (
				<svg className={styles.TagSelectorOption_icon}>
					<use xlinkHref={`${sprite}#icon-checkmark-outline`}></use>
				</svg>
			)}
		</li>
	);
};

export default TagSelectorOption;

TagSelectorOption.defaultProps = {};

TagSelectorOption.propTypes = {};
