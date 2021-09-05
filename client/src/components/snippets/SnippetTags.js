import React from "react";
import styles from "../../css/snippets/SnippetTags.module.scss";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import Tag from "../tags/Tag";

const SnippetTags = ({ assignedTags = [], removeTagFromSnippet }) => {
	return (
		<div className={styles.SnippetTags}>
			{!isEmptyArray(assignedTags) &&
				assignedTags.map((tag, idx) => (
					<Tag
						key={`Tag:${tag?.name}-${idx}`}
						tag={tag}
						removeTag={() => removeTagFromSnippet(tag?.id)}
					/>
				))}
		</div>
	);
};

export default SnippetTags;

SnippetTags.defaultProps = {};

SnippetTags.propTypes = {};
