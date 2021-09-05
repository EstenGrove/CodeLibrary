import React from "react";
import styles from "../../css/tags/TagColorPicker.module.scss";
import { PropTypes } from "prop-types";
import TagColorList from "./TagColorList";
import { isEmptyObj } from "../../helpers/utils_types";

const TagColorPicker = ({
	vals = {},
	selectedColor = {},
	tagColorName,
	selectColor,
	handleCustomColor,
	clearColorSelection,
	colorOptions = [],
}) => {
	return (
		<div className={styles.TagColorPicker}>
			<div className={styles.TagColorPicker_options}>
				<TagColorList
					vals={vals}
					selectedColor={selectedColor}
					tagColorName={tagColorName}
					selectColor={selectColor}
					colorOptions={colorOptions}
					handleCustomColor={handleCustomColor}
					clearColorSelection={clearColorSelection}
				/>
			</div>
			<div className={styles.TagColorPicker_custom}>
				<input
					type="text"
					name="customTagColor"
					id="customTagColor"
					value={vals.customTagColor}
					onChange={handleCustomColor}
					className={styles.TagColorPicker_custom_input}
					placeholder="Custom color in hex (ie. #eaecef)"
					disabled={!isEmptyObj(selectedColor)}
				/>
			</div>
		</div>
	);
};

export default TagColorPicker;

TagColorPicker.defaultProps = {};

TagColorPicker.propTypes = {};
