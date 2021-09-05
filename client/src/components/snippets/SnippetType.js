import React from "react";
import styles from "../../css/snippets/SnippetType.module.scss";
import { PropTypes } from "prop-types";

const SnippetType = ({ type }) => {
	return (
		<div className={styles.SnippetType}>
			<span className={styles.SnippetType_type}>{type}</span>
		</div>
	);
};

export default SnippetType;

SnippetType.defaultProps = {};

SnippetType.propTypes = {};
