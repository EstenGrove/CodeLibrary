import React from "react";
import styles from "../../css/shared/Form.module.scss";
import { PropTypes } from "prop-types";

const Form = ({
	vals = {},
	handleChange,
	handleCheckbox,
	handleReset,
	handleSubmit,
	isDisabled = false,
	children,
	customStyles = {},
}) => {
	const withProps = React.Children.map(children, (child, i) => {
		if (!child) return;
		return React.cloneElement(child, {
			handleChange,
			handleCheckbox,
			handleReset,
			handleSubmit,
			vals,
			isDisabled,
		});
	});

	return (
		<form
			className={styles.Form}
			onSubmit={handleSubmit}
			style={customStyles}
			disabled={isDisabled}
		>
			<fieldset className={styles.Form_fieldset} disabled={isDisabled}>
				{withProps}
			</fieldset>
		</form>
	);
};

export default Form;

Form.defaultProps = {};

Form.propTypes = {
	vals: PropTypes.object,
	isDisabled: PropTypes.bool,
	children: PropTypes.any,
	handleChange: PropTypes.func,
	handleCheckbox: PropTypes.func,
	handleReset: PropTypes.func,
	handleSubmit: PropTypes.func,
};
