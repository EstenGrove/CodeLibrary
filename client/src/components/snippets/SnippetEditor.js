import React from "react";
import styles from "../../css/snippets/SnippetEditor.module.scss";
import { PropTypes } from "prop-types";
import { generateID } from "../../helpers/utils_processing";
// components
import SnippetTitleInput from "./SnippetTitleInput";
import SnippetDescInput from "./SnippetDescInput";
import FileEditor from "../files/FileEditor";
import TagSelector from "../tags/TagSelector";
import TagsList from "../tags/TagsList";
import LanguageSelector from "../languages/LanguageSelector";
import FavoriteToggler from "./FavoriteToggler";

const customCSS = {
	langs: {
		backgroundColor: "#ffffff",
	},
};

const EditorSection = ({ title, customStyles = {}, children }) => {
	return (
		<div className={styles.EditorSection} style={customStyles}>
			<div className={styles.EditorSection_top}>
				<div className={styles.EditorSection_top_title}>{title}</div>
			</div>
			<div className={styles.EditorSection_main}>{children}</div>
		</div>
	);
};

const Divider = ({ customStyles }) => {
	return <div style={customStyles}></div>;
};

const SnippetEditor = ({
	vals = {},
	handleChange,
	handleReset,
	handleFileName,
	toggleStarStatus,
	removeAssignedTag,
	assignTagToSnippet,
	handleLangSelection,
	selectedTags = [],
	availableTags = [],
	languages = [],
}) => {
	const removeTagHandler = (tag) => {
		// removeAssignedTag(tag);
		assignTagToSnippet(tag);
	};

	return (
		<div className={styles.SnippetEditor}>
			<div className={styles.SnippetEditor_fields}>
				<SnippetTitleInput
					key={`Title--${generateID()}`}
					name="snippetTitle"
					id="snippetTitle"
					val={vals?.snippetTitle}
					handleChange={handleChange}
					charLimit={150}
				/>
				<SnippetDescInput
					name="snippetDesc"
					id="snippetDesc"
					val={vals?.snippetDesc}
					handleChange={handleChange}
				/>
			</div>
			{/* TAGS' SELECTOR */}
			<EditorSection title="TAGS">
				<TagSelector
					selectTagHandler={assignTagToSnippet}
					tagOptions={availableTags}
					enableMultiSelect={false}
				/>
				<div className={styles.SnippetEditor_tags_list}>
					<TagsList tags={selectedTags} removeTag={removeTagHandler} />
				</div>
			</EditorSection>
			{/* LANGUAGES' SELECTOR */}
			<EditorSection title="SNIPPET LANGUAGE">
				<LanguageSelector
					langs={languages}
					handleParentSelect={handleLangSelection}
					customStyles={customCSS.langs}
				/>
			</EditorSection>
			<Divider />
			{/* LANGUAGES' SELECTOR */}
			<EditorSection title="FAVORITE">
				<FavoriteToggler
					isStarred={vals.isStarred}
					toggleStarStatus={toggleStarStatus}
				/>
			</EditorSection>
			<Divider customStyles={{ marginTop: "-5rem" }} />
			{/* FILE EDITOR (eg. MARKDOWN) */}
			<EditorSection>
				<FileEditor
					vals={vals}
					handleChange={handleChange}
					handleFileName={handleFileName}
				/>
			</EditorSection>
		</div>
	);
};

export default SnippetEditor;

SnippetEditor.defaultProps = {
	vals: {},
	selectedTags: [],
	availableTags: [],
	languages: [],
};

SnippetEditor.propTypes = {
	vals: PropTypes.object,
	handleChange: PropTypes.func,
	handleReset: PropTypes.func,
	handleFileName: PropTypes.func,
	toggleStarStatus: PropTypes.func,
	removeAssignedTag: PropTypes.func,
	assignTagToSnippet: PropTypes.func,
	handleLangSelection: PropTypes.func,
	selectedTags: PropTypes.arrayOf(PropTypes.object),
	availableTags: PropTypes.arrayOf(PropTypes.object),
	languages: PropTypes.arrayOf(PropTypes.object),
};
