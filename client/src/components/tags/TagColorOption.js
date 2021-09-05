import React from "react";
import styles from "../../css/tags/TagColorOption.module.scss";
import { PropTypes } from "prop-types";
import RadioButton from "../shared/RadioButton";

const TagColorOption = ({
	color = {},
	selectColor,
	isDisabled = false,
	isSelected = false,
}) => {
	const custom = {
		backgroundColor: color.color,
		boxShadow: isSelected ? `0 0 0 2px hsla(240, 100%, 50%, 0.3)` : "",
	};

	return (
		<button
			type="button"
			disabled={isDisabled}
			className={styles.TagColorOption}
			onClick={selectColor}
			style={custom}
		>
			<div className={styles.TagColorOption_color}></div>
		</button>
	);
};

export default TagColorOption;

TagColorOption.defaultProps = {};

TagColorOption.propTypes = {};
