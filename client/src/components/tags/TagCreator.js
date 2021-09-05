import React, { useState } from "react";
import styles from "../../css/tags/TagCreator.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import { useForm } from "../../utils/useForm";
import { green, red } from "../../helpers/utils_styles";
import { isEmptyVal } from "../../helpers/utils_types";
// components
import TagColorPicker from "./TagColorPicker";
import TagNameInput from "./TagNameInput";
import Button from "../shared/Button";
import TagDescInput from "./TagDescInput";

// REQUIREMENTS:
// - Create new tag
// - Assign tag name (max 45 chars)
// - Add tag description
// - Choose unique tag color

const customCSS = {
	cancel: {
		padding: "1rem 1.7rem",
		color: red[600],
		backgroundColor: "transparent",
		marginRight: "1rem",
	},
	save: {
		padding: "1rem 1.7rem",
		backgroundColor: green[500],
		color: "#ffffff",
	},
};

const enableBtn = (vals) => {
	const { newTagColor, newTagDesc, newTagName } = vals;

	const isNotEmpty =
		!isEmptyVal(newTagColor) &&
		!isEmptyVal(newTagDesc) &&
		!isEmptyVal(newTagName);

	return isNotEmpty;
};

const TagCreator = ({ colorOptions = [] }) => {
	const { formState, setFormState, handleChange, handleReset } = useForm({
		newTagName: "",
		newTagColor: "",
		newTagDesc: "",
		// custom color
		customTagColor: "",
	});
	const [selectedColor, setSelectedColor] = useState({});
	const { values } = formState;

	const selectColor = (color) => {
		setFormState({
			...formState,
			values: {
				...values,
				newTagColor: color?.color ?? "",
			},
		});
		setSelectedColor(color);
	};

	const clearColorSelection = () => {
		setFormState({
			...formState,
			values: {
				...values,
				newTagColor: "",
			},
		});
		setSelectedColor({});
	};

	const createTagCategory = () => {
		console.log(`Creating new tag category...`);
	};
	const cancelTagCategory = () => {
		console.log(`Creating new tag category...`);
	};

	return (
		<div className={styles.TagCreator}>
			<div className={styles.TagCreator_top}>
				<div className={styles.TagCreator_top_title}>Create a Tag</div>
				<svg className={styles.TagCreator_top_close}>
					<use xlinkHref={`${sprite}#icon-clear`}></use>
				</svg>
			</div>
			<div className={styles.TagCreator_createTitle}>
				<TagNameInput
					name="newTagName"
					id="newTagName"
					val={values?.newTagName}
					placeholder="Enter a name..."
					handleTagName={handleChange}
				/>
			</div>
			<div className={styles.TagCreator_colors}>
				<TagColorPicker
					vals={values}
					selectedColor={selectedColor}
					tagColorName="newTagColor"
					selectColor={selectColor}
					colorOptions={colorOptions}
					handleCustomColor={handleChange}
					clearColorSelection={clearColorSelection}
				/>
			</div>
			{/* DESCRIPTION (OPTIONAL!!) */}
			<div className={styles.TagCreator_desc}>
				<TagDescInput
					name="newTagDesc"
					id="newTagDesc"
					val={values?.newTagDesc}
					handleTagDesc={handleChange}
				/>
			</div>

			<div className={styles.TagCreator_actions}>
				<Button handleClick={cancelTagCategory} customStyles={customCSS.cancel}>
					Cancel
				</Button>
				<Button
					isDisabled={!enableBtn(values)}
					handleClick={createTagCategory}
					customStyles={customCSS.save}
				>
					Save
				</Button>
			</div>
		</div>
	);
};

export default TagCreator;

TagCreator.defaultProps = {};

TagCreator.propTypes = {};
