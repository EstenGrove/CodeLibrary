import React from "react";
import styles from "../../css/tags/TagColorList.module.scss";
import { PropTypes } from "prop-types";
import {
	isEmptyArray,
	isEmptyObj,
	isEmptyVal,
} from "../../helpers/utils_types";
import TagColorOption from "./TagColorOption";

const TagColorList = ({
	vals = {},
	selectedColor = {},
	tagColorName,
	selectColor,
	handleCustomColor,
	clearColorSelection,
	colorOptions = [],
}) => {
	return (
		<div className={styles.TagColorList}>
			<div className={styles.TagColorList_header}>
				<span className={styles.TagColorList_header_label}>Choose a Color</span>
				{!isEmptyObj(selectedColor) && (
					<span className={styles.TagColorList_header_selected}>
						({selectedColor?.name ?? ""})
					</span>
				)}
				<button
					type="button"
					onClick={clearColorSelection}
					className={styles.TagColorList_header_clearColor}
				>
					Clear
				</button>
			</div>
			<div className={styles.TagColorList_options}>
				{!isEmptyArray(colorOptions) &&
					colorOptions.map((color, idx) => (
						<TagColorOption
							key={`TagColor-${color?.id}-${idx}`}
							color={color}
							selectColor={() => selectColor(color)}
							isSelected={selectedColor?.color === color?.color}
							isDisabled={
								!isEmptyVal(selectedColor?.color) &&
								selectedColor?.color !== color?.color
							}
						/>
					))}
			</div>
		</div>
	);
};

export default TagColorList;

TagColorList.defaultProps = {};

TagColorList.propTypes = {
	vals: PropTypes.object,
	tagColorName: PropTypes.string, // string of 'name' attribute for group
	selectColor: PropTypes.func,
	handleCustomColor: PropTypes.func,
	colorOptions: PropTypes.arrayOf(PropTypes.object),
};
