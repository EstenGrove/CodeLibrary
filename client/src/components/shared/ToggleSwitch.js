// inside Toggle.js
import React from "react";
import styles from "../../css/shared/ToggleSwitch.module.scss";
import { PropTypes } from "prop-types";

const SIZES = {
	XSM: {
		transform: "scale(.4)",
	},
	SM: {
		transform: "scale(.7)",
	},
	MD: {
		transform: "scale(1)",
	},
	LG: {
		transform: "scale(1.3)",
	},
	XLG: {
		transform: "scale(1.6)",
	},
};

const ToggleSwitch = ({ name, id, val, handleToggle, size = "MD" }) => {
	return (
		<div className={styles.ToggleSwitch} style={SIZES[size]}>
			<input
				type="checkbox"
				name={name}
				id={id}
				value={val}
				className={styles.ToggleSwitch_input}
				onChange={handleToggle}
				style={SIZES[size]}
			/>
			<label htmlFor={id} className={styles.ToggleSwitch_label}></label>
		</div>
	);
};

export default ToggleSwitch;

ToggleSwitch.defaultProps = {};

ToggleSwitch.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	val: PropTypes.bool.isRequired,
	handleToggle: PropTypes.func.isRequired,
};
