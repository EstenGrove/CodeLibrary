import React from "react";
import styles from "../../css/colors/ColorPickerTile.module.scss";
import { PropTypes } from "prop-types";

const ColorPickerTile = ({ color, selectColor, isActiveColor = false }) => {
	const custom = {
		backgroundColor: color,
	};

	return (
		<div
			className={
				isActiveColor ? styles.ColorPickerTile_isActive : styles.ColorPickerTile
			}
			style={custom}
			onClick={() => selectColor(color)}
		></div>
	);
};

export default ColorPickerTile;

ColorPickerTile.defaultProps = {
	isActiveColor: false,
};
ColorPickerTile.propTypes = {
	isActiveColor: PropTypes.bool,
	color: PropTypes.string,
	selectColor: PropTypes.func.isRequired,
};
