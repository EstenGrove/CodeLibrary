import React from "react";
import styles from "../css/views/SnippetDetailsView.module.scss";
import { PropTypes } from "prop-types";
// mock img
import DetailsViewMeta from "../components/details/DetailsViewMeta";
import TagsList from "../components/tags/TagsList";
import DetailsActionBar from "../components/details/DetailsActionBar";
import CodeViewer from "../components/code/CodeViewer";

const SnippetDetailsView = ({
	snippet,
	snippetTags = [],
	tags = [],
	globalState = {},
	languages = [],
	dispatchToState,
	initEditSnippet,
}) => {
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
				<CodeViewer code={snippet.codeSrc} language="javascript" />
			</div>
		</div>
	);
};

export default SnippetDetailsView;

SnippetDetailsView.defaultProps = {};

SnippetDetailsView.propTypes = {};
