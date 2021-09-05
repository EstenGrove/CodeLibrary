import React from "react";
import styles from "../../css/shared/MultiSelectOption.module.scss";
import sprite from "../../assets/icons/carets-arrows.svg";
import { PropTypes } from "prop-types";

const MultiSelectOption = ({
	isDisabled = false,
	isSelected = false,
	option,
	customOption = null,
	handleSelect,
}) => {
	const custom = {
		opacity: isDisabled ? ".4" : "1",
		cursor: isDisabled ? "not-allowed" : "pointer",
	};
	return (
		<li
			className={
				isSelected
					? styles.MultiSelectOption_isSelected
					: styles.MultiSelectOption
			}
			onClick={isDisabled ? null : () => handleSelect(option)}
			style={custom}
		>
			{!customOption && <span>{option}</span>}
			{customOption && { option }}
			{isSelected && (
				<svg className={styles.MultiSelectOption_icon}>
					<use xlinkHref={`${sprite}#icon-checkmark-outline`}></use>
				</svg>
			)}
		</li>
	);
};

export default MultiSelectOption;

// single dropdown menu option
MultiSelectOption.defaultProps = {
	isSelected: false,
};
MultiSelectOption.propTypes = {
	isSelected: PropTypes.bool.isRequired,
	option: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	handleSelect: PropTypes.func.isRequired,
};
