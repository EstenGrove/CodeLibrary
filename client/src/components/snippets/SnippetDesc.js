import React from "react";
import styles from "../../css/snippets/SnippetDesc.module.scss";
import { PropTypes } from "prop-types";

const SnippetDesc = ({ desc }) => {
	return <span className={styles.SnippetDesc}>{desc}</span>;
};

export default SnippetDesc;

SnippetDesc.defaultProps = {};

SnippetDesc.propTypes = {};
