import React, { useState } from "react";
import styles from "../../css/snippets/CreateSnippet.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import { useForm } from "../../utils/useForm";
import { green, purple, red } from "../../helpers/utils_styles";
// components
import SnippetEditor from "./SnippetEditor";
import Button from "../shared/Button";
import LockedIndicator from "../snippets/LockedIndicator";
import TagSelector from "../tags/TagSelector";

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

const CreateSnippet = ({ allTags = [], allLangs = [] }) => {
	const { formState, setFormState, handleChange, handleReset } = useForm({
		snippetTitle: "",
		snippetDesc: "",
		newSnippet: "",
		// snippet markdown (.md) file info
		fileName: "",
		isLocked: false,
		isStarred: false,
	});
	const { values } = formState;
	// tags assigned to new snippet entry
	const [snippetTags, setSnippetTags] = useState([]);

	// assigns a tag to new snippet entry
	const assignTagToSnippet = (tags) => {
		if (!Array.isArray) {
			return setSnippetTags([tags]);
		}
		return setSnippetTags(tags);
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
	const createSnippet = () => {
		// init snippet model
		// populate model fields w/ data
	};
	// cancels new snippet entry
	const cancelSnippet = () => {
		// reset form & clear data
	};

	return (
		<div className={styles.CreateSnippet}>
			<header className={styles.CreateSnippet_header}>
				<h4 className={styles.CreateSnippet_header_title}>Create Snippet</h4>
				<svg className={styles.CreateSnippet_header_close}>
					<use xlinkHref={`${sprite}#icon-clear`}></use>
				</svg>
			</header>
			<div className={styles.CreateSnippet_editor}>
				<SnippetEditor
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
				saveSnippet={createSnippet}
				cancelSnippet={cancelSnippet}
			/>
		</div>
	);
};

export default CreateSnippet;

CreateSnippet.defaultProps = {};

CreateSnippet.propTypes = {};
