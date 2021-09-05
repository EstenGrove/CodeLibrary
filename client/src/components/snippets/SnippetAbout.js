import React from "react";
import styles from "../../css/snippets/SnippetAbout.module.scss";
import { PropTypes } from "prop-types";
import SnippetDesc from "./SnippetDesc";
import SnippetLang from "./SnippetLang";
import { getLanguageNameFromID } from "../../helpers/utils_snippets";

const SnippetAbout = ({ desc, languageID, languages = [] }) => {
	return (
		<div className={styles.SnippetAbout}>
			<div className={styles.SnippetAbout_desc}>
				<SnippetDesc desc={desc} />
			</div>
			<div className={styles.SnippetAbout_lang}>
				<SnippetLang language={getLanguageNameFromID(languageID, languages)} />
			</div>
		</div>
	);
};

export default SnippetAbout;

SnippetAbout.defaultProps = {};

SnippetAbout.propTypes = {};
