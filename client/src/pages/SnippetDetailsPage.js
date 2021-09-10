import React, { useState, useContext } from "react";
import styles from "../css/pages/SnippetDetailsPage.module.scss";
import { PropTypes } from "prop-types";
import { GlobalStateContext } from "../state/GlobalState";
import { getTagsBySnippet } from "../helpers/utils_tags";
// components
import SnippetDetailsView from "../views/SnippetDetailsView";

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

const snippetProps = {
	headings: [`Name`, `Type`, `Desc`, `Usage`],
	data: [
		{
			name: `handleClick`,
			type: `function`,
			desc: `'onClick' handler for button`,
			usage: `(e) => handleClick(e) || handleClick(e)`,
		},
		{
			name: `handleSave`,
			type: `function`,
			desc: `'onSubmit' handler for form`,
			usage: `(e) => handleSave(e) || handleSave(e)`,
		},
		{
			name: `listData`,
			type: `array`,
			desc: `array of object's data for UI to render`,
			usage: `listData[]`,
		},
		{
			name: `tags`,
			type: `array`,
			desc: `array of 'tag' object's fetched from database, stored in state.`,
			usage: `tags[]`,
		},
		{
			name: `user`,
			type: `object`,
			desc: `object of current user's properties such as username, password etc.`,
			usage: `user{}`,
		},
	],
};

const SnippetDetailsPage = () => {
	const { state: globalState, dispatch: dispatchToState } =
		useContext(GlobalStateContext);
	const { snippets, tags, languages } = globalState;
	const { active } = snippets;
	// local state
	const [snippetTags, setSnippetTags] = useState(() => {
		return getTagsBySnippet(tagsBySnippet, tags.records);
	});

	return (
		<div className={styles.SnippetDetailsPage}>
			<SnippetDetailsView
				tags={tags}
				languages={languages}
				snippet={active}
				snippetTags={snippetTags}
				snippetProps={snippetProps}
				globalState={globalState}
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
