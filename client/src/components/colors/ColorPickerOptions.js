import React, { useRef, useEffect } from "react";
import styles from "../../css/colors/ColorPickerOptions.module.scss";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import { useOutsideClick } from "../../utils/useOutsideClick";
import { removeHex } from "../../helpers/utils_colors";
import { capitalize } from "../../helpers/utils_processing";
// components
import ColorPickerTile from "./ColorPickerTile";

/**
 * Compares color option to active color to check for a match.
 */
const isActive = (activeCode, colorCode) => {
	const activeNoHex = removeHex(activeCode);
	const colorNoHex = removeHex(colorCode);

	if (capitalize(activeCode) === capitalize(colorCode)) return true;
	if (capitalize(activeNoHex) === capitalize(colorNoHex)) return true;

	return false;
};

const ColorPickerOptions = ({
	activeColor,
	handleSelection,
	colorOptions = [],
	closeOptions,
}) => {
	const optionsRef = useRef();
	const { isOutside } = useOutsideClick(optionsRef);

	const selectionHandler = (color) => {
		handleSelection(color);
		closeOptions();
	};

	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}
		if (isOutside) {
			closeOptions();
		}

		return () => {
			isMounted = false;
		};
	}, [closeOptions, isOutside]);

	return (
		<div className={styles.ColorPickerOptions} ref={optionsRef}>
			{!isEmptyArray(colorOptions) &&
				colorOptions.map((color, idx) => (
					<ColorPickerTile
						color={color}
						key={color + idx}
						isActiveColor={isActive(activeColor, color)}
						selectColor={() => selectionHandler(color)}
					/>
				))}
		</div>
	);
};

export default ColorPickerOptions;

ColorPickerOptions.defaultProps = {
	colorOptions: [],
};

ColorPickerOptions.propTypes = {
	activeColor: PropTypes.string.isRequired,
	handleSelection: PropTypes.func.isRequired,
	colorOptions: PropTypes.arrayOf(PropTypes.string),
	closeOptions: PropTypes.func.isRequired,
};
