import React, { useReducer } from "react";
import styles from "../../css/snippets/SnippetsSearchController.module.scss";
import { PropTypes } from "prop-types";

// REQUIREMENTS:
// - Should contain search & sort UI
// - Should contain card sections (ie react, bash, utils etc.)
// - Should handle searching/sorting and UI updates for it

const initialState = {
	snippets: {
		// include snippets grouped grouped by: 'type', 'tag', 'lang' etc.
	},
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SEARCH": {
			return { ...state };
		}
		// SORT VIA DROPDOWN SELECTOR
		case "SORT_BY_TYPE": {
			return { ...state };
		}
		case "SORT_BY_LANG": {
			return { ...state };
		}
		case "SORT_BY_TAG": {
			return { ...state };
		}
		// FILTER VIA SHOW/HIDE TOGGLES
		case "FILTER_BY_TAG": {
			return { ...state };
		}
		case "FILTER_BY_TYPE": {
			return { ...state };
		}
		case "FILTER_BY_LANG": {
			return { ...state };
		}

		default:
			return { ...state };
	}
};

const SnippetsSearchController = ({
	allSnippets = [],
	allTags = [],
	allLanguages = [],
	allSnippetTypes = [],
}) => {
	const [localState, dispatchLocal] = useReducer(reducer, {
		...initialState,
		// process props into 'localState' onMount
	});

	return (
		<div className={styles.SnippetsSearchController}>
			{/*  */}
			{/*  */}
			{/*  */}
		</div>
	);
};

export default SnippetsSearchController;

SnippetsSearchController.defaultProps = {};

SnippetsSearchController.propTypes = {};
