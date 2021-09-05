import React from "react";
import styles from "../../css/snippets/SnippetActions.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import StarredIndicator from "./StarredIndicator";

// REQUIREMENTS:
// - Copy:
//    - Copy 'Component' file
//    - Copy 'SCSS' file
//    - Copy 'Snippet'

const lockedEdit = "edit_off";
const enabledEdit = "edit-3";

const EditSnippetIcon = ({
	initEdit,
	hoverTitle = "Edit Snippet",
	isLocked = false,
}) => {
	return (
		<div className={styles.EditSnippetIcon} title={hoverTitle}>
			<svg className={styles.EditSnippetIcon_icon} onClick={initEdit}>
				<use
					xlinkHref={`${sprite}#icon-${isLocked ? lockedEdit : enabledEdit}`}
				></use>
			</svg>
			<span className={styles.EditSnippetIcon_text}>Edit Snippet</span>
		</div>
	);
};
const CopyCodeIcon = ({ copyHandler, hoverTitle = "Copy Snippet" }) => {
	return (
		<div className={styles.CopyCodeIcon} title={hoverTitle}>
			<svg className={styles.CopyCodeIcon_icon} onClick={copyHandler}>
				<use xlinkHref={`${sprite}#icon-content_copy`}></use>
			</svg>
		</div>
	);
};
const DownloadFileIcon = ({
	downloadHandler,
	hoverTitle = "Download File",
}) => {
	return (
		<div className={styles.DownloadFileIcon} title={hoverTitle}>
			<svg className={styles.DownloadFileIcon_icon} onClick={downloadHandler}>
				<use xlinkHref={`${sprite}#icon-file_download`}></use>
			</svg>
		</div>
	);
};

const SnippetActions = ({
	snippet = {},
	isStarred,
	isLocked,
	initEdit,
	copyHandler,
	toggleStarStatus,
	downloadFileHandler,
}) => {
	return (
		<div className={styles.SnippetActions}>
			<EditSnippetIcon isLocked={isLocked} initEdit={initEdit} />
			<StarredIndicator
				isStarred={isStarred}
				toggleStarStatus={toggleStarStatus}
			/>
			<CopyCodeIcon copyHandler={copyHandler} />
			<DownloadFileIcon downloadHandler={downloadFileHandler} />
		</div>
	);
};

export default SnippetActions;

SnippetActions.defaultProps = {};

SnippetActions.propTypes = {};
