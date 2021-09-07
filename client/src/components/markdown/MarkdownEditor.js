import React, { useState } from "react";
import styles from "../../css/markdown/MarkdownEditor.module.scss";
import { PropTypes } from "prop-types";

const MarkdownEditor = ({ markdownSrc }) => {
	const [markdownText, setMarkdownText] = useState(markdownSrc);

	return (
		<div className={styles.MarkdownEditor}>
			{/*  */}
			{/*  */}
			{/*  */}
		</div>
	);
};

export default MarkdownEditor;

MarkdownEditor.defaultProps = {};

MarkdownEditor.propTypes = {};
