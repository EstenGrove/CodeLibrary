import React, { useState } from "react";
import styles from "../css/views/SnippetsPreviewView.module.scss";
import { PropTypes } from "prop-types";
import { useForm } from "../utils/useForm";
// components
import SearchInput from "../components/shared/SearchInput";
import SnippetCardSections from "../components/snippets/SnippetCardSections";
import Section from "../components/sections/Section";

// REQUIREMENTS:
// - Shows ALL snippet card previews, where clicking will go to the details pageview
// - Show search, sort and filter options:
// 		- Search by:
// 			- Snippet name
// 			- Date created
// 			- Code snippet
// 		- Sort by:
// 			- Language
// 			- Tag
// 			- Date created
// 		- Filter by:
// 			- Tag
// 			- Language
// 			- Date created
// 			- A combination of the above options
// - Snippet details:
// 		- Show editable code snippet
// 		- Show data type definitions (eg. args, props, state etc.)
// 		- Show usage example in readOnly editor

const SnippetsPreviewView = ({ globalState, dispatchToState }) => {
	const { formState, setFormState, handleChange, handleReset } = useForm({
		search: "",
	});
	const { values } = formState;
	// snippets grouped by 'type'
	const [allSnippets, setAllSnippets] = useState({
		components: [],
		hooks: [],
		utils: [],
		scripts: [],
	});

	const handleCustom = (name, val) => {
		setFormState({
			...formState,
			values: {
				...values,
				[name]: val,
			},
		});
	};

	const handleSearch = (name, val) => {
		setFormState({
			...formState,
			values: {
				...values,
				search: val,
			},
		});
	};

	return (
		<div className={styles.SnippetsPreviewView}>
			<div className={styles.SnippetsPreviewView_search}>
				<SearchInput
					name="search"
					id="search"
					val={values.search}
					searchHandler={handleCustom}
				/>
			</div>
			<div className={styles.SnippetsPreviewView_main}>
				<SnippetCardSections />
			</div>
		</div>
	);
};

export default SnippetsPreviewView;

SnippetsPreviewView.defaultProps = {};

SnippetsPreviewView.propTypes = {};
