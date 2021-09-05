import React from "react";
import styles from "../../css/tags/EditTag.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import { useForm } from "../../utils/useForm";
import { green, red } from "../../helpers/utils_styles";
import { isEmptyVal } from "../../helpers/utils_types";
// components
import TagColorPicker from "./TagColorPicker";
import TagNameInput from "./TagNameInput";
import Button from "../shared/Button";

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

const EditTag = ({ colorOptions = [] }) => {
	const { formState, setFormState, handleChange, handleReset } = useForm({
		tagName: "",
		tagColor: "",
		tagDesc: "",
		// custom color
		customTagColor: "",
	});
	const { values } = formState;

	const selectColor = (color) => {
		setFormState({
			...formState,
			values: {
				...values,
				tagColor: color?.color,
			},
		});
	};

	const updateTagCategory = () => {
		console.log(`Creating new tag category...`);
	};
	const cancelTagChanges = () => {
		console.log(`Creating new tag category...`);
	};

	return (
		<div className={styles.EditTag}>
			<div className={styles.EditTag_top}>
				<div className={styles.EditTag_top_title}>Edit Tag</div>
				<svg className={styles.EditTag_top_close}>
					<use xlinkHref={`${sprite}#icon-clear`}></use>
				</svg>
			</div>
			<div className={styles.EditTag_createTitle}>
				<TagNameInput
					name="tagName"
					id="tagName"
					val={values?.tagName}
					placeholder="Enter a name..."
					handleTagName={handleChange}
				/>
			</div>
			<div className={styles.EditTag_colors}>
				<TagColorPicker
					vals={values}
					selectColor={selectColor}
					colorOptions={colorOptions}
					handleCustomColor={handleChange}
				/>
			</div>
			<div className={styles.TagCreator_actions}>
				<Button handleClick={cancelTagChanges} customStyles={customCSS.cancel}>
					Cancel
				</Button>
				<Button
					isDisabled={!enableBtn(values)}
					handleClick={updateTagCategory}
					customStyles={customCSS.save}
				>
					Save
				</Button>
			</div>
		</div>
	);
};

export default EditTag;

EditTag.defaultProps = {};

EditTag.propTypes = {};
