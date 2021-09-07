import React, { useState } from "react";
import styles from "../../css/markdown/MarkdownEditor.module.scss";
import { PropTypes } from "prop-types";
import MarkdownToolbar from "./MarkdownToolbar";

const MarkdownEditor = ({
	name,
	id,
	markdownSrc,
	handleEdits,
	placeholder,
	isDisabled = false,
	readOnly = false,
}) => {
	return (
		<div className={styles.MarkdownEditor}>
			<div className={styles.MarkdownEditor_wrapper}>
				<textarea
					name={name}
					id={id}
					value={markdownSrc}
					onChange={handleEdits}
					disabled={isDisabled}
					readOnly={readOnly}
					placeholder={placeholder}
					className={styles.MarkdownEditor_wrapper_editor}
				></textarea>
			</div>
		</div>
	);
};

export default MarkdownEditor;

MarkdownEditor.defaultProps = {};

MarkdownEditor.propTypes = {};
