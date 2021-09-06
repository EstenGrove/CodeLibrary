import React from "react";
import styles from "../../css/snippets/SnippetCardList.module.scss";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import SnippetCard from "./SnippetCard";

// REQUIREMENTS:
// - Shows a list of <SnippetCard/> components

const SnippetCardList = ({
	snippets = [],
	tags = [],
	snippetTypes = [],
	languages = [],
	dispatchToState,
}) => {
	return (
		<div className={styles.SnippetCardList}>
			{!isEmptyArray(snippets) &&
				snippets.map((snippet, idx) => (
					<SnippetCard
						key={`Snippet--${snippet.id}-${idx}`}
						snippet={snippet}
						tags={tags}
						snippetTypes={snippetTypes}
						languages={languages}
						dispatchToState={dispatchToState}
					/>
				))}
		</div>
	);
};

export default SnippetCardList;

SnippetCardList.defaultProps = {};

SnippetCardList.propTypes = {};
