import React from "react";
import styles from "../../css/shared/TextInput.module.scss";
import { PropTypes } from "prop-types";

const TextInput = ({
	label,
	name,
	id,
	placeholder,
	required = false,
	val,
	initialValue,
	handleChange,
	handleBlur,
	handleFocus,
	handleReset,
	addRequiredFlag = false,
}) => {
	return (
		<div className={styles.TextInput}>
			<label htmlFor={id} className={styles.TextInput_label}>
				{label}
				{addRequiredFlag && (
					<div className={styles.TextInput_requiredFlag}>*</div>
				)}
			</label>
			<input
				type="text"
				name={name}
				id={id}
				className={styles.TextInput_input}
				placeholder={placeholder}
				required={required}
				value={val}
				onChange={handleChange}
				onBlur={handleBlur}
				onFocus={handleFocus}
				onReset={handleReset}
			/>
		</div>
	);
};

export default TextInput;

// #PropTypes
TextInput.defaultProps = {
	required: false,
	addRequiredFlag: false,
};

TextInput.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	id: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleFocus: PropTypes.func,
	handleBlur: PropTypes.func,
	handleReset: PropTypes.func,
	addRequiredFlag: PropTypes.bool,
};
