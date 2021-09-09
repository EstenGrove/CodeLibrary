import React from "react";
import styles from "../../css/files/FileEditorToolbar.module.scss";
import { PropTypes } from "prop-types";
import FileNameSelector from "./FileNameSelector";

const FileEditorToolbar = ({
	vals = {},
	placeholder,
	handleChange,
	handleFileExt,
}) => {
	return (
		<div className={styles.FileEditorToolbar}>
			<div className={styles.FileEditorToolbar_selectors}>
				<FileNameSelector
					name="fileName"
					id="fileName"
					val={vals.fileName}
					handleChange={handleChange}
					handleFileExt={handleFileExt}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

export default FileEditorToolbar;

FileEditorToolbar.defaultProps = {};

FileEditorToolbar.propTypes = {};
