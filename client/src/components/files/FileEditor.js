import React from "react";
import styles from "../../css/files/FileEditor.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import FileEditorToolbar from "./FileEditorToolbar";
import MarkdownEditor from "../markdown/MarkdownEditor";

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
					placeholder={`Suggested name: ${vals?.snippetTitle}`}
				/>
			</section>
			<section className={styles.FileEditor_markdown}>
				<MarkdownEditor
					name="newSnippet"
					id="newSnippet"
					markdownSrc={vals?.newSnippet}
					handleEdits={handleChange}
					placeholder="Create markdown here..."
				/>
			</section>
		</div>
	);
};

export default FileEditor;

FileEditor.defaultProps = {};

FileEditor.propTypes = {};
