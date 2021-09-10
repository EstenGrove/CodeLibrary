import React, { useState, useEffect, useContext } from "react";
import styles from "../css/pages/SnippetDetailsPage.module.scss";
import { PropTypes } from "prop-types";
import { GlobalStateContext } from "../state/GlobalState";
import { getTagsBySnippet } from "../helpers/utils_tags";
// components
import SnippetDetailsView from "../views/SnippetDetailsView";
import EditSnippet from "../components/snippets/EditSnippet";
import SnippetEditor from "../components/snippets/SnippetEditor";

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

// prop-types' definitions (example #1)
const snippetProps = {
	headings: [`Name`, `Type`, `Desc`, `Default`, `Usage`],
	data: [
		{
			name: `handleClick`,
			type: `function`,
			desc: `'onClick' handler for button. Forwards 'event' object.`,
			default: `N/A`,
			usage: `(e) => handleClick(e) || handleClick(e)`,
		},
		{
			name: `handleSave`,
			type: `function`,
			desc: `'onSubmit' handler for form. Forwards 'event' object.`,
			default: `N/A`,
			usage: `(e) => handleSave(e) || handleSave(e)`,
		},
		{
			name: `listData`,
			type: `array`,
			desc: `array of object records for the UI to render`,
			default: `object[] (Defaults to empty array)`,
			// usage: `listData[]`,
			usage: `listData = []`,
		},
		{
			name: `tags`,
			type: `array`,
			desc: `array of 'tag' object records from database, stored in state.`,
			default: `object[] (Defaults to empty array)`,
			usage: `tags = []`,
		},
		{
			name: `user`,
			type: `object`,
			desc: `object of current user's properties such as username, password etc.`,
			default: `{} (Defaults to empty object)`,
			usage: `user = {}`,
		},
	],
};

const SnippetDetailsPage = () => {
	const { state: globalState, dispatch: dispatchToState } =
		useContext(GlobalStateContext);
	const { snippets, tags, languages } = globalState;
	const { active } = snippets;
	// local state
	const [showEditSnippetModal, setShowEditSnippetModal] = useState(false);
	const [snippetTags, setSnippetTags] = useState(() => {
		return getTagsBySnippet(tagsBySnippet, tags.records);
	});
	// edit snippet state
	// const {form}

	const initEditSnippet = () => {
		setShowEditSnippetModal(true);
		console.log(`Was clicked!`);
	};

	const closeEditSnippetModal = () => {
		setShowEditSnippetModal(false);
	};

	// get tags by snippet onMount
	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		setSnippetTags(() => {
			return getTagsBySnippet(tagsBySnippet, tags.records);
		});
		return () => {
			isMounted = false;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className={styles.SnippetDetailsPage}>
				<SnippetDetailsView
					tags={tags}
					languages={languages}
					snippet={active}
					snippetTags={snippetTags}
					snippetProps={snippetProps}
					globalState={globalState}
					dispatchToState={dispatchToState}
					initEditSnippet={initEditSnippet}
					closeEditSnippetModal={closeEditSnippetModal}
				/>
			</div>

			{showEditSnippetModal && (
				<EditSnippet
					activeSnippet={active}
					closeModal={closeEditSnippetModal}
					allTags={tags.records}
					allLangs={languages.records}
				/>
			)}
		</>
	);
};

export default SnippetDetailsPage;

SnippetDetailsPage.defaultProps = {};

SnippetDetailsPage.propTypes = {
	globalState: PropTypes.object,
	dispatchToState: PropTypes.func,
};
