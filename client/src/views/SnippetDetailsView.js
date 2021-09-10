import React, { useState } from "react";
import styles from "../css/views/SnippetDetailsView.module.scss";
import { PropTypes } from "prop-types";
// mock img
import DetailsViewMeta from "../components/details/DetailsViewMeta";
import TagsList from "../components/tags/TagsList";
import DetailsActionBar from "../components/details/DetailsActionBar";
import CodeViewer from "../components/code/CodeViewer";
import CodeUsageExample from "../components/code/CodeUsageExample";
import { getLangRecordFromMap } from "../helpers/utils_snippets";
import Table from "../components/tables/Table";
import PropDefinitions from "../components/code/PropDefinitions";

// gets language record from snippet.languageID; returns object record
const getSnippetLangRecord = (snippet, langs = []) => {
	const { languageID: id } = snippet;
	const langRecord = getLangRecordFromMap(id, langs);

	return langRecord ?? {};
};

const SnippetDetailsView = ({
	snippet,
	snippetTags = [],
	globalState = {},
	snippetProps = {},
	dispatchToState,
	initEditSnippet,
	initDeleteSnippet,
	closeEditSnippetModal,
}) => {
	const { languages, tags } = globalState;
	const [language, setLanguage] = useState(() => {
		return getSnippetLangRecord(snippet, languages.records);
	});

	return (
		<div className={styles.SnippetDetailsView}>
			<div className={styles.SnippetDetailsView_main}>
				{/* SNIPPET TITLE, DESC, DATE-CREATED ETC. (LOCKED/STARRED ICONS) */}
				<DetailsViewMeta
					snippet={snippet}
					allTags={tags}
					snippetLanguage={language}
					allLanguages={languages}
					initEditSnippet={initEditSnippet}
					initDeleteSnippet={initDeleteSnippet}
				/>
				{/* EDIT & DELETE BUTTONS */}
				<DetailsActionBar
					initEditSnippet={initEditSnippet}
					closeEditSnippetModal={closeEditSnippetModal}
				/>
				{/* SNIPPET'S TAGS LIST */}
				<TagsList tags={snippetTags} />
				{/* CODE SNIPPET SYNTAX */}
				<CodeViewer code={snippet.codeSrc} language={language.name} />
				{/* USAGE EXAMPLE */}
				<CodeUsageExample code={snippet.codeSrc} language={language.name} />
				{/* PROP TYPES */}
				<PropDefinitions
					title="PropType Definitions: "
					componentName={snippet.name}
				>
					<Table key={`PropTypes: ${snippet.name}`} schema={snippetProps} />
				</PropDefinitions>
			</div>
		</div>
	);
};

export default SnippetDetailsView;

SnippetDetailsView.defaultProps = {};

SnippetDetailsView.propTypes = {};
