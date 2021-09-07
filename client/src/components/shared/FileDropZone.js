import React, { useState } from "react";
import styles from "../../css/shared/FileDropZone.module.scss";
import { PropTypes } from "prop-types";

const dragStyles = {
	border: `2px dashed rgb(109, 40, 217)`,
};

const FileDropZone = ({
	label = `Choose file`,
	name = "fileUpload",
	id = "fileUpload",
	hasFile = false,
	handleFile,
	handleFileDrop,
	handleDragOver,
	// accept = "text/markdown",
	accept = "",
	multiple = false,
}) => {
	const [isDragging, setIsDragging] = useState(false);

	// sets 'isDragging', forwards event
	const dragHandler = (e) => {
		e.preventDefault();
		setIsDragging(true);
		handleDragOver(e);
	};

	// resets 'isDragging', forwards event
	const dropHandler = (e) => {
		e.preventDefault();
		setIsDragging(false);
		handleFileDrop(e);
	};

	console.log("hasFile", hasFile);

	return (
		<div className={styles.FileDropZone} style={isDragging ? dragStyles : null}>
			<div
				className={styles.FileDropZone_inner}
				onDragOver={dragHandler}
				onDrop={dropHandler}
			>
				<input
					type="file"
					name={name}
					id={id}
					onChange={handleFile}
					className={styles.FileDropZone_inner_input}
					accept={accept}
					multiple={multiple}
				/>
				<p htmlFor={id} className={styles.FileDropZone_inner_text}>
					Select files from your computer or drag files here.
				</p>
				<label
					htmlFor={id}
					className={
						hasFile
							? styles.FileDropZone_inner_label_hasFile
							: styles.FileDropZone_inner_label
					}
				>
					{!hasFile ? label : `✓ File Uploaded!`}
				</label>
			</div>
		</div>
	);
};

export default FileDropZone;

FileDropZone.defaultProps = {
	label: `Choose file`,
	name: "fileUpload",
	id: "fileUpload",
	hasFile: false,
	// accept: "text/markdown",
	multiple: false,
};

FileDropZone.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.string,
	accept: PropTypes.string,
	// bools
	hasFile: PropTypes.bool,
	multiple: PropTypes.bool,
	// funcs
	handleFile: PropTypes.func,
	handleFileDrop: PropTypes.func,
	handleDragOver: PropTypes.func,
};
