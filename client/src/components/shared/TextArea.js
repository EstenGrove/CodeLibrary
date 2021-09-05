import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import styles from "../../css/shared/TextArea.module.scss";

const TextArea = ({
	label,
	id,
	name,
	placeholder,
	val = "",
	handleChange,
	handleBlur,
	required = false,
	maxChar = "none",
	readOnly = false,
	disabled = false,
	addRequiredFlag = false,
	enableCharCount = false,
	customStyles = {},
}) => {
	const [charCount, setCharCount] = useState(0);

	useEffect(() => {
		setCharCount(val.length);
	}, [val]);

	return (
		<div className={styles.TextArea}>
			<label htmlFor={id} className={styles.TextArea_label}>
				{label}
				{addRequiredFlag && (
					<div class={styles.TextArea_label_requiredFlag}>*</div>
				)}
			</label>
			<textarea
				value={val}
				name={name}
				id={id}
				disabled={disabled}
				readOnly={readOnly}
				placeholder={placeholder}
				onChange={handleChange}
				onBlur={handleBlur}
				className={styles.TextArea_input}
				maxLength={maxChar}
				required={required}
			/>
			{enableCharCount && (
				<div
					className={
						charCount === maxChar
							? styles.outOfChars
							: styles.TextArea_charCount
					}
				>{`${charCount} / ${maxChar}`}</div>
			)}
		</div>
	);
};
export default TextArea;

// props w/ default values
TextArea.defaultProps = {
	label: null,
	val: "",
	required: false,
	maxChar: "none",
	readOnly: false,
	disabled: false,
	addRequiredFlag: false,
	enableCharCount: false,
	customStyles: {},
};

TextArea.propTypes = {
	val: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	label: PropTypes.string,
	id: PropTypes.string,
	placeholder: PropTypes.string,
	handleBlur: PropTypes.func,
	required: PropTypes.bool,
	maxChar: PropTypes.number,
	readOnly: PropTypes.bool,
	disabled: PropTypes.bool,
	addRequiredFlag: PropTypes.bool,
	enableCharCount: PropTypes.bool,
	customStyles: PropTypes.object,
};
