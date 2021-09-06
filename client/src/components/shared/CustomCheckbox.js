import React from "react";
import styles from "../../css/shared/CustomCheckbox.module.scss";
import { PropTypes } from "prop-types";

const CustomCheckbox = ({
	label,
	name,
	id,
	val,
	isDisabled = false,
	handleCheckbox,
	customStyles = {},
}) => {
	return (
		<div className={styles.CustomCheckbox} style={customStyles}>
			<input
				type="checkbox"
				name={name}
				id={id}
				checked={val}
				onChange={handleCheckbox}
				disabled={isDisabled}
				className={styles.CustomCheckbox_checkbox}
			/>
			<label htmlFor={id} className={styles.CustomCheckbox_label}>
				{label}
			</label>
		</div>
	);
};

export default CustomCheckbox;

CustomCheckbox.defaultProps = {};

CustomCheckbox.propTypes = {};
