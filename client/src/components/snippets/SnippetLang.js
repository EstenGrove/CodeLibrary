import React from "react";
import styles from "../../css/snippets/SnippetLang.module.scss";
import { PropTypes } from "prop-types";

const SnippetLang = ({ language }) => {
	return (
		<div className={styles.SnippetLang}>
			<span className={styles.SnippetLang_lang}>{language}</span>
		</div>
	);
};

export default SnippetLang;

SnippetLang.defaultProps = {};

SnippetLang.propTypes = {};
