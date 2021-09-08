import React from "react";
import styles from "../../css/markdown/MarkdownEditor.module.scss";
import { PropTypes } from "prop-types";

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

MarkdownEditor.defaultProps = {
	isDisabled: false,
	readOnly: false,
};

MarkdownEditor.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	markdownSrc: PropTypes.string,
	placeholder: PropTypes.string,
	isDisabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	handleEdits: PropTypes.func,
};
