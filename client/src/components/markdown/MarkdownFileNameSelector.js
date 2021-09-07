import React, { useState } from "react";
import styles from "../../css/markdown/MarkdownFileNameSelector.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import { isEmptyVal } from "../../helpers/utils_types";

// REQUIREMENTS:
// - Allows creating a new file name
// - Allows selecting the file type:
//    - Markdown (primary)

const MarkdownFileNameSelector = ({
	name,
	id,
	val,
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
		<div className={styles.MarkdownFileNameSelector}>
			<svg className={styles.MarkdownFileNameSelector_icon}>
				<use xlinkHref={`${sprite}#icon-code1`}></use>
			</svg>
			<input
				type="text"
				name={name}
				id={id}
				value={val}
				onBlur={handleFileName}
				onChange={handleChange}
				className={styles.MarkdownFileNameSelector_input}
				placeholder="Enter filename without ext..."
			/>
		</div>
	);
};

export default MarkdownFileNameSelector;

MarkdownFileNameSelector.defaultProps = {};

MarkdownFileNameSelector.propTypes = {};
