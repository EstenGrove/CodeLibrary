import React, { useState } from "react";
import styles from "../../css/colors/ColorPicker.module.scss";
import { PropTypes } from "prop-types";
import ColorPickerPreview from "./ColorPickerPreview";
import ColorPickerOptions from "./ColorPickerOptions";
import ColorPickerInput from "./ColorPickerInput";

const ColorPicker = ({
	name,
	id,
	val = "#ffffff",
	colorOptions = [],
	activeColorGetter = null,
}) => {
	const [activeColor, setActiveColor] = useState(val);
	const [showColorOptions, setShowColorOptions] = useState(false);

	// handles click selections
	const handleSelection = (color) => {
		setActiveColor(color);
		if (activeColorGetter) {
			return activeColorGetter(name, activeColor);
		}
	};

	// handles hexCode input
	const enterColorCode = (e) => {
		const { value } = e.target;
		setActiveColor(`#` + value);
		if (activeColorGetter) {
			return activeColorGetter(name, `#` + value);
		}
	};

	const handleBlur = (e) => {
		console.log(`was blurred!!`);
	};

	return (
		<div className={styles.ColorPicker}>
			<ColorPickerPreview
				color={activeColor}
				showOptions={() => setShowColorOptions(true)}
			/>
			<ColorPickerInput
				name={name}
				id={id}
				hexVal={activeColor}
				handleSubmit={handleBlur}
				enterColorCode={enterColorCode}
			/>
			<section className={styles.ColorPicker_options}>
				{showColorOptions && (
					<ColorPickerOptions
						activeColor={activeColor}
						colorOptions={[...colorOptions]}
						handleSelection={handleSelection}
						closeOptions={() => setShowColorOptions(false)}
					/>
				)}
			</section>
		</div>
	);
};

export default ColorPicker;

ColorPicker.defaultProps = {
	colorOptions: [],
	activeColorGetter: null,
};

ColorPicker.propTypes = {
	colorOptions: PropTypes.arrayOf(PropTypes.string),
	activeColorGetter: PropTypes.func,
};
