import React from "react";
import styles from "../../css/snippets/SnippetTitle.module.scss";
import { PropTypes } from "prop-types";

const SnippetTitle = ({ name }) => {
	return <h4 className={styles.SnippetTitle}>{name}</h4>;
};

export default SnippetTitle;

SnippetTitle.defaultProps = {};

SnippetTitle.propTypes = {
	name: PropTypes.string,
};
