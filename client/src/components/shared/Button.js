import React from "react";
import styles from "../../css/shared/Button.module.scss";
import { PropTypes } from "prop-types";

const Button = ({
	handleClick,
	isDisabled = false,
	customStyles = {},
	children,
}) => {
	return (
		<button
			className={styles.Button}
			onClick={handleClick}
			disabled={isDisabled}
			style={customStyles}
		>
			{children}
		</button>
	);
};

export default Button;

Button.defaultProps = {};

Button.propTypes = {};
