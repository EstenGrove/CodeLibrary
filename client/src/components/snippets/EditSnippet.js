import React, { useEffect, useRef, useState } from "react";
import styles from "../../css/snippets/EditSnippet.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import { useForm } from "../../utils/useForm";
import { green, purple, red } from "../../helpers/utils_styles";
// components
import SnippetEditor from "./SnippetEditor";
import Button from "../shared/Button";
import LockedIndicator from "../snippets/LockedIndicator";
import TagSelector from "../tags/TagSelector";
import { useOutsideClick } from "../../utils/useOutsideClick";
import { useKeyboardShortcut } from "../../utils/useKeyboardShortcut";

const customCSS = {
	discard: {
		backgroundColor: "#ffffff",
		color: green[500],
		padding: ".8rem 1.8rem",
		fontSize: "1.6rem",
		marginRight: "1rem",
	},
	save: {
		backgroundColor: green[500],
		color: "#ffffff",
		padding: ".8rem 1.8rem",
		fontSize: "1.6rem",
	},
};

const LockSnippet = ({ isLocked, toggleLocked }) => {
	return (
		<div className={styles.LockSnippet} onClick={toggleLocked}>
			<LockedIndicator isLocked={isLocked} />
			<span
				className={styles.LockSnippet_status}
				style={isLocked ? { color: red[600] } : { color: purple[700] }}
			>
				{isLocked ? "Locked" : "Unlocked"}
			</span>
		</div>
	);
};

const ActionBar = ({
	isLocked = false,
	discardSnippet,
	saveSnippet,
	lockSnippet,
}) => {
	return (
		<footer className={styles.ActionBar}>
			<div className={styles.ActionBar_inner}>
				<div className={styles.ActionBar_inner_left}>
					<LockSnippet isLocked={isLocked} toggleLocked={lockSnippet} />
				</div>
				<div className={styles.ActionBar_inner_right}>
					<Button customStyles={customCSS.discard} handleClick={discardSnippet}>
						Discard
					</Button>
					<Button customStyles={customCSS.save} handleClick={saveSnippet}>
						Save
					</Button>
				</div>
			</div>
		</footer>
	);
};

const EditSnippet = ({
	activeSnippet = {},
	allTags = [],
	allLangs = [],
	closeModal,
}) => {
	// modal open/close code
	const modalRef = useRef();
	const { isOutside } = useOutsideClick(modalRef);
	const wasEscaped = useKeyboardShortcut(["escape"]);
	// edit snippet form
	const { formState, setFormState, handleChange, handleReset } = useForm({
		snippetTitle: activeSnippet?.name ?? "",
		snippetDesc: activeSnippet?.desc ?? "",
		newSnippet: activeSnippet?.codeSrc ?? "",
		// snippet markdown (.md) file info
		fileName: "README.md",
		isActive: activeSnippet?.isActive ?? false,
		isLocked: activeSnippet?.isLocked ?? false,
		isStarred: activeSnippet?.isStarred ?? false,
	});
	const { values, touched } = formState;
	// tags assigned to new snippet entry
	const [snippetTags, setSnippetTags] = useState([]);

	// assigns a tag to new snippet entry
	const assignTagToSnippet = (tags) => {
		console.log("tags(selection)", tags);
		setSnippetTags(tags);
	};

	// assigns the 'fileExt' to filename upon blur Event
	const handleFileName = (name) => {
		setFormState({
			...formState,
			values: {
				...values,
				fileName: name,
			},
		});
	};

	const toggleLockSnippet = () => {
		setFormState({
			...formState,
			values: {
				...values,
				isLocked: !values?.isLocked,
			},
		});
	};
	const toggleStarStatus = () => {
		setFormState({
			...formState,
			values: {
				...values,
				isStarred: !values?.isStarred,
			},
		});
	};

	// creates snippet entry in database & global state
	const editSnippet = () => {
		// init snippet model
		// populate model fields w/ data
	};
	// cancels new snippet entry
	const cancelSnippet = () => {
		// reset form & clear data
	};

	// close modal handler
	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		if (isOutside || wasEscaped) {
			closeModal();
		}

		return () => {
			isMounted = false;
		};
	}, [isOutside, wasEscaped, closeModal]);

	return (
		<aside className={styles.EditSnippet} ref={modalRef}>
			<header className={styles.EditSnippet_header}>
				<h4 className={styles.EditSnippet_header_title}>Edit Snippet</h4>
				<svg className={styles.EditSnippet_header_close} onClick={closeModal}>
					<use xlinkHref={`${sprite}#icon-clear`}></use>
				</svg>
			</header>
			<div className={styles.EditSnippet_editor}>
				<SnippetEditor
					key={`EditSnippet-SnippetEditor`}
					vals={values}
					handleChange={handleChange}
					handleFileName={handleFileName}
					handleReset={handleReset}
					availableTags={allTags}
					languages={allLangs}
					selectedTags={snippetTags}
					assignTagToSnippet={assignTagToSnippet}
					toggleStarStatus={toggleStarStatus}
				/>
			</div>
			<ActionBar
				isLocked={values.isLocked}
				lockSnippet={toggleLockSnippet}
				saveSnippet={EditSnippet}
				cancelSnippet={cancelSnippet}
			/>
		</aside>
	);
};

export default EditSnippet;

EditSnippet.defaultProps = {};

EditSnippet.propTypes = {};
