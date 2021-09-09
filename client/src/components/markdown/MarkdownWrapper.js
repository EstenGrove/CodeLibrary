import React, { useState, useEffect, useCallback } from "react";
import styles from "../../css/markdown/MarkdownWrapper.module.scss";
import { PropTypes } from "prop-types";
import { useForm } from "../../utils/useForm";
import { readAsTextHandler } from "../../helpers/utils_files";
import { saveMarkdownTextAsFile } from "../../helpers/utils_markdown";
import { isEmptyVal } from "../../helpers/utils_types";
// components
import MarkdownToolbar from "./MarkdownToolbar";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownHeader from "./MarkdownHeader";
import MarkdownActionsBar from "./MarkdownActionsBar";
import MarkdownLinkEditor from "./MarkdownLinkEditor";
import MarkdownPreview from "./MarkdownPreview";

// ## TODOS:
// - Implement 'Undo' & 'Redo' functionality:
// 		- Add 'useUndo' custom hook
// 		- Track changes to markdown file
// 		- Set a limitation for how many changes are saved (eg. 10 changes)

const tools = {
	LINK: "LINK",
	UNDERLINE: "UNDERLINE",
	BOLD: "BOLD",
	LIST_NUMS: "LIST_NUMS",
	LIST_BULLETS: "LIST_BULLETS",
	BLOCKQUOTE: "BLOCKQUOTE",
};

const MarkdownWrapper = ({ markdownFile = {} }) => {
	const { formState, setFormState, handleChange, handleReset } = useForm({
		fileName: markdownFile?.fileName,
		fileSize: markdownFile?.fileSize,
		dateCreated: markdownFile?.dateCreated,
		lastModifiedDate: markdownFile?.lastModifiedDate,
		// custom vals
		linkText: "",
		linkUrl: "",
	});
	const { values } = formState;
	// add utils that automatically converts & processes file-data into text to be read
	const [markdownText, setMarkdownText] = useState(async () => {
		if (isEmptyVal(markdownFile.fileName)) return;
		return await readAsTextHandler(markdownFile.src);
	});
	// opens link tool
	const [showHyperLinkTool, setShowHyperLinkTool] = useState(false);
	// show markdown-as-html preview
	const [showMarkdownPreview, setShowMarkdownPreview] = useState(false);
	// sets current active tool
	const [activeTool, setActiveTool] = useState("");
	const [wasEdited, setWasEdited] = useState(false);

	const changeFileName = (newName) => {
		setFormState({
			...formState,
			values: {
				...values,
				fileName: newName,
			},
		});
		setWasEdited(true);
	};

	const handleMarkdownEdits = (e) => {
		const { value } = e.target;
		setMarkdownText(value);
		setWasEdited(true);
	};

	const selectEditorTool = (tool) => {
		// check if text is selected:
		//    - IF text selected, then apply tool settings
		//    - IF no text selected, then apply styles as user types
		setActiveTool(tool);
		setWasEdited(true);
	};

	const initHyperLink = () => {
		setShowHyperLinkTool(true);
	};
	const createLink = () => {
		const { linkText, linkUrl } = values;
		// generate link here...
		setWasEdited(true);
	};
	const cancelLink = () => {
		setShowHyperLinkTool(false);
	};

	// download markdown as .md file to user's machine
	const downloadFileLocally = () => {
		saveMarkdownTextAsFile(markdownText, values.fileName);
	};

	const copyText = (text) => {
		navigator.clipboard.writeText(text);
	};

	const openMarkdownPreview = () => {
		setShowMarkdownPreview(true);
	};

	const saveChanges = async () => {
		console.log(`Saving changes...`);
		setWasEdited(false);
	};
	const cancelChanges = async () => {
		console.log(`Cancel changes...`);
	};

	// extracts text from 'markdownFile' & sets local state
	const getFileText = useCallback(async () => {
		const result = await readAsTextHandler(markdownFile.src);
		setMarkdownText(result);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// reads markdownFile.src via 'readAsText' from FileReader upon each file upload
	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		if (markdownFile.src) {
			getFileText();
		}

		return () => {
			isMounted = false;
		};
	}, [markdownFile.src, getFileText]);

	return (
		<>
			<div className={styles.MarkdownWrapper}>
				<div className={styles.MarkdownWrapper_header}>
					<MarkdownHeader
						formState={formState}
						fileInfo={values}
						vals={values}
						changeFileName={changeFileName}
						handleChange={handleChange}
						wasEdited={wasEdited}
						openPreview={openMarkdownPreview}
					/>
				</div>
				<div className={styles.MarkdownWrapper_toolbar}>
					<MarkdownToolbar
						initHyperLink={initHyperLink}
						createHyperLink={createLink}
						cancelLink={cancelLink}
						downloadMarkdown={downloadFileLocally}
						selectEditorTool={selectEditorTool}
						copyText={() => copyText(markdownText)}
					/>
				</div>
				<div className={styles.MarkdownWrapper_editor}>
					<MarkdownEditor
						handleEdits={handleMarkdownEdits}
						markdownSrc={markdownText}
					/>
				</div>
				<div className={styles.MarkdownWrapper_footer}>
					<MarkdownActionsBar
						saveChanges={saveChanges}
						cancelChanges={cancelChanges}
						wasEdited={wasEdited}
					/>
				</div>
			</div>

			{showHyperLinkTool && (
				<MarkdownLinkEditor
					vals={values}
					createLink={createLink}
					cancelLink={cancelLink}
					handleChange={handleChange}
					closeLinkEditor={() => setShowHyperLinkTool(false)}
				/>
			)}

			{showMarkdownPreview && (
				<MarkdownPreview
					markdown={markdownText}
					closePreview={() => setShowMarkdownPreview(false)}
				/>
			)}
		</>
	);
};

export default MarkdownWrapper;

MarkdownWrapper.defaultProps = {};

MarkdownWrapper.propTypes = {
	markdownFile: PropTypes.shape({
		fileName: PropTypes.string.isRequired,
		fileSize: PropTypes.number.isRequired,
		dateCreated: PropTypes.instanceOf(Date).isRequired,
		lastModifiedDate: PropTypes.instanceOf(Date).isRequired,
		src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	}),
};
