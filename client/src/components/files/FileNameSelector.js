import React, { useState } from "react";
import styles from "../../css/files/FileNameSelector.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import { isEmptyVal } from "../../helpers/utils_types";

// REQUIREMENTS:
// - Allows creating a new file name
// - Allows selecting the file type:
//    - Markdown (primary)

const FileNameSelector = ({
	val,
	name,
	id,
	handleFileExt,
	handleChange,
	fileExt = ".md",
}) => {
	// checks if fileExt has been appended, if not...
	// ...then adds 'fileExt' to file name
	const handleFileName = (e) => {
		const { value } = e.target;
		if (isEmptyVal(value)) return;
		const reg = new RegExp(fileExt, "gm");
		if (reg.test(value)) return;
		handleFileExt(`${value}${fileExt}`);
	};

	return (
		<div className={styles.FileNameSelector}>
			<svg className={styles.FileNameSelector_icon}>
				<use xlinkHref={`${sprite}#icon-code1`}></use>
			</svg>
			<input
				type="text"
				name={name}
				id={id}
				value={val}
				onBlur={handleFileName}
				onChange={handleChange}
				className={styles.FileNameSelector_input}
				placeholder="Enter filename without ext..."
			/>
		</div>
	);
};

export default FileNameSelector;

FileNameSelector.defaultProps = {};

FileNameSelector.propTypes = {};
