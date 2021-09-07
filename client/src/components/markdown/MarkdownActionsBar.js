import React from "react";
import styles from "../../css/markdown/MarkdownActionsBar.module.scss";
import sprite from "../../assets/icons/editor.svg";
import { PropTypes } from "prop-types";

const SaveButton = ({ saveChanges, isDisabled = true }) => {
	return (
		<button
			type="button"
			onClick={saveChanges}
			disabled={isDisabled}
			className={styles.SaveButton}
		>
			<svg className={styles.SaveButton_icon}>
				<use xlinkHref={`${sprite}#icon-save1`}></use>
			</svg>
			<span className={styles.SaveButton_text}>Save Changes</span>
		</button>
	);
};

const MarkdownActionsBar = ({ saveChanges, wasEdited }) => {
	return (
		<footer className={styles.MarkdownActionsBar}>
			<SaveButton isDisabled={!wasEdited} saveChanges={saveChanges} />
		</footer>
	);
};

export default MarkdownActionsBar;

MarkdownActionsBar.defaultProps = {};

MarkdownActionsBar.propTypes = {};
