import React, { useState, useContext } from "react";
import styles from "../css/pages/SnippetDetailsPage.module.scss";
import { PropTypes } from "prop-types";
import { GlobalStateContext } from "../state/GlobalState";
// components
import SnippetDetailsView from "../views/SnippetDetailsView";
import { getTagsBySnippet } from "../helpers/utils_tags";

// REQUIREMENTS:
// - Shows ALL relevant snippet details
// - Shows props, settings, usage examples etc.

const tagsBySnippet = [
	{
		id: 1,
		tagID: 1,
		snippetID: 1,
		tagName: `component`,
		dateCreated: new Date(2021, 8, 25, 14, 46),
		isActive: true,
	},
	{
		id: 2,
		tagID: 2,
		snippetID: 14,
		tagName: `hook`,
		dateCreated: new Date(2021, 8, 25, 14, 46),
		isActive: true,
	},
];

const SnippetDetailsPage = () => {
	const { state: globalState, dispatch: dispatchToState } =
		useContext(GlobalStateContext);
	const { snippets, tags, languages } = globalState;
	const { active } = snippets;
	// local state
	const [snippetTags, setSnippetTags] = useState(() => {
		return getTagsBySnippet(tagsBySnippet, tags.records);
	});

	console.log("tags", tags.records);
	console.log("snippetTags", snippetTags);

	return (
		<div className={styles.SnippetDetailsPage}>
			<SnippetDetailsView
				tags={tags}
				languages={languages}
				snippet={active}
				snippetTags={snippetTags}
				dispatchToState={dispatchToState}
			/>
		</div>
	);
};

export default SnippetDetailsPage;

SnippetDetailsPage.defaultProps = {};

SnippetDetailsPage.propTypes = {
	globalState: PropTypes.object,
	dispatchToState: PropTypes.func,
};
