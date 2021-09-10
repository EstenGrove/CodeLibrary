import React from "react";
import styles from "../css/views/SnippetDetailsView.module.scss";
import { PropTypes } from "prop-types";
// mock img
import DetailsViewMeta from "../components/details/DetailsViewMeta";
import TagsList from "../components/tags/TagsList";
import DetailsActionBar from "../components/details/DetailsActionBar";
import CodeViewer from "../components/code/CodeViewer";
import CodeUsageExample from "../components/code/CodeUsageExample";
import {
	getLangNameFromIdMap,
	getLanguageNameFromID,
} from "../helpers/utils_snippets";
import Table from "../components/tables/Table";
import PropDefinitions from "../components/code/PropDefinitions";

const SnippetDetailsView = ({
	snippet,
	snippetTags = [],
	globalState = {},
	snippetProps = {},
	dispatchToState,
	initEditSnippet,
}) => {
	const { languages, tags } = globalState;

	return (
		<div className={styles.SnippetDetailsView}>
			<div className={styles.SnippetDetailsView_main}>
				<DetailsViewMeta
					snippet={snippet}
					allTags={tags}
					allLanguages={languages}
				/>
				<DetailsActionBar initEditSnippet={initEditSnippet} />
				<TagsList tags={snippetTags} />
				{/* CODE SNIPPET SYNTAX */}
				<CodeViewer
					code={snippet.codeSrc}
					// language={getLangNameFromIdMap(snippet.languageID, languages.mapByID)}
					language="jsx"
				/>
				{/* USAGE EXAMPLE */}
				<CodeUsageExample
					code={snippet.codeSrc}
					// language={getLangNameFromIdMap(snippet.languageID, languages.mapByID)}
					language="jsx"
				/>
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
