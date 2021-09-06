import React from "react";
import styles from "../../css/colors/ColorPickerPreview.module.scss";
import { PropTypes } from "prop-types";

const ColorPickerPreview = ({ color = `#ffffff`, showOptions }) => {
	const custom = {
		backgroundColor: color,
	};

	return (
		<div
			className={styles.ColorPickerPreview}
			style={custom}
			onClick={showOptions}
		></div>
	);
};

export default ColorPickerPreview;

ColorPickerPreview.defaultProps = {
	color: `#ffffff`,
};
ColorPickerPreview.propTypes = {
	color: PropTypes.string.isRequired,
	showOptions: PropTypes.func.isRequired,
};
