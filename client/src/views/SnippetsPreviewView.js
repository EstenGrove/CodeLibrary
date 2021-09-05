import React from "react";
import styles from "../css/views/SnippetsPreviewView.module.scss";
import { PropTypes } from "prop-types";
import Section from "../components/sections/Section";

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
};

const SnippetsPreviewView = () => {
	return (
		<div className={styles.SnippetsPreviewView}>
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
		</div>
	);
};

export default SnippetsPreviewView;

SnippetsPreviewView.defaultProps = {};

SnippetsPreviewView.propTypes = {};
