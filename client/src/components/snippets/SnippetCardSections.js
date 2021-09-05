import React from "react";
import styles from "../../css/snippets/SnippetCardSections.module.scss";
import { PropTypes } from "prop-types";
import Section from "../sections/Section";

const headers = {
	components: {
		title: "React Components",
		subtitle: "All component snippets.",
	},
	hooks: {
		title: "React Hooks",
		subtitle: "All custom hooks.",
	},
	utils: {
		title: "Various Functions & Utils",
		subtitle: "Collection of various Javascript utils.",
	},
	bash: {
		title: "Bash Commands & Scripts",
		subtitle: "Bash commands and scripts for use.",
	},
};

const SnippetCardSections = ({ searchVal }) => {
	return (
		<div className={styles.SnippetCardSections}>
			{/* COMPONENTS */}
			<Section
				title={headers.components.title}
				subtitle={headers.components.subtitle}
			>
				{/*  */}
				{/*  */}
				{/*  */}
			</Section>
			{/* HOOKS */}
			<Section title={headers.hooks.title} subtitle={headers.hooks.subtitle}>
				{/*  */}
				{/*  */}
				{/*  */}
			</Section>
			{/* UTILS (javascript) */}
			<Section title={headers.utils.title} subtitle={headers.utils.subtitle}>
				{/*  */}
				{/*  */}
				{/*  */}
			</Section>
			{/* BASH (bash scripts) */}
			<Section title={headers.bash.title} subtitle={headers.bash.subtitle}>
				{/*  */}
				{/*  */}
				{/*  */}
			</Section>
		</div>
	);
};

export default SnippetCardSections;

SnippetCardSections.defaultProps = {};

SnippetCardSections.propTypes = {};
