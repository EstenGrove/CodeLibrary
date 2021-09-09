import React, { useState } from "react";
import styles from "../../css/snippets/SnippetEditor.module.scss";
import { PropTypes } from "prop-types";
import { useForm } from "../../utils/useForm";
import SnippetTitleInput from "./SnippetTitleInput";
import SnippetDescInput from "./SnippetDescInput";
import FileEditor from "../files/FileEditor";
import TagSelector from "../tags/TagSelector";
import TagsList from "../tags/TagsList";
import StarredIndicator from "./StarredIndicator";

const SnippetEditor = ({
	vals = {},
	handleChange,
	handleReset,
	handleFileName,
	toggleStarStatus,
	removeAssignedTag,
	assignTagToSnippet,
	selectedTags = [],
	availableTags = [],
}) => {
	const removeTagHandler = (tag) => {
		// removeAssignedTag(tag);
		assignTagToSnippet(tag);
	};

	return (
		<div className={styles.SnippetEditor}>
			<div className={styles.SnippetEditor_fields}>
				<SnippetTitleInput
					name="snippetTitle"
					id="snippetTitle"
					val={vals?.snippetTitle}
					handleChange={handleChange}
				/>
				<SnippetDescInput
					name="snippetDesc"
					id="snippetDesc"
					val={vals?.snippetDesc}
					handleChange={handleChange}
				/>
			</div>
			<div className={styles.SnippetEditor_tags}>
				<div className={styles.SnippetEditor_tags_title}>TAGS</div>
				<TagSelector
					selectTagHandler={assignTagToSnippet}
					tagOptions={availableTags}
					enableMultiSelect={false}
				/>
				<div className={styles.SnippetEditor_tags_list}>
					<TagsList tags={selectedTags} removeTag={removeTagHandler} />
				</div>
			</div>
			<div className={styles.SnippetEditor_star}>
				<StarredIndicator
					isStarred={vals?.isStarred}
					toggleStarStatus={toggleStarStatus}
				/>
				<label htmlFor="isStarred" className={styles.SnippetEditor_star_label}>
					{vals.isStarred ? "Marked as Favorite" : "Mark as Favorite"}
				</label>
			</div>
			<div className={styles.SnippetEditor_main}>
				<FileEditor
					vals={vals}
					handleChange={handleChange}
					handleFileName={handleFileName}
				/>
			</div>
		</div>
	);
};

export default SnippetEditor;

SnippetEditor.defaultProps = {};

SnippetEditor.propTypes = {};
