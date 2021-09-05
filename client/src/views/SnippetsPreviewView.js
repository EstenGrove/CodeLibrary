import React, { useState } from "react";
import styles from "../css/views/SnippetsPreviewView.module.scss";
import { PropTypes } from "prop-types";
import Section from "../components/sections/Section";
import SearchInput from "../components/shared/SearchInput";
import { useForm } from "../utils/useForm";
import SnippetCardSections from "../components/snippets/SnippetCardSections";

const SnippetsPreviewView = () => {
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
