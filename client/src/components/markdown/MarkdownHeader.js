import React, { useState } from "react";
import styles from "../../css/markdown/MarkdownHeader.module.scss";
import sprite from "../../assets/icons/editor.svg";
import { PropTypes } from "prop-types";
import { format } from "date-fns";
import {
	convertAndFormatBytes,
	formatToPracticalSizeUnit,
} from "../../helpers/utils_files";
// components
import MarkdownFileNameSelector from "./MarkdownFileNameSelector";

// REQUIREMENTS:
// - File Name
// - File Size
// - Date Created
// - Last modified date
// - File status:
//    - Draft saved?
//    - Draft edited?
// - Check Draft Status via 'touched' and 'values' in 'formState'

const PreviewButton = ({ openPreview }) => {
	return (
		<button className={styles.PreviewButton} onClick={openPreview}>
			<svg className={styles.PreviewButton_icon}>
				<use xlinkHref={`${sprite}#icon-scatter_plot`}></use>
			</svg>
			<span className={styles.PreviewButton_text}>Preview Markdown</span>
		</button>
	);
};

const DraftStatus = ({ status }) => {
	const renderStatus = (status) => {
		switch (status) {
			// changed, but not saved
			case "UNSAVED": {
				return (
					<div className={styles.DraftStatusUnSaved}>
						<svg className={styles.DraftStatusUnSaved_icon}>
							<use xlinkHref={`${sprite}#icon-priority_high`}></use>
						</svg>
						<span className={styles.DraftStatusUnSaved_text}>
							Unsaved Changes
						</span>
					</div>
				);
			}
			// changed but saved
			case "SAVED": {
				return (
					<div className={styles.DraftStatusSaved}>
						<svg className={styles.DraftStatusSaved_icon}>
							<use xlinkHref={`${sprite}#icon-done_all`}></use>
						</svg>
						<span className={styles.DraftStatusSaved_text}>Saved Changes</span>
					</div>
				);
			}
			// not changed
			case "UNCHANGED": {
				return (
					<div className={styles.DraftStatusUnChanged}>
						<svg className={styles.DraftStatusUnChanged_icon}>
							<use xlinkHref={`${sprite}#icon-check`}></use>
						</svg>
						<span className={styles.DraftStatusUnChanged_text}>No Changes</span>
					</div>
				);
			}
			default:
				break;
		}
	};

	return <>{renderStatus(status)}</>;
};

const MarkdownHeader = ({
	vals = {},
	formState = {},
	wasEdited,
	changeFileName,
	handleChange,
}) => {
	const { fileName, fileSize, dateCreated, lastModifiedDate } = vals;
	const [status, setStatus] = useState(() => {
		return wasEdited ? "UNSAVED" : "UNCHANGED";
	});

	console.log("vals", vals);

	return (
		<header className={styles.MarkdownHeader}>
			<div className={styles.MarkdownHeader_header}>
				<div className={styles.MarkdownHeader_header_main}>
					<MarkdownFileNameSelector
						name="fileName"
						id="fileName"
						fileExt=".md"
						val={fileName}
						handleChange={handleChange}
						handleFileExt={changeFileName}
					/>
					<div className={styles.MarkdownHeader_header_main_dateCreated}>
						Created: {format(dateCreated, "MM/DD/YYYY h:mm A")}
					</div>
				</div>
				<div className={styles.MarkdownHeader_header_about}>
					<div className={styles.MarkdownHeader_header_about_lastModified}>
						Last Modified: {format(lastModifiedDate, "MM/DD/YYYY h:mm A")}
					</div>
					<div className={styles.MarkdownHeader_header_about_fileSize}>
						Size: {formatToPracticalSizeUnit(fileSize)}
					</div>
				</div>
			</div>
			<div className={styles.MarkdownHeader_draft}>
				<div className={styles.MarkdownHeader_draft_status}>
					<DraftStatus status={status} />
				</div>
				<div className={styles.MarkdownHeader_draft_preview}>
					<PreviewButton />
				</div>
			</div>
		</header>
	);
};

export default MarkdownHeader;

MarkdownHeader.defaultProps = {};

MarkdownHeader.propTypes = {};
