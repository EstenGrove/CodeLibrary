import React, { useState } from "react";
import styles from "../../css/markdown/MarkdownWrapper.module.scss";
import { PropTypes } from "prop-types";
import MarkdownToolbar from "./MarkdownToolbar";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownHeader from "./MarkdownHeader";
import { useForm } from "../../utils/useForm";
import MarkdownActionsBar from "./MarkdownActionsBar";

const MarkdownWrapper = ({ markdownFile }) => {
	const { formState, setFormState, handleChange, handleReset } = useForm({
		fileName: markdownFile?.fileName,
		fileSize: markdownFile?.fileSize,
		dateCreated: markdownFile?.dateCreated,
		lastModifiedDate: markdownFile?.lastModifiedDate,
	});
	const { values } = formState;
	const [markdownText, setMarkdownText] = useState(markdownFile?.src);

	const changeFileName = (newName) => {
		setFormState({
			...formState,
			values: {
				...values,
				fileName: newName,
			},
		});
	};

	const handleMarkdownEdits = (e) => {
		const { value } = e.target;
		setMarkdownText(value);
	};

	const selectTool = (tool) => {
		// check if text is selected:
		//    - IF text selected, then apply tool settings
		//    - IF no text selected, then apply styles as user types
	};

	return (
		<div className={styles.MarkdownWrapper}>
			<div className={styles.MarkdownWrapper_header}>
				<MarkdownHeader
					formState={formState}
					fileInfo={values}
					vals={values}
					changeFileName={changeFileName}
					handleChange={handleChange}
				/>
			</div>
			<div className={styles.MarkdownWrapper_toolbar}>
				<MarkdownToolbar />
			</div>
			<div className={styles.MarkdownWrapper_editor}>
				<MarkdownEditor
					handleEdits={handleMarkdownEdits}
					markdownSrc={markdownText}
				/>
			</div>
			<div className={styles.MarkdownWrapper_footer}>
				<MarkdownActionsBar />
			</div>
		</div>
	);
};

export default MarkdownWrapper;

MarkdownWrapper.defaultProps = {};

MarkdownWrapper.propTypes = {};
