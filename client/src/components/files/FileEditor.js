import React from "react";
import styles from "../../css/files/FileEditor.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import FileEditorToolbar from "./FileEditorToolbar";

const FileEditor = ({
	vals,
	handleChange,
	handleFileName,
	saveSnippet,
	discardSnippet,
	lockSnippet,
}) => {
	return (
		<div className={styles.FileEditor}>
			<div className={styles.FileEditor_label}>FILES</div>
			<section className={styles.FileEditor_toolbar}>
				<FileEditorToolbar
					vals={vals}
					handleFileExt={handleFileName}
					handleChange={handleChange}
				/>
			</section>
			<section className={styles.FileEditor_markdown}>
				{/*  */}
				{/*  */}
				{/*  */}
			</section>
		</div>
	);
};

export default FileEditor;

FileEditor.defaultProps = {};

FileEditor.propTypes = {};
